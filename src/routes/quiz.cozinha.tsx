import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/cozinha")({
  component: () => (
    <OptionStep
      progress={0.72}
      backTo="/quiz/dieta"
      nextTo="/quiz/fds"
      field="cookOrEatOut"
      title="Você costuma cozinhar em casa ou comer fora?"
      options={[
        { value: "casa", label: "Cozinho em casa todos os dias" },
        { value: "misto", label: "Cozinho às vezes" },
        { value: "fora", label: "Como fora a maior parte do tempo" },
      ]}
    />
  ),
});
