"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import crucigramasData from "@/content/games/crucigramas.json";

interface Word {
  word: string;
  row: number;
  col: number;
  direction: "across" | "down";
  number: number;
  clue: string;
}

interface CellData {
  letter: string;
  number?: number;
  isBlack: boolean;
  wordIndices: number[];
}

function getWeeklyPuzzle() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const weekNumber = Math.ceil(
    ((now.getTime() - startOfYear.getTime()) / 86400000 + startOfYear.getDay() + 1) / 7
  );
  return crucigramasData[weekNumber % crucigramasData.length];
}

function buildGrid(size: number, words: Word[]) {
  const grid: CellData[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ({
      letter: "",
      isBlack: true,
      wordIndices: [],
    }))
  );

  words.forEach((w, wi) => {
    for (let k = 0; k < w.word.length; k++) {
      const r = w.direction === "down" ? w.row + k : w.row;
      const c = w.direction === "across" ? w.col + k : w.col;
      if (r < size && c < size) {
        grid[r][c].letter = w.word[k];
        grid[r][c].isBlack = false;
        grid[r][c].wordIndices.push(wi);
        if (k === 0) {
          grid[r][c].number = w.number;
        }
      }
    }
  });

  return grid;
}

export default function CrucigramaPage() {
  const puzzle = getWeeklyPuzzle();
  const words = puzzle.words as Word[];
  const grid = buildGrid(puzzle.size, words);

  const [userGrid, setUserGrid] = useState<string[][]>(() =>
    Array.from({ length: puzzle.size }, () => Array(puzzle.size).fill(""))
  );
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(null);
  const [selectedDirection, setSelectedDirection] = useState<"across" | "down">("across");
  const [timer, setTimer] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[][]>(
    Array.from({ length: puzzle.size }, () => Array(puzzle.size).fill(null))
  );

  useEffect(() => {
    if (isComplete) return;
    const interval = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [isComplete]);

  const checkComplete = useCallback(
    (newGrid: string[][]) => {
      const complete = words.every((w) => {
        for (let k = 0; k < w.word.length; k++) {
          const r = w.direction === "down" ? w.row + k : w.row;
          const c = w.direction === "across" ? w.col + k : w.col;
          if (newGrid[r]?.[c]?.toUpperCase() !== w.word[k]) return false;
        }
        return true;
      });
      if (complete) setIsComplete(true);
    },
    [words]
  );

  const handleInput = (row: number, col: number, value: string) => {
    const char = value.slice(-1).toUpperCase();
    const newGrid = userGrid.map((r) => [...r]);
    newGrid[row][col] = char;
    setUserGrid(newGrid);
    checkComplete(newGrid);

    if (char) {
      // Move to next cell in current direction
      const nr = selectedDirection === "down" ? row + 1 : row;
      const nc = selectedDirection === "across" ? col + 1 : col;
      if (nr < puzzle.size && nc < puzzle.size && !grid[nr][nc].isBlack) {
        setSelectedCell([nr, nc]);
        inputRefs.current[nr]?.[nc]?.focus();
      }
    }
  };

  const handleCellClick = (row: number, col: number) => {
    if (grid[row][col].isBlack) return;
    if (selectedCell && selectedCell[0] === row && selectedCell[1] === col) {
      setSelectedDirection((d) => (d === "across" ? "down" : "across"));
    }
    setSelectedCell([row, col]);
    inputRefs.current[row]?.[col]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
    if (e.key === "Backspace" && !userGrid[row][col]) {
      const pr = selectedDirection === "down" ? row - 1 : row;
      const pc = selectedDirection === "across" ? col - 1 : col;
      if (pr >= 0 && pc >= 0 && !grid[pr][pc].isBlack) {
        setSelectedCell([pr, pc]);
        inputRefs.current[pr]?.[pc]?.focus();
      }
    } else if (e.key === "ArrowRight") {
      const nc = col + 1;
      if (nc < puzzle.size && !grid[row][nc].isBlack) {
        setSelectedCell([row, nc]);
        inputRefs.current[row]?.[nc]?.focus();
      }
    } else if (e.key === "ArrowLeft") {
      const nc = col - 1;
      if (nc >= 0 && !grid[row][nc].isBlack) {
        setSelectedCell([row, nc]);
        inputRefs.current[row]?.[nc]?.focus();
      }
    } else if (e.key === "ArrowDown") {
      const nr = row + 1;
      if (nr < puzzle.size && !grid[nr][col].isBlack) {
        setSelectedCell([nr, col]);
        inputRefs.current[nr]?.[col]?.focus();
      }
    } else if (e.key === "ArrowUp") {
      const nr = row - 1;
      if (nr >= 0 && !grid[nr][col].isBlack) {
        setSelectedCell([nr, col]);
        inputRefs.current[nr]?.[col]?.focus();
      }
    }
  };

  const revealAll = () => {
    const newGrid = grid.map((row) =>
      row.map((cell) => (cell.isBlack ? "" : cell.letter))
    );
    setUserGrid(newGrid);
    setIsComplete(true);
  };

  const getCellColor = (row: number, col: number) => {
    const userVal = userGrid[row][col];
    if (!userVal) return "";
    return userVal.toUpperCase() === grid[row][col].letter
      ? "bg-green-100"
      : "bg-red-50";
  };

  const isHighlighted = (row: number, col: number) => {
    if (!selectedCell) return false;
    const [sr, sc] = selectedCell;
    if (row === sr && col === sc) return true;
    // Highlight same word
    const cellWords = grid[row][col].wordIndices;
    const selectedWords = grid[sr]?.[sc]?.wordIndices || [];
    return cellWords.some((wi) => {
      const w = words[wi];
      return (
        selectedWords.includes(wi) &&
        w.direction === selectedDirection
      );
    });
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const acrossClues = words.filter((w) => w.direction === "across").sort((a, b) => a.number - b.number);
  const downClues = words.filter((w) => w.direction === "down").sort((a, b) => a.number - b.number);

  return (
    <div className="min-h-screen bg-paper px-4 py-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#puzzles"
          className="font-mono text-xs uppercase tracking-wider text-grey hover:text-red transition-colors mb-8 inline-block"
        >
          &larr; Volver
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-normal text-center mb-2">
          Crucigrama
        </h1>
        <p className="font-body text-base text-grey text-center mb-2">
          Temática: gastronomía guatemalteca y el Lago de Atitlán.
        </p>
        <p className="font-mono text-xs text-grey text-center mb-8">
          {formatTime(timer)} {isComplete && " — Completado!"}
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Grid */}
          <div className="flex-shrink-0">
            <div
              className="inline-grid border border-ink/30"
              style={{
                gridTemplateColumns: `repeat(${puzzle.size}, minmax(0, 1fr))`,
              }}
            >
              {grid.map((row, ri) =>
                row.map((cell, ci) => (
                  <div
                    key={`${ri}-${ci}`}
                    className={`relative w-8 h-8 md:w-10 md:h-10 border border-ink/10 ${
                      cell.isBlack
                        ? "bg-ink"
                        : isHighlighted(ri, ci)
                        ? "bg-yellow-100"
                        : getCellColor(ri, ci) || "bg-paper"
                    }`}
                    onClick={() => handleCellClick(ri, ci)}
                  >
                    {cell.number && (
                      <span className="absolute top-0 left-0.5 text-[0.5rem] font-mono text-ink/60 leading-none">
                        {cell.number}
                      </span>
                    )}
                    {!cell.isBlack && (
                      <input
                        ref={(el) => {
                          inputRefs.current[ri][ci] = el;
                        }}
                        type="text"
                        maxLength={1}
                        value={userGrid[ri][ci]}
                        onChange={(e) => handleInput(ri, ci, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, ri, ci)}
                        onFocus={() => {
                          setSelectedCell([ri, ci]);
                        }}
                        className="w-full h-full bg-transparent text-center font-mono text-sm md:text-base font-bold uppercase outline-none cursor-pointer"
                        aria-label={`Celda ${ri + 1}, ${ci + 1}`}
                      />
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={revealAll}
                className="font-mono text-xs uppercase tracking-wider text-red hover:text-ink transition-colors"
              >
                Revelar todo
              </button>
            </div>
          </div>

          {/* Clues */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-serif text-lg font-normal mb-3">Horizontal</h3>
              {acrossClues.map((w) => (
                <p key={`a-${w.number}`} className="font-body text-grey mb-2">
                  <strong className="text-ink">{w.number}.</strong> {w.clue}
                </p>
              ))}
            </div>
            <div>
              <h3 className="font-serif text-lg font-normal mb-3">Vertical</h3>
              {downClues.map((w) => (
                <p key={`d-${w.number}`} className="font-body text-grey mb-2">
                  <strong className="text-ink">{w.number}.</strong> {w.clue}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
