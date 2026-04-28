import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { QuizShell } from "@/components/quiz/QuizShell";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/quiz/analise")({
  component: Page,
});

const STEPS = [
  "Analisando seu perfil hormonal...",
  "Calculando seu metabolismo na menopausa...",
  "Montando seu plano alimentar personalizado...",
  "Definindo sua janela de jejum ideal...",
  "Finalizando seu protocolo de 7 dias...",
];

function Page() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    const total = 6000;
    const start = Date.now();
    const id = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / total);
      setProgress(p);
      setStepIdx(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length)));
      if (p >= 1) {
        clearInterval(id);
        setTimeout(() => navigate({ to: "/oferta" }), 400);
      }
    }, 80);
    return () => clearInterval(id);
  }, [navigate]);

  return (
    <QuizShell progress={1}>
      <div className="text-center space-y-8 pt-6">
        <h1 className="text-2xl sm:text-3xl text-primary leading-tight">
          Estamos preparando o seu plano personalizado
        </h1>

        <div className="relative w-44 h-44 mx-auto">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" stroke="var(--color-secondary)" strokeWidth="8" fill="none" />
            <circle
              cx="50" cy="50" r="44"
              stroke="var(--color-primary)" strokeWidth="8" fill="none"
              strokeDasharray={`${2 * Math.PI * 44}`}
              strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress)}`}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-100"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-3xl font-display text-primary font-extrabold">
            {Math.round(progress * 100)}%
          </div>
        </div>

        <ul className="text-left max-w-xs mx-auto space-y-2 text-sm">
          {STEPS.map((s, i) => (
            <li key={s} className={`flex items-center gap-2 transition ${i <= stepIdx ? "text-primary font-semibold" : "text-muted-foreground"}`}>
              <span>{i < stepIdx ? "✅" : i === stepIdx ? "⏳" : "⚪"}</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </QuizShell>
  );
}
