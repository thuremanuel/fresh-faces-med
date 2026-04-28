import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";
import regular from "@/assets/body-regular.png";
import some from "@/assets/body-some-extra.png";

export const Route = createFileRoute("/quiz/corpo-desejado")({
  component: () => (
    <OptionStep
      progress={0.23}
      backTo="/quiz/corpo-atual"
      nextTo="/quiz/partes"
      field="desiredBody"
      title="E qual é o corpo que você deseja?"
      layout="image"
      options={[
        { value: "tonificada", label: "Tonificada", image: regular },
        { value: "magra", label: "Magra e saudável", image: some },
      ]}
    />
  ),
});
