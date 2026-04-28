import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/objetivo")({
  component: () => (
    <OptionStep
      progress={0.13}
      backTo="/quiz/peso"
      nextTo="/quiz/corpo-atual"
      field="goal"
      title="Qual é seu principal objetivo?"
      options={[
        { value: "emagrecer", label: "Emagrecer rápido", emoji: "🔥" },
        { value: "barriga", label: "Reduzir a barriga", emoji: "✨" },
        { value: "energia", label: "Ter mais energia", emoji: "⚡" },
        { value: "saude", label: "Melhorar a saúde", emoji: "💗" },
        { value: "autoestima", label: "Recuperar autoestima", emoji: "💃" },
      ]}
    />
  ),
});
