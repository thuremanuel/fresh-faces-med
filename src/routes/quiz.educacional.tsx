import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { QuizShell } from "@/components/quiz/QuizShell";
import img from "@/assets/educational-fasting.jpg";

export const Route = createFileRoute("/quiz/educacional")({
  component: Page,
});

function Page() {
  const navigate = useNavigate();
  return (
    <QuizShell progress={0.48} backTo="/quiz/jejum">
      <div className="space-y-5">
        <img src={img} alt="" className="w-full h-48 object-cover rounded-3xl" />
        <h1 className="text-2xl text-primary leading-tight text-center">
          O jejum intermitente é o segredo para queimar gordura na menopausa
        </h1>
        <p className="text-foreground/80 leading-relaxed">
          Após os 40, o metabolismo desacelera por causa da queda hormonal. O jejum
          intermitente <strong>reativa a queima de gordura</strong>, equilibra a
          insulina e <strong>elimina até 5kg em 7 dias</strong> com segurança.
        </p>
        <ul className="space-y-2 text-sm">
          <li>✅ Acelera o metabolismo travado</li>
          <li>✅ Reduz a barriga hormonal</li>
          <li>✅ Melhora a disposição e o sono</li>
        </ul>
        <button
          onClick={() => navigate({ to: "/quiz/cafe" })}
          className="quiz-cta"
        >
          Quero saber meu plano
        </button>
      </div>
    </QuizShell>
  );
}
