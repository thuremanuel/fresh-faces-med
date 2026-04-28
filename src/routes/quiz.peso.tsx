import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { QuizShell } from "@/components/quiz/QuizShell";
import { QuestionTitle } from "@/components/quiz/QuestionTitle";
import { saveQuiz } from "@/lib/quiz-store";

export const Route = createFileRoute("/quiz/peso")({
  component: PesoPage,
});

const OPTIONS = ["Até 5kg", "de 5 a 10kg", "de 10 a 20kg", "de 20 a 40kg"];

function PesoPage() {
  const navigate = useNavigate();
  const choose = (v: string) => {
    saveQuiz({ weightToLose: v });
    navigate({ to: "/" }); // TODO: ligar próximas etapas
  };

  return (
    <QuizShell progress={0.1} backTo="/quiz/nome">
      <QuestionTitle>Quantos kg gostaria de eliminar?</QuestionTitle>
      <div className="grid grid-cols-2 gap-3">
        {OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => choose(opt)}
            className="quiz-option quiz-option--outline justify-start"
          >
            <span className="quiz-option__radio" />
            <span>{opt}</span>
          </button>
        ))}
      </div>
    </QuizShell>
  );
}
