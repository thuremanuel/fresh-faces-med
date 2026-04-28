import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { QuizShell } from "@/components/quiz/QuizShell";
import { QuestionTitle } from "@/components/quiz/QuestionTitle";
import { saveQuiz } from "@/lib/quiz-store";
import stairs from "@/assets/stairs.jpg";

export const Route = createFileRoute("/quiz/escadas")({
  component: Page,
});

function Page() {
  const navigate = useNavigate();
  const choose = (v: string) => {
    saveQuiz({ canClimbStairs: v });
    navigate({ to: "/quiz/caminhada" });
  };
  return (
    <QuizShell progress={0.86} backTo="/quiz/exercicio">
      <QuestionTitle>Você consegue subir um lance de escadas sem se cansar?</QuestionTitle>
      <img src={stairs} alt="" className="w-full h-44 object-cover rounded-3xl mb-6" />
      <div className="space-y-3">
        {[
          { v: "facil", l: "Sim, com facilidade" },
          { v: "ofegante", l: "Subo, mas fico ofegante" },
          { v: "dificil", l: "Tenho muita dificuldade" },
        ].map((o) => (
          <button key={o.v} onClick={() => choose(o.v)} className="quiz-option">
            <span className="quiz-option__radio" />
            <span>{o.l}</span>
          </button>
        ))}
      </div>
    </QuizShell>
  );
}
