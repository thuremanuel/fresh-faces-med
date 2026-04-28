import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/jantar")({
  component: () => (
    <OptionStep
      progress={0.63}
      backTo="/quiz/almoco"
      nextTo="/quiz/dieta"
      field="dinnerTime"
      title="E que horas você costuma jantar?"
      options={[
        { value: "antes-19", label: "Antes das 19h" },
        { value: "19-21", label: "Entre 19h e 21h" },
        { value: "depois-21", label: "Depois das 21h" },
        { value: "nao-janto", label: "Não janto" },
      ]}
    />
  ),
});
