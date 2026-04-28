import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/cafe")({
  component: () => (
    <OptionStep
      progress={0.53}
      backTo="/quiz/educacional"
      nextTo="/quiz/almoco"
      field="breakfastTime"
      title="Que horas você costuma tomar café da manhã?"
      options={[
        { value: "6-8", label: "Entre 6h e 8h" },
        { value: "8-10", label: "Entre 8h e 10h" },
        { value: "10-12", label: "Depois das 10h" },
        { value: "pulo", label: "Não tomo café da manhã" },
      ]}
    />
  ),
});
