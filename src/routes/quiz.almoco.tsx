import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/almoco")({
  component: () => (
    <OptionStep
      progress={0.58}
      backTo="/quiz/cafe"
      nextTo="/quiz/jantar"
      field="lunchTime"
      title="Que horas você costuma almoçar?"
      options={[
        { value: "11-12", label: "Entre 11h e 12h" },
        { value: "12-13", label: "Entre 12h e 13h" },
        { value: "13-14", label: "Entre 13h e 14h" },
        { value: "depois-14", label: "Depois das 14h" },
      ]}
    />
  ),
});
