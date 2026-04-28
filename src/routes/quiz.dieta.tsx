import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/dieta")({
  component: () => (
    <OptionStep
      progress={0.68}
      backTo="/quiz/jantar"
      nextTo="/quiz/cozinha"
      field="diet"
      title="Você segue alguma dieta específica?"
      options={[
        { value: "nenhuma", label: "Nenhuma" },
        { value: "low-carb", label: "Low carb" },
        { value: "vegetariana", label: "Vegetariana" },
        { value: "vegana", label: "Vegana" },
        { value: "sem-gluten", label: "Sem glúten / lactose" },
      ]}
    />
  ),
});
