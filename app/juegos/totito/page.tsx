"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

type Player = "X" | "O" | null;
type Board = Player[];
type Difficulty = "easy" | "medium" | "hard";

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function checkWinner(board: Board): Player {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function getWinningLine(board: Board): number[] | null {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return line;
    }
  }
  return null;
}

function getEmptyCells(board: Board): number[] {
  return board.reduce<number[]>((acc, cell, i) => {
    if (!cell) acc.push(i);
    return acc;
  }, []);
}

function minimax(board: Board, isMaximizing: boolean): number {
  const winner = checkWinner(board);
  if (winner === "O") return 10;
  if (winner === "X") return -10;
  if (getEmptyCells(board).length === 0) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    for (const i of getEmptyCells(board)) {
      board[i] = "O";
      best = Math.max(best, minimax(board, false));
      board[i] = null;
    }
    return best;
  } else {
    let best = Infinity;
    for (const i of getEmptyCells(board)) {
      board[i] = "X";
      best = Math.min(best, minimax(board, true));
      board[i] = null;
    }
    return best;
  }
}

function getBestMove(board: Board): number {
  let bestScore = -Infinity;
  let bestMove = -1;
  for (const i of getEmptyCells(board)) {
    board[i] = "O";
    const score = minimax(board, false);
    board[i] = null;
    if (score > bestScore) {
      bestScore = score;
      bestMove = i;
    }
  }
  return bestMove;
}

function getAIMove(board: Board, difficulty: Difficulty): number {
  const empty = getEmptyCells(board);
  if (empty.length === 0) return -1;

  if (difficulty === "easy") {
    return empty[Math.floor(Math.random() * empty.length)];
  }

  if (difficulty === "medium") {
    return Math.random() > 0.4
      ? getBestMove([...board])
      : empty[Math.floor(Math.random() * empty.length)];
  }

  return getBestMove([...board]);
}

export default function TotitoPage() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [scores, setScores] = useState({ wins: 0, losses: 0, draws: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [animatingCell, setAnimatingCell] = useState<number | null>(null);

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameOver(false);
    setAnimatingCell(null);
  }, []);

  const handleClick = useCallback(
    (index: number) => {
      if (board[index] || !isPlayerTurn || gameOver) return;

      const newBoard = [...board];
      newBoard[index] = "X";
      setBoard(newBoard);
      setAnimatingCell(index);

      const winner = checkWinner(newBoard);
      if (winner) {
        setGameOver(true);
        setScores((s) => ({ ...s, wins: s.wins + 1 }));
        return;
      }

      if (getEmptyCells(newBoard).length === 0) {
        setGameOver(true);
        setScores((s) => ({ ...s, draws: s.draws + 1 }));
        return;
      }

      setIsPlayerTurn(false);

      // AI move with delay
      setTimeout(() => {
        const aiMove = getAIMove(newBoard, difficulty);
        if (aiMove >= 0) {
          newBoard[aiMove] = "O";
          setBoard([...newBoard]);
          setAnimatingCell(aiMove);

          const aiWinner = checkWinner(newBoard);
          if (aiWinner) {
            setGameOver(true);
            setScores((s) => ({ ...s, losses: s.losses + 1 }));
          } else if (getEmptyCells(newBoard).length === 0) {
            setGameOver(true);
            setScores((s) => ({ ...s, draws: s.draws + 1 }));
          }
        }
        setIsPlayerTurn(true);
      }, 400);
    },
    [board, isPlayerTurn, gameOver, difficulty]
  );

  const winner = checkWinner(board);
  const winningLine = getWinningLine(board);
  const isDraw = !winner && getEmptyCells(board).length === 0;

  return (
    <div className="min-h-screen bg-paper px-4 py-8 md:px-12">
      <div className="max-w-md mx-auto">
        <Link
          href="/#puzzles"
          className="font-mono text-xs uppercase tracking-wider text-grey hover:text-red transition-colors mb-8 inline-block"
        >
          &larr; Volver
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-normal text-center mb-2">
          Totito
        </h1>
        <p className="font-body text-base text-grey text-center mb-8">
          El clásico. Reta a la máquina.
        </p>

        {/* Difficulty selector */}
        <div className="flex justify-center gap-3 mb-8">
          {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
            <button
              key={d}
              onClick={() => {
                setDifficulty(d);
                resetGame();
              }}
              className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-sm transition-colors ${
                difficulty === d
                  ? "bg-ink text-paper"
                  : "text-grey hover:text-ink"
              }`}
            >
              {d === "easy" ? "Fácil" : d === "medium" ? "Medio" : "Difícil"}
            </button>
          ))}
        </div>

        {/* Board */}
        <div className="relative max-w-[300px] mx-auto mb-8">
          <div className="grid grid-cols-3 gap-0">
            {board.map((cell, i) => {
              const row = Math.floor(i / 3);
              const col = i % 3;
              const isWinning = winningLine?.includes(i);
              return (
                <button
                  key={i}
                  onClick={() => handleClick(i)}
                  className={`
                    aspect-square flex items-center justify-center
                    text-4xl md:text-5xl font-serif font-normal
                    transition-all duration-200
                    ${col < 2 ? "border-r-2 border-ink/20" : ""}
                    ${row < 2 ? "border-b-2 border-ink/20" : ""}
                    ${!cell && !gameOver ? "hover:bg-surface/50 cursor-pointer" : "cursor-default"}
                    ${isWinning ? "bg-red/10" : ""}
                    ${animatingCell === i ? "animate-fade-in" : ""}
                  `}
                  disabled={!!cell || gameOver || !isPlayerTurn}
                >
                  {cell === "X" && (
                    <span className="text-red">&#x2715;</span>
                  )}
                  {cell === "O" && (
                    <span className="text-ink">&#x25CB;</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Status */}
        <div className="text-center mb-6">
          {winner && (
            <p className="font-serif text-xl font-normal">
              {winner === "X" ? "Ganaste!" : "La máquina ganó."}
            </p>
          )}
          {isDraw && (
            <p className="font-serif text-xl font-normal">Empate!</p>
          )}
          {gameOver && (
            <button
              onClick={resetGame}
              className="mt-3 font-mono text-xs uppercase tracking-wider text-red hover:text-ink transition-colors"
            >
              Jugar de nuevo &rarr;
            </button>
          )}
        </div>

        {/* Scoreboard */}
        <div className="flex justify-center gap-8 font-mono text-xs uppercase tracking-wider text-grey">
          <div className="text-center">
            <span className="block text-lg font-bold text-red">
              {scores.wins}
            </span>
            Victorias
          </div>
          <div className="text-center">
            <span className="block text-lg font-bold text-ink">
              {scores.draws}
            </span>
            Empates
          </div>
          <div className="text-center">
            <span className="block text-lg font-bold text-grey">
              {scores.losses}
            </span>
            Derrotas
          </div>
        </div>
      </div>
    </div>
  );
}
