import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { QuizShell } from "@/components/quiz/QuizShell";
import { QuestionTitle } from "@/components/quiz/QuestionTitle";
import { saveQuiz, loadQuiz } from "@/lib/quiz-store";

export const Route = createFileRoute("/quiz/nome")({
  component: NomePage,
});

function NomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState(() => loadQuiz().name ?? "");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    saveQuiz({ name: name.trim() });
    navigate({ to: "/quiz/peso" });
  };

  return (
    <QuizShell progress={0.05} backTo="/">
      <QuestionTitle>Antes de começarmos, qual é seu nome?</QuestionTitle>
      <form onSubmit={submit} className="space-y-4">
        <input
          autoFocus
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome..."
          className="w-full rounded-2xl border border-border px-5 py-4 text-center text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button type="submit" disabled={!name.trim()} className="quiz-cta">
          Continuar
        </button>
      </form>
    </QuizShell>
  );
}
