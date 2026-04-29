import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { loadQuiz } from "@/lib/quiz-store";
import specialist from "@/assets/specialist-profile.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import t4 from "@/assets/testimonial-4.jpg";
import t5 from "@/assets/testimonial-5.jpg";

const CHECKOUT_URL = "https://compraseguraonline.org.ua/c/4ae0ce1c08";

export const Route = createFileRoute("/oferta")({
  head: () => ({
    meta: [
      { title: "Seu Plano VitaMeno está pronto — Dra. Marina Costa" },
      {
        name: "description",
        content:
          "Plano personalizado para mulheres na menopausa eliminarem até 5kg em 7 dias com a Dra. Marina Costa.",
      },
    ],
  }),
  component: OfferPage,
});

function OfferPage() {
  const [name, setName] = useState("");
  const [seconds, setSeconds] = useState(15 * 60);

  useEffect(() => {
    setName(loadQuiz().name ?? "");
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
        🔥 Oferta válida por {mm}:{ss}
      </header>

      <main className="max-w-xl mx-auto px-5 py-8 space-y-8">
        <section className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl text-primary leading-tight">
            {name ? `${name}, ` : ""}seu plano personalizado está pronto!
          </h1>
          <p className="text-muted-foreground">
            Baseado nas suas respostas, montamos um protocolo para você eliminar
            até <strong className="text-primary">5kg em 7 dias</strong>.
          </p>
        </section>

        <section className="bg-secondary rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-4">
            <img src={specialist} alt="Dra. Marina Costa" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <p className="font-display text-primary font-bold">Dra. Marina Costa</p>
              <p className="text-xs text-muted-foreground">Nutricionista — CRN 12.345</p>
            </div>
          </div>
          <p className="text-sm text-foreground/80">
            "Já ajudei mais de 127 mil mulheres na menopausa a recuperarem o
            corpo e a autoestima. Esse plano foi feito sob medida para você."
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-primary text-center">O que você recebe:</h2>
          <ul className="space-y-3">
            {[
              "Plano alimentar de 7 dias personalizado",
              "Protocolo de jejum intermitente para menopausa",
              "Lista de compras semanal",
              "Receitas anti-inchaço e queima-gordura",
              "Acompanhamento por WhatsApp por 30 dias",
              "Bônus: e-book Reposição Hormonal Natural",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 bg-card border border-border rounded-2xl p-4">
                <span className="text-primary text-xl">✅</span>
                <span className="text-sm font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-card border-2 border-primary rounded-3xl p-6 text-center space-y-3 shadow-[var(--shadow-soft)]">
          <p className="text-sm text-muted-foreground line-through">De R$ 297,00</p>
          <p className="text-5xl font-display font-extrabold text-primary">
            R$ 19<span className="text-2xl">,90</span>
          </p>
          <p className="text-xs text-muted-foreground">ou 3x de R$ 6,90 sem juros</p>
          <a href={CHECKOUT_URL} className="quiz-cta text-lg inline-block">QUERO MEU PLANO AGORA</a>
          <p className="text-xs text-muted-foreground">🔒 Pagamento 100% seguro · Garantia de 7 dias</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-primary text-center">Mulheres como você que já conseguiram</h2>
          {[
            { img: t1, name: "Cláudia, 52 anos", text: "Eliminei 6kg no primeiro mês! Voltei a usar minhas roupas antigas." },
            { img: t2, name: "Regina, 48 anos", text: "A barriga da menopausa simplesmente foi embora. Plano fácil de seguir." },
            { img: t3, name: "Sandra, 55 anos", text: "Em 7 dias já notei a diferença! Desinchei e voltei a ter energia para brincar com meus netos." },
            { img: t4, name: "Beatriz, 50 anos", text: "Perdi 8kg em 2 meses. Os calorões diminuíram muito e durmo melhor à noite." },
            { img: t5, name: "Lúcia, 58 anos", text: "Achei que nunca mais ia conseguir emagrecer. A Dra. Marina mudou minha vida!" },
            { img: t1, name: "Helena, 54 anos", text: "Plano simples, comida gostosa e resultado rápido. Já indiquei para todas as amigas!" },
          ].map((t) => (
            <div key={t.name} className="bg-secondary rounded-2xl p-4 flex gap-4">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
              <div>
                <p className="font-bold text-primary text-sm">{t.name}</p>
                <p className="text-sm text-foreground/80 mt-1">"{t.text}"</p>
              </div>
            </div>
          ))}
        </section>

        <section className="text-center pt-4 pb-8">
          <a href={CHECKOUT_URL} className="quiz-cta inline-block">QUERO MEU PLANO POR R$ 19,90</a>
        </section>
      </main>
    </div>
  );
}
