import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { QuizShell } from "@/components/quiz/QuizShell";
import bg from "@/assets/motivational-1.jpg";

export const Route = createFileRoute("/quiz/motivacao-1")({
  component: Page,
});

function Page() {
  const navigate = useNavigate();
  return (
    <QuizShell progress={0.38} backTo="/quiz/insatisfacao">
      <div className="text-center space-y-6">
        <img
          src={bg}
          alt=""
          className="w-full h-56 object-cover rounded-3xl shadow-[var(--shadow-soft)]"
        />
        <h1 className="text-2xl sm:text-3xl text-primary leading-tight">
          Você não está sozinha. <br />
          <span className="text-primary-soft">
            +127 mil mulheres na menopausa
          </span>{" "}
          já transformaram seus corpos com o nosso método.
        </h1>
        <p className="text-muted-foreground">
          Vamos personalizar um plano específico para o seu metabolismo agora.
        </p>
        <button
          onClick={() => navigate({ to: "/quiz/jejum" })}
          className="quiz-cta"
        >
          Continuar
        </button>
      </div>
    </QuizShell>
  );
}
