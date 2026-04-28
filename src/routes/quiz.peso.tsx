import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/peso")({
  component: () => (
    <OptionStep
      progress={0.08}
      backTo="/quiz/nome"
      nextTo="/quiz/objetivo"
      field="weightToLose"
      title="Quantos kg gostaria de eliminar?"
      options={[
        { value: "ate-5", label: "Até 5kg" },
        { value: "5-10", label: "de 5 a 10kg" },
        { value: "10-20", label: "de 10 a 20kg" },
        { value: "20-40", label: "de 20 a 40kg" },
      ]}
      layout="grid"
    />
  ),
});
