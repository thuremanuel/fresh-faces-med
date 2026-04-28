import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/partes")({
  component: () => (
    <OptionStep
      progress={0.28}
      backTo="/quiz/corpo-desejado"
      nextTo="/quiz/insatisfacao"
      field="bodyParts"
      multi
      title="Quais partes do corpo te incomodam mais?"
      subtitle="Pode marcar mais de uma opção"
      options={[
        { value: "barriga", label: "Barriga", emoji: "🤰" },
        { value: "bracos", label: "Braços", emoji: "💪" },
        { value: "coxas", label: "Coxas e culote", emoji: "🦵" },
        { value: "bumbum", label: "Bumbum", emoji: "🍑" },
        { value: "rosto", label: "Rosto e papada", emoji: "😊" },
      ]}
    />
  ),
});
