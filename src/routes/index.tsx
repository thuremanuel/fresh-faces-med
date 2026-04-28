import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import specialistImg from "@/assets/specialist-profile.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import { ChevronLeft, Bell, MoreHorizontal, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VitaMeno — Estratégia personalizada para mulheres na menopausa" },
      {
        name: "description",
        content:
          "Descubra a estratégia personalizada para eliminar a barriga hormonal e dominar os sintomas da menopausa em poucos dias.",
      },
      { property: "og:title", content: "VitaMeno — Estratégia personalizada" },
      {
        property: "og:description",
        content:
          "Estratégia específica para menopausa: +32 mil mulheres alcançaram seu peso ideal.",
      },
    ],
  }),
  component: Index,
});

function useCountdown(initialSeconds: number) {
  const [s, setS] = useState(initialSeconds);
  useEffect(() => {
    const t = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function Index() {
  const time = useCountdown(175);
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-xl mx-auto px-5 pt-5 pb-12">
        {/* Top progress dot */}
        <div className="flex justify-center mb-4">
          <div className="w-40 h-1.5 rounded-full bg-secondary overflow-hidden">
            <div className="h-full w-[6%] bg-primary" />
          </div>
        </div>

        {/* Countdown banner */}
        <div className="rounded-2xl bg-secondary px-5 py-4 text-center text-primary mb-7">
          <p className="text-sm sm:text-base">Receba sua estratégia personalizada</p>
          <p className="text-sm sm:text-base font-bold">em: {time}</p>
        </div>

        {/* IG-style profile header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-foreground">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-semibold">marinacosta.oficial</span>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <Bell className="w-5 h-5" />
            <MoreHorizontal className="w-5 h-5" />
          </div>
        </div>

        <div className="flex items-center gap-5 mb-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-primary">
              <img
                src={specialistImg}
                alt="Dra. Marina Costa"
                width={80}
                height={80}
                className="w-full h-full rounded-full object-cover border-2 border-background"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm leading-tight mb-2">
              Marina Costa | Menopausa e Climatério
            </p>
            <div className="flex gap-5 text-sm">
              <Stat n="1.182" label="posts" />
              <Stat n="271K" label="seguidores" />
              <Stat n="245" label="seguindo" />
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-1">
          👩‍⚕️ Há 10 anos cuidando de mulheres na menopausa
        </p>
        <p className="text-sm leading-relaxed mb-7">
          ➕ Mais de 32 mil mulheres acompanhadas
        </p>

        {/* Headline */}
        <h1 className="text-primary text-3xl sm:text-4xl leading-tight text-center mb-4">
          Descubra agora qual é a estratégia personalizada ideal para você eliminar
          <br />5 kg de <span className="underline decoration-4">barriga hormonal</span> em 7 dias
        </h1>
        <p className="text-center text-muted-foreground mb-7 text-sm sm:text-base">
          Através desta estratégia específica para menopausa, +32 mil mulheres conseguiram
          alcançar seu peso ideal e dominar os sintomas da menopausa.
        </p>

        <Link to="/quiz/nome" className="quiz-cta block text-center mb-4">
          INICIAR MINHA ESTRATÉGIA AGORA
        </Link>

        {/* Testimonials */}
        <div className="space-y-4 mt-8">
          <Testimonial
            img={testimonial1}
            name="Lúcia Ramos"
            text="Eu queria muito te agradecer por toda a sua orientação! Comecei a seguir o plano há um ano e desde então já perdi 21 kg, e os principais sintomas da menopausa praticamente desapareceram. Hoje me sinto leve, com mais disposição e muito mais feliz comigo mesma!"
          />
          <Testimonial
            img={testimonial2}
            name="Olga Pereira"
            text="Estou super animada! Acabei de voltar do cardiologista e ele suspendeu meu remédio da pressão. Mudei meu estilo de vida com seu apoio e perdi 11 kg sem sofrimento, só ajustando o que comer. Sinto que ainda vou conquistar mais, com calma e saúde."
          />
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Ao clicar em continuar, você concorda com nossos Termos de Serviço | Política
          de Privacidade
        </p>
      </div>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="leading-tight">
      <div className="font-bold">{n}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Testimonial({
  img,
  name,
  text,
}: {
  img: string;
  name: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-border p-4">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={img}
          alt={name}
          loading="lazy"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="flex gap-0.5 text-yellow-500 mb-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <div className="text-primary font-semibold text-sm">{name}</div>
        </div>
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed">{text}</p>
    </div>
  );
}
