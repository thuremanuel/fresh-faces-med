import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { QuizShell } from "@/components/quiz/QuizShell";
import bg from "@/assets/motivational-2.jpg";

export const Route = createFileRoute("/quiz/motivacao-2")({
  component: Page,
});

function Page() {
  const navigate = useNavigate();
  return (
    <QuizShell progress={0.8} backTo="/quiz/fds">
      <div className="text-center space-y-6">
        <img
          src={bg}
          alt=""
          className="w-full h-56 object-cover rounded-3xl shadow-[var(--shadow-soft)]"
        />
        <h1 className="text-2xl sm:text-3xl text-primary leading-tight">
          Falta pouco! 🎉
        </h1>
        <p className="text-foreground/80 leading-relaxed">
          Mais algumas perguntas sobre sua rotina e vamos montar seu plano
          personalizado para <strong>eliminar até 5kg em 7 dias</strong>.
        </p>
        <button
          onClick={() => navigate({ to: "/quiz/exercicio" })}
          className="quiz-cta"
        >
          Continuar
        </button>
      </div>
    </QuizShell>
  );
}
