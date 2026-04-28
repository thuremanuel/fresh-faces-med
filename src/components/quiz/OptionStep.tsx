import { useNavigate } from "@tanstack/react-router";
import { QuizShell } from "./QuizShell";
import { QuestionTitle } from "./QuestionTitle";
import { saveQuiz, type QuizAnswers } from "@/lib/quiz-store";
import { useState } from "react";
import type { ReactNode } from "react";

type Option = { value: string; label: string; emoji?: string; image?: string };

type Props = {
  progress: number;
  backTo: string;
  nextTo: string;
  field: keyof QuizAnswers;
  title: ReactNode;
  subtitle?: string;
  options: Option[];
  layout?: "list" | "grid" | "image";
  multi?: boolean;
};

export function OptionStep({
  progress,
  backTo,
  nextTo,
  field,
  title,
  subtitle,
  options,
  layout = "list",
  multi = false,
}: Props) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const choose = (v: string) => {
    if (multi) {
      setSelected((prev) =>
        prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v],
      );
      return;
    }
    saveQuiz({ [field]: v } as Partial<QuizAnswers>);
    navigate({ to: nextTo });
  };

  const submitMulti = () => {
    saveQuiz({ [field]: selected } as unknown as Partial<QuizAnswers>);
    navigate({ to: nextTo });
  };

  return (
    <QuizShell progress={progress} backTo={backTo}>
      <QuestionTitle subtitle={subtitle}>{title}</QuestionTitle>

      {layout === "image" ? (
        <div className="grid grid-cols-3 gap-3">
          {options.map((opt) => {
            const active = selected.includes(opt.value);
            return (
              <button
                key={opt.value}
                onClick={() => choose(opt.value)}
                className={`rounded-2xl border-2 p-2 flex flex-col items-center gap-2 transition ${
                  active ? "border-primary bg-secondary" : "border-border"
                }`}
              >
                {opt.image && (
                  <img
                    src={opt.image}
                    alt={opt.label}
                    className="w-full h-32 object-contain"
                  />
                )}
                <span className="text-xs font-bold text-primary text-center">
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className={layout === "grid" ? "grid grid-cols-2 gap-3" : "space-y-3"}>
          {options.map((opt) => {
            const active = selected.includes(opt.value);
            return (
              <button
                key={opt.value}
                onClick={() => choose(opt.value)}
                className={`quiz-option ${
                  multi
                    ? active
                      ? "ring-2 ring-primary"
                      : "quiz-option--outline"
                    : ""
                }`}
              >
                {opt.emoji && <span className="text-2xl">{opt.emoji}</span>}
                <span className="flex-1">{opt.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {multi && (
        <button
          onClick={submitMulti}
          disabled={selected.length === 0}
          className="quiz-cta mt-6"
        >
          Continuar
        </button>
      )}
    </QuizShell>
  );
}
