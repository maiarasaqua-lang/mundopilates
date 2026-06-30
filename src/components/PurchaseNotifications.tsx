import { useEffect, useState } from "react";

const NAMES = [
  "Mariana S.", "Juliana P.", "Camila R.", "Beatriz L.", "Ana Carolina M.",
  "Fernanda O.", "Patrícia N.", "Larissa T.", "Carolina F.", "Aline B.",
  "Tatiane V.", "Renata C.", "Gabriela D.", "Vanessa A.", "Letícia G.",
  "Priscila H.", "Bruna E.", "Daniela K.", "Sabrina J.", "Roberta Q.",
  "Amanda W.", "Isabela Y.", "Natália Z.", "Cláudia U.", "Débora X.",
];
const CITIES = ["São Paulo - SP","Rio de Janeiro - RJ","Belo Horizonte - MG","Curitiba - PR","Porto Alegre - RS","Salvador - BA","Recife - PE","Fortaleza - CE","Brasília - DF","Goiânia - GO","Florianópolis - SC","Manaus - AM"];
const PLANS = ["Plano Completo", "Plano Básico"];

export function PurchaseNotifications() {
  const [item, setItem] = useState<{ name: string; city: string; plan: string; mins: number } | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: number;
    const show = () => {
      const n = NAMES[Math.floor(Math.random() * NAMES.length)];
      const c = CITIES[Math.floor(Math.random() * CITIES.length)];
      const p = PLANS[Math.floor(Math.random() * PLANS.length)];
      const m = Math.floor(Math.random() * 25) + 1;
      setItem({ name: n, city: c, plan: p, mins: m });
      setVisible(true);
      timeout = window.setTimeout(() => setVisible(false), 5500);
    };
    const first = window.setTimeout(show, 3500);
    const interval = window.setInterval(show, 11000);
    return () => {
      window.clearTimeout(first);
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  if (!item) return null;
  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-[320px] transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3 shadow-[var(--shadow-card)]">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--gradient-primary)] text-primary-foreground font-bold">
          {item.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground truncate">{item.name}</p>
          <p className="text-xs text-muted-foreground">acabou de adquirir o <span className="font-medium text-foreground">{item.plan}</span></p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">{item.city} · há {item.mins} min</p>
        </div>
        <span className="h-2 w-2 shrink-0 rounded-full bg-success animate-pulse mt-1" />
      </div>
    </div>
  );
}