import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/insatisfacao")({
  component: () => (
    <OptionStep
      progress={0.33}
      backTo="/quiz/partes"
      nextTo="/quiz/motivacao-1"
      field="unhappyDuration"
      title="Há quanto tempo você está insatisfeita com seu corpo?"
      options={[
        { value: "menos-1", label: "Menos de 1 ano" },
        { value: "1-3", label: "1 a 3 anos" },
        { value: "3-5", label: "3 a 5 anos" },
        { value: "mais-5", label: "Mais de 5 anos" },
      ]}
    />
  ),
});
