import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PurchaseNotifications } from "@/components/PurchaseNotifications";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Pilates Pro — 250 Sequências Prontas" },
      { name: "description", content: "250 sequências de Pilates prontas para variar suas aulas e conduzir práticas mais organizadas, fluidas e profissionais." },
      { property: "og:title", content: "Kit Pilates Pro — 250 Sequências Prontas" },
      { property: "og:description", content: "250 sequências prontas para aplicar em aula sem precisar montar tudo do zero." },
      { property: "og:image", content: "https://i.postimg.cc/BZwVkcCb/img-produto.png" },
    ],
  }),
  component: Index,
});

const SEQ_IMAGES = [
  "https://i.postimg.cc/fbKHKxbq/vu-NJnn9664695.webp",
  "https://i.postimg.cc/LXQxd2LD/e-RAYvy9648328.webp",
  "https://i.postimg.cc/Rh3X4yTx/y-Hxy-Mx9636471.webp",
  "https://i.postimg.cc/4yrwdP8y/XJmol-M9679371.webp",
  "https://i.postimg.cc/WpK5XpsQ/Fuo-Mjh9693879.webp",
];

const BONUSES = [
  { title: "Calendário de Aulas 30 Dias", value: "R$ 29,00", img: "https://i.postimg.cc/SRD21x9s/calendario.png" },
  { title: "30 Sequências de Alongamento", value: "R$ 37,00", img: "https://i.postimg.cc/02XKprxS/sequencia-alongamentos.png" },
  { title: "Checklist Aula que Fideliza", value: "R$ 27,00", img: "https://i.postimg.cc/t41ZDy4g/cheklist.png" },
  { title: "Ficha de Evolução da Aluna", value: "R$ 37,00", img: "https://i.postimg.cc/wBLt8VN5/ficha-de-evolucao.png" },
];

const TESTIMONIALS = [
  "https://i.postimg.cc/bNmDFyWY/depoimento-01.png",
  "https://i.postimg.cc/g0ZxJvJd/depoimento-02.png",
  "https://i.postimg.cc/QtZHWH9q/depoimento-03.png",
];

const FAQ = [
  { q: "Para quais níveis servem as sequências?", a: "As sequências foram pensadas para ajudar instrutoras a organizar aulas para diferentes níveis, desde alunas iniciantes até alunas que já possuem mais consciência corporal. Você pode adaptar a intensidade, os exercícios e os acessórios conforme a realidade de cada aula." },
  { q: "Funciona para aulas individuais e em grupo?", a: "Sim. O material pode ser usado tanto em aulas individuais quanto em grupos pequenos. Basta escolher a sequência pelo objetivo do dia e ajustar conforme o nível das alunas." },
  { q: "O material é digital ou físico?", a: "O material é 100% digital. Após a compra, você recebe o acesso no seu e-mail e pode baixar o PDF para consultar sempre que quiser." },
  { q: "Preciso ter muita experiência como instrutora?", a: "Não. O material foi criado para facilitar o planejamento e dar ideias prontas de condução. Ele ajuda principalmente quem quer economizar tempo, variar as aulas e evitar ficar sem saber o que aplicar no dia." },
  { q: "Posso usar com várias alunas?", a: "Sim. Você pode usar as sequências nas suas próprias aulas, com suas alunas e turmas. O material serve como apoio para sua rotina profissional." },
  { q: "Como recebo o material?", a: "Após a confirmação do pagamento, você recebe o link de acesso direto no e-mail informado na compra." },
];

function formatDateBR(d: Date) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = d.getFullYear();
  return `${dd}/${mm}/${yy}`;
}

function Index() {
  const [today, setToday] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const offerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setToday(formatDateBR(new Date()));
  }, []);

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PurchaseNotifications />

      {/* Top urgency bar */}
      <div className="w-full text-white" style={{ background: "var(--gradient-primary)" }}>
        <div className="mx-auto max-w-6xl px-4 py-2.5 text-center text-xs sm:text-sm font-bold tracking-wide">
          ⏰ Oferta Válida Apenas Hoje! — {today}
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:py-20 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block rounded-full border border-primary/30 bg-card/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur">
              Kit Pilates Pro
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Suas aulas de Pilates nunca mais vão parecer{" "}
              <span className="text-primary italic">repetitivas</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              <strong className="text-foreground">250 sequências prontas</strong> para aplicar em aula, variar seus atendimentos e conduzir práticas mais organizadas, fluidas e profissionais — sem precisar montar tudo do zero.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={scrollToOffer}
                className="btn-cta btn-cta-hover group inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
              >
                EU QUERO
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-success">✓</span> Acesso imediato &nbsp;<span className="text-success">✓</span> Garantia 14 dias
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-primary)] opacity-20 blur-3xl" />
              <img
                src="https://i.postimg.cc/BZwVkcCb/img-produto.png"
                alt="Kit Pilates Pro — 250 sequências prontas"
                className="relative w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sequências preview */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Conteúdo do material</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Conheça um pouco das sequências
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {SEQ_IMAGES.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1 flex items-center justify-center p-2"
              >
                <img src={src} alt={`Sequência ${i + 1}`} className="w-full h-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-16 sm:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
              🎁 Bônus Exclusivos
            </span>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Adquirindo o <span className="text-primary">Plano Completo</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Você leva 4 bônus de presente. Material complementar para deixar suas aulas ainda mais organizadas, variadas e fáceis de conduzir.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BONUSES.map((b, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                  <img src={b.img} alt={b.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <h3 className="mt-4 text-base font-bold leading-snug">{b.title}</h3>
                <div className="mt-auto pt-3">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground line-through">VALOR: {b.value}</p>
                  <p className="text-lg font-extrabold text-success">GRÁTIS</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Quem usou, aprovou!</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Instrutoras que aplicam sequências prontas conseguem economizar tempo, variar melhor as aulas e entregar uma experiência mais organizada para suas alunas.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Depoimento ${i + 1}`}
                loading="lazy"
                className="w-full rounded-2xl border border-border shadow-[var(--shadow-card)]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">Como funciona?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Finalize sua compra", d: "Pagamento 100% seguro." },
              { n: "2", t: "Acesse pelo e-mail", d: "Você recebe o link de acesso direto no seu e-mail." },
              { n: "3", t: "Use na próxima aula", d: "Baixe o PDF, escolha a sequência pelo objetivo do dia e aplique respeitando o nível e as necessidades de cada aluna." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full text-xl font-bold text-white" style={{ background: "var(--gradient-primary)" }}>
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta / Planos */}
      <section ref={offerRef} id="oferta" className="py-16 sm:py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Escolha seu plano
            </span>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Comece hoje a transformar suas aulas
            </h2>
          </div>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            {/* Plano Básico */}
            <div className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-xl font-bold">Plano Básico</h3>
              <p className="mt-1 text-sm text-muted-foreground">Para quem quer começar agora</p>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground line-through">De R$ 47</p>
                <p className="mt-1 text-sm text-muted-foreground">por apenas</p>
                <p className="mt-1 text-5xl font-extrabold tracking-tight text-primary">
                  R$ 9,90
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {["80 Sequências de Pilates","Para aulas individuais e em grupo","Sequências para diferentes níveis","Acesso digital imediato","Garantia de 7 dias"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-success">✅</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://pay.lowify.com.br/checkout.php?product_id=BDNqp0"
                className="btn-cta btn-cta-hover mt-8 inline-flex items-center justify-center px-6 py-4 text-base"
              >
                COMPRAR AGORA →
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">✅ Acesso imediato após a compra</p>
            </div>

            {/* Plano Completo */}
            <div className="relative flex flex-col rounded-3xl border-2 border-primary bg-card p-8 shadow-[var(--shadow-soft)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-md" style={{ background: "var(--gradient-primary)" }}>
                ⭐ Mais Escolhido
              </span>
              <h3 className="text-xl font-bold">Plano Completo</h3>
              <p className="mt-1 text-sm text-muted-foreground">Para transformar suas aulas todos os dias</p>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground line-through">De R$ 97</p>
                <p className="mt-1 text-sm text-muted-foreground">por apenas</p>
                <p className="mt-1 text-5xl font-extrabold tracking-tight text-primary">
                  R$ 17,90
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {["250 Sequências de Pilates","Calendário de Aulas 30 Dias","30 Sequências de Alongamento","Checklist \"Aula que Fideliza\"","Ficha de Evolução da Aluna","Garantia estendida de 14 dias"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-success">✅</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://pay.lowify.com.br/go.php?offer=8k4r0ef"
                className="btn-cta btn-cta-hover mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 text-base"
              >
                QUERO AGORA <span>→</span>
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">Acesso imediato após a compra</p>
            </div>
          </div>

          {/* Garantia */}
          <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success/10 text-3xl">🛡️</div>
            <h3 className="mt-4 text-xl font-bold">Risco Zero</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Teste o material. Se não gostar ou não funcionar para você dentro do prazo de garantia, devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas. Sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">Perguntas Frequentes</h2>
          <div className="mt-10 space-y-3">
            {FAQ.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="rounded-2xl border border-border bg-background">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold">{item.q}</span>
                    <span className={`shrink-0 text-primary transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={scrollToOffer}
              className="btn-cta btn-cta-hover inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
            >
              QUERO MEU KIT AGORA →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Kit Pilates Pro. Todos os direitos reservados.</p>
          <p className="mt-2">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como garantia de resultados.</p>
        </div>
      </footer>

      {/* Facebook Pixel noscript */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1367183285510772&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </div>
  );
}
