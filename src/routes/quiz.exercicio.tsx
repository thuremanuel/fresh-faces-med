import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/exercicio")({
  component: () => (
    <OptionStep
      progress={0.83}
      backTo="/quiz/motivacao-2"
      nextTo="/quiz/escadas"
      field="exerciseFrequency"
      title="Com que frequência você se exercita?"
      options={[
        { value: "nunca", label: "Quase nunca" },
        { value: "1-2", label: "1 a 2 vezes por semana" },
        { value: "3-4", label: "3 a 4 vezes por semana" },
        { value: "5+", label: "5 ou mais vezes por semana" },
      ]}
    />
  ),
});
