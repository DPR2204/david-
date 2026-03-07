"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import wordleData from "@/content/games/wordle-words.json";

const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

function getDailyWord(): string {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const dayOfYear = Math.floor(
    (now.getTime() - start.getTime()) / 86400000
  );
  return wordleData.words[dayOfYear % wordleData.words.length];
}

type LetterStatus = "correct" | "present" | "absent" | "empty";

function evaluateGuess(
  guess: string,
  answer: string
): LetterStatus[] {
  const result: LetterStatus[] = Array(WORD_LENGTH).fill("absent");
  const answerChars = answer.split("");
  const guessChars = guess.split("");
  const used = Array(WORD_LENGTH).fill(false);

  // First pass: correct positions
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = "correct";
      used[i] = true;
    }
  }

  // Second pass: present but wrong position
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (result[i] === "correct") continue;
    for (let j = 0; j < WORD_LENGTH; j++) {
      if (!used[j] && guessChars[i] === answerChars[j]) {
        result[i] = "present";
        used[j] = true;
        break;
      }
    }
  }

  return result;
}

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

export default function WordlePage() {
  const [answer] = useState(() => getDailyWord());
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [shake, setShake] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const keyboardStatus = useCallback((): Record<string, LetterStatus> => {
    const status: Record<string, LetterStatus> = {};
    guesses.forEach((guess) => {
      const evaluation = evaluateGuess(guess, answer);
      guess.split("").forEach((letter, i) => {
        const current = status[letter];
        const newStatus = evaluation[i];
        if (
          !current ||
          newStatus === "correct" ||
          (newStatus === "present" && current !== "correct")
        ) {
          status[letter] = newStatus;
        }
      });
    });
    return status;
  }, [guesses, answer]);

  const submitGuess = useCallback(() => {
    if (currentGuess.length !== WORD_LENGTH) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess("");

    if (currentGuess === answer) {
      setWon(true);
      setGameOver(true);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameOver(true);
    }
  }, [currentGuess, guesses, answer]);

  const handleKey = useCallback(
    (key: string) => {
      if (gameOver) return;

      if (key === "ENTER") {
        submitGuess();
      } else if (key === "⌫" || key === "BACKSPACE") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (key.length === 1 && /[A-ZÑ]/.test(key)) {
        if (currentGuess.length < WORD_LENGTH) {
          setCurrentGuess((prev) => prev + key);
        }
      }
    },
    [gameOver, currentGuess, submitGuess]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      handleKey(e.key.toUpperCase());
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleKey]);

  const shareResult = () => {
    const emojiGrid = guesses
      .map((guess) => {
        const evaluation = evaluateGuess(guess, answer);
        return evaluation
          .map((s) =>
            s === "correct" ? "🟩" : s === "present" ? "🟨" : "⬛"
          )
          .join("");
      })
      .join("\n");

    const text = `Wordle del Lago ${guesses.length}/${MAX_GUESSES}\n\n${emojiGrid}`;
    navigator.clipboard.writeText(text);
    setShowShare(true);
    setTimeout(() => setShowShare(false), 2000);
  };

  const getStatusColor = (status: LetterStatus) => {
    switch (status) {
      case "correct":
        return "bg-green-600 text-paper border-green-600";
      case "present":
        return "bg-yellow-500 text-paper border-yellow-500";
      case "absent":
        return "bg-grey/60 text-paper border-grey/60";
      default:
        return "bg-paper border-ink/20";
    }
  };

  const kbStatus = keyboardStatus();

  return (
    <div className="min-h-screen bg-paper px-4 py-8 md:px-12">
      <div className="max-w-lg mx-auto">
        <Link
          href="/#puzzles"
          className="font-mono text-xs uppercase tracking-wider text-grey hover:text-red transition-colors mb-8 inline-block"
        >
          &larr; Volver
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-normal text-center mb-2">
          Wordle del Lago
        </h1>
        <p className="font-body text-base text-grey text-center mb-8">
          Adivina la palabra de 5 letras. Temática Atitlán.
        </p>

        {/* Grid */}
        <div className="flex flex-col gap-1.5 items-center mb-6">
          {Array.from({ length: MAX_GUESSES }).map((_, rowIndex) => {
            const isCurrentRow = rowIndex === guesses.length;
            const guess =
              rowIndex < guesses.length
                ? guesses[rowIndex]
                : isCurrentRow
                ? currentGuess
                : "";
            const evaluation =
              rowIndex < guesses.length
                ? evaluateGuess(guesses[rowIndex], answer)
                : [];

            return (
              <div
                key={rowIndex}
                className={`flex gap-1.5 ${
                  isCurrentRow && shake ? "animate-shake" : ""
                }`}
              >
                {Array.from({ length: WORD_LENGTH }).map((_, colIndex) => {
                  const letter = guess[colIndex] || "";
                  const status: LetterStatus =
                    rowIndex < guesses.length
                      ? evaluation[colIndex]
                      : letter
                      ? "empty"
                      : "empty";

                  return (
                    <div
                      key={colIndex}
                      className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center font-mono text-xl md:text-2xl font-bold border-2 rounded-sm transition-colors ${
                        status !== "empty"
                          ? getStatusColor(status)
                          : letter
                          ? "border-ink/40 bg-paper"
                          : "border-ink/10 bg-paper"
                      }`}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Game over message */}
        {gameOver && (
          <div className="text-center mb-6">
            <p className="font-serif text-xl font-normal mb-2">
              {won
                ? `Excelente! En ${guesses.length} intento${guesses.length > 1 ? "s" : ""}.`
                : `La palabra era: ${answer}`}
            </p>
            <button
              onClick={shareResult}
              className="font-mono text-xs uppercase tracking-wider text-red hover:text-ink transition-colors"
            >
              {showShare ? "Copiado!" : "Compartir resultado"}
            </button>
          </div>
        )}

        {/* Virtual keyboard */}
        <div className="flex flex-col gap-1.5 items-center">
          {KEYBOARD_ROWS.map((row, ri) => (
            <div key={ri} className="flex gap-1">
              {row.map((key) => {
                const status = kbStatus[key];
                const isWide = key === "ENTER" || key === "⌫";
                return (
                  <button
                    key={key}
                    onClick={() => handleKey(key)}
                    className={`
                      ${isWide ? "px-3 md:px-4" : "w-8 md:w-10"}
                      h-12 md:h-14 rounded-sm font-mono text-xs md:text-sm font-bold
                      flex items-center justify-center transition-colors
                      ${
                        status === "correct"
                          ? "bg-green-600 text-paper"
                          : status === "present"
                          ? "bg-yellow-500 text-paper"
                          : status === "absent"
                          ? "bg-grey/40 text-paper"
                          : "bg-surface text-ink hover:bg-grey/20"
                      }
                    `}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
