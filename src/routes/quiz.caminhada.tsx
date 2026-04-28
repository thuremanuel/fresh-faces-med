import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/caminhada")({
  component: () => (
    <OptionStep
      progress={0.89}
      backTo="/quiz/escadas"
      nextTo="/quiz/trabalho"
      field="walkingFrequency"
      title="Com que frequência você caminha por mais de 20 minutos?"
      options={[
        { value: "diaria", label: "Todos os dias" },
        { value: "semanal", label: "Algumas vezes por semana" },
        { value: "raramente", label: "Raramente" },
        { value: "nunca", label: "Nunca" },
      ]}
    />
  ),
});
