import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/trabalho")({
  component: () => (
    <OptionStep
      progress={0.92}
      backTo="/quiz/caminhada"
      nextTo="/quiz/atividade"
      field="workDay"
      title="Como é o seu dia de trabalho?"
      options={[
        { value: "sentada", label: "Passo a maior parte sentada" },
        { value: "mista", label: "Misto entre sentar e andar" },
        { value: "ativa", label: "Em pé ou caminhando o tempo todo" },
        { value: "casa", label: "Trabalho em casa / sou do lar" },
      ]}
    />
  ),
});
