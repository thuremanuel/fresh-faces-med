import { createFileRoute } from "@tanstack/react-router";
import { OptionStep } from "@/components/quiz/OptionStep";

export const Route = createFileRoute("/quiz/jejum")({
  component: () => (
    <OptionStep
      progress={0.43}
      backTo="/quiz/motivacao-1"
      nextTo="/quiz/educacional"
      field="fastingKnowledge"
      title="Você já ouviu falar em jejum intermitente?"
      options={[
        { value: "sim-pratico", label: "Sim, e já pratiquei" },
        { value: "sim", label: "Sim, mas nunca pratiquei" },
        { value: "nao", label: "Não, nunca ouvi falar" },
      ]}
    />
  ),
});
