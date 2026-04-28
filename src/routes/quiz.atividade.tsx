import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/atividade")({
  component: () => (
    <OptionStep
      progress={0.95}
      backTo="/quiz/trabalho"
      nextTo="/quiz/analise"
      field="workActivity"
      title="Quanto esforço físico você faz no dia a dia?"
      options={[
        { value: "baixo", label: "Pouco esforço" },
        { value: "moderado", label: "Esforço moderado" },
        { value: "intenso", label: "Esforço intenso" },
      ]}
    />
  ),
});
