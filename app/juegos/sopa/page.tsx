"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import sopasData from "@/content/games/sopas.json";

const GRID_SIZE = 12;

type Direction = [number, number];
const DIRECTIONS: Direction[] = [
  [0, 1],   // right
  [1, 0],   // down
  [1, 1],   // diagonal down-right
  [-1, 1],  // diagonal up-right
  [0, -1],  // left
  [-1, 0],  // up
  [-1, -1], // diagonal up-left
  [1, -1],  // diagonal down-left
];

interface PlacedWord {
  word: string;
  cells: [number, number][];
}

function getWeeklyPuzzle() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const weekNumber = Math.ceil(
    ((now.getTime() - startOfYear.getTime()) / 86400000 + startOfYear.getDay() + 1) / 7
  );
  return sopasData[weekNumber % sopasData.length];
}

function generateGrid(words: string[]): {
  grid: string[][];
  placedWords: PlacedWord[];
} {
  const grid: string[][] = Array.from({ length: GRID_SIZE }, () =>
    Array(GRID_SIZE).fill("")
  );
  const placedWords: PlacedWord[] = [];

  // Sort words by length (longest first) for better placement
  const sorted = [...words].sort((a, b) => b.length - a.length);

  // Use a seeded random based on week for consistent puzzles
  const now = new Date();
  const weekSeed =
    now.getFullYear() * 100 +
    Math.ceil(
      ((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / 86400000 +
        new Date(now.getFullYear(), 0, 1).getDay() +
        1) /
        7
    );

  let seed = weekSeed;
  function seededRandom() {
    seed = (seed * 16807 + 0) % 2147483647;
    return (seed - 1) / 2147483646;
  }

  for (const word of sorted) {
    const normalized = word
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    let placed = false;
    const attempts = 100;

    for (let attempt = 0; attempt < attempts; attempt++) {
      const dir = DIRECTIONS[Math.floor(seededRandom() * DIRECTIONS.length)];
      const [dr, dc] = dir;

      const maxRow =
        dr > 0
          ? GRID_SIZE - normalized.length
          : dr < 0
          ? normalized.length - 1
          : GRID_SIZE - 1;
      const minRow = dr < 0 ? normalized.length - 1 : 0;
      const maxCol =
        dc > 0
          ? GRID_SIZE - normalized.length
          : dc < 0
          ? normalized.length - 1
          : GRID_SIZE - 1;
      const minCol = dc < 0 ? normalized.length - 1 : 0;

      if (minRow > maxRow || minCol > maxCol) continue;

      const startRow =
        minRow + Math.floor(seededRandom() * (maxRow - minRow + 1));
      const startCol =
        minCol + Math.floor(seededRandom() * (maxCol - minCol + 1));

      let canPlace = true;
      const cells: [number, number][] = [];

      for (let k = 0; k < normalized.length; k++) {
        const r = startRow + dr * k;
        const c = startCol + dc * k;
        if (
          r < 0 ||
          r >= GRID_SIZE ||
          c < 0 ||
          c >= GRID_SIZE
        ) {
          canPlace = false;
          break;
        }
        if (grid[r][c] !== "" && grid[r][c] !== normalized[k]) {
          canPlace = false;
          break;
        }
        cells.push([r, c]);
      }

      if (canPlace) {
        cells.forEach(([r, c], k) => {
          grid[r][c] = normalized[k];
        });
        placedWords.push({ word, cells });
        placed = true;
        break;
      }
    }

    if (!placed) {
      // Force place in first available row
      for (let r = 0; r < GRID_SIZE; r++) {
        let canPlace = true;
        const cells: [number, number][] = [];
        const normalized2 = word
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        for (let c = 0; c < normalized2.length && c < GRID_SIZE; c++) {
          if (grid[r][c] !== "" && grid[r][c] !== normalized2[c]) {
            canPlace = false;
            break;
          }
          cells.push([r, c]);
        }
        if (canPlace && cells.length === normalized2.length) {
          cells.forEach(([cr, cc], k) => {
            grid[cr][cc] = normalized2[k];
          });
          placedWords.push({ word, cells });
          break;
        }
      }
    }
  }

  // Fill empty cells with random letters
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (grid[r][c] === "") {
        grid[r][c] = alphabet[Math.floor(seededRandom() * alphabet.length)];
      }
    }
  }

  return { grid, placedWords };
}

export default function SopaPage() {
  const puzzle = getWeeklyPuzzle();
  const { grid, placedWords } = useMemo(
    () => generateGrid(puzzle.words),
    [puzzle.words]
  );

  const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
  const [selecting, setSelecting] = useState(false);
  const [selectedCells, setSelectedCells] = useState<[number, number][]>([]);
  const [highlightedCells, setHighlightedCells] = useState<Set<string>>(
    new Set()
  );
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(true);

  // Timer
  useState(() => {
    const interval = setInterval(() => {
      if (timerActive) setTimer((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  const cellKey = (r: number, c: number) => `${r}-${c}`;

  const checkSelection = useCallback(
    (cells: [number, number][]) => {
      for (const pw of placedWords) {
        if (foundWords.has(pw.word)) continue;

        const matches =
          pw.cells.length === cells.length &&
          (pw.cells.every(
            ([r, c], i) => cells[i][0] === r && cells[i][1] === c
          ) ||
            pw.cells.every(
              ([r, c], i) =>
                cells[cells.length - 1 - i][0] === r &&
                cells[cells.length - 1 - i][1] === c
            ));

        if (matches) {
          const newFound = new Set(foundWords);
          newFound.add(pw.word);
          setFoundWords(newFound);

          const newHighlighted = new Set(highlightedCells);
          pw.cells.forEach(([r, c]) => newHighlighted.add(cellKey(r, c)));
          setHighlightedCells(newHighlighted);

          if (newFound.size === placedWords.length) {
            setTimerActive(false);
          }
          return;
        }
      }
    },
    [foundWords, placedWords, highlightedCells]
  );

  const handleCellDown = (r: number, c: number) => {
    setSelecting(true);
    setSelectedCells([[r, c]]);
  };

  const handleCellEnter = (r: number, c: number) => {
    if (!selecting) return;
    // Only allow straight lines
    if (selectedCells.length === 0) return;

    const [startR, startC] = selectedCells[0];
    const dr = r - startR;
    const dc = c - startC;

    // Check if it's a valid line direction
    const len = Math.max(Math.abs(dr), Math.abs(dc));
    if (len === 0) return;
    const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
    const stepC = dc === 0 ? 0 : dc / Math.abs(dc);

    // Only valid if it's a straight line
    if (
      Math.abs(dr) !== 0 &&
      Math.abs(dc) !== 0 &&
      Math.abs(dr) !== Math.abs(dc)
    )
      return;

    const cells: [number, number][] = [];
    for (let i = 0; i <= len; i++) {
      cells.push([startR + stepR * i, startC + stepC * i]);
    }
    setSelectedCells(cells);
  };

  const handleCellUp = () => {
    if (selecting && selectedCells.length > 1) {
      checkSelection(selectedCells);
    }
    setSelecting(false);
    setSelectedCells([]);
  };

  const isSelected = (r: number, c: number) =>
    selectedCells.some(([sr, sc]) => sr === r && sc === c);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const allFound = foundWords.size === placedWords.length;

  return (
    <div
      className="min-h-screen bg-paper px-4 py-8 md:px-12 select-none"
      onMouseUp={handleCellUp}
      onTouchEnd={handleCellUp}
    >
      <div className="max-w-2xl mx-auto">
        <Link
          href="/#puzzles"
          className="font-mono text-xs uppercase tracking-wider text-grey hover:text-red transition-colors mb-8 inline-block"
        >
          &larr; Volver
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-2">
          Sopa de Letras
        </h1>
        <p className="font-body text-base text-grey text-center mb-2">
          Encuentra las palabras escondidas del ecosistema.
        </p>
        <p className="font-mono text-xs text-grey text-center mb-6">
          {foundWords.size}/{placedWords.length} palabras &middot;{" "}
          {formatTime(timer)}
          {allFound && " — Completado!"}
        </p>

        {/* Word list */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {placedWords.map((pw) => (
            <span
              key={pw.word}
              className={`font-mono text-xs uppercase tracking-wider px-2 py-1 rounded-sm ${
                foundWords.has(pw.word)
                  ? "bg-red/10 text-red line-through"
                  : "bg-surface text-grey"
              }`}
            >
              {pw.word}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-grid gap-0 border border-ink/10"
            style={{
              gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
            }}
          >
            {grid.map((row, ri) =>
              row.map((letter, ci) => (
                <div
                  key={`${ri}-${ci}`}
                  className={`
                    w-7 h-7 md:w-9 md:h-9 flex items-center justify-center
                    font-mono text-xs md:text-sm font-bold
                    border border-ink/5 cursor-pointer
                    transition-colors duration-100
                    ${
                      highlightedCells.has(cellKey(ri, ci))
                        ? "bg-red/15 text-red"
                        : isSelected(ri, ci)
                        ? "bg-yellow-200 text-ink"
                        : "bg-paper text-ink hover:bg-surface"
                    }
                  `}
                  onMouseDown={() => handleCellDown(ri, ci)}
                  onMouseEnter={() => handleCellEnter(ri, ci)}
                  onTouchStart={() => handleCellDown(ri, ci)}
                  onTouchMove={(e) => {
                    const touch = e.touches[0];
                    const el = document.elementFromPoint(
                      touch.clientX,
                      touch.clientY
                    );
                    if (el) {
                      const cellData = el.getAttribute("data-cell");
                      if (cellData) {
                        const [r, c] = cellData.split("-").map(Number);
                        handleCellEnter(r, c);
                      }
                    }
                  }}
                  data-cell={`${ri}-${ci}`}
                >
                  {letter}
                </div>
              ))
            )}
          </div>
        </div>

        {allFound && (
          <p className="font-serif text-xl font-bold text-center">
            Felicidades! Encontraste todas las palabras.
          </p>
        )}
      </div>
    </div>
  );
}
