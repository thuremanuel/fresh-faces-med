import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/fds")({
  component: () => (
    <OptionStep
      progress={0.76}
      backTo="/quiz/cozinha"
      nextTo="/quiz/motivacao-2"
      field="weekendFasting"
      title="Você consegue manter o jejum no fim de semana?"
      options={[
        { value: "sempre", label: "Sim, sempre consigo" },
        { value: "as-vezes", label: "Às vezes consigo" },
        { value: "dificil", label: "Tenho muita dificuldade" },
      ]}
    />
  ),
});
