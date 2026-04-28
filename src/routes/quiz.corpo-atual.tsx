import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";
import regular from "@/assets/body-regular.png";
import some from "@/assets/body-some-extra.png";
import overweight from "@/assets/body-overweight.png";

export const Route = createFileRoute("/quiz/corpo-atual")({
  component: () => (
    <OptionStep
      progress={0.18}
      backTo="/quiz/objetivo"
      nextTo="/quiz/corpo-desejado"
      field="currentBody"
      title="Qual é o seu tipo de corpo atual?"
      layout="image"
      options={[
        { value: "regular", label: "Regular", image: regular },
        { value: "alguns-extras", label: "Alguns quilos a mais", image: some },
        { value: "acima-peso", label: "Acima do peso", image: overweight },
      ]}
    />
  ),
});
