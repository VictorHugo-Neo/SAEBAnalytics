import { Users, Scale, GraduationCap, BarChart3 } from 'lucide-react';
import type { JSX } from 'react';

interface InsightItem {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

const insights: InsightItem[] = [
  {
    icon: <Users className="text-purple-600" />,
    title: "Desempenho por Sexo",
    description: "Em Matemática, o sexo Masculino apresenta média superior (247.68) ao Feminino (241.17), enquanto em Português a diferença é menor.",
    color: "border-l-purple-500"
  },
  {
    icon: <Scale className="text-amber-600" />,
    title: "Estratificação por Raça",
    description: "Há um gap acentuado em Português entre alunos Brancos (260.11) e Indígenas (224.28), evidenciando disparidades no acesso ao aprendizado.",
    color: "border-l-amber-500"
  },
  {
    icon: <BarChart3 className="text-blue-600" />,
    title: "Média Global (Matemática)",
    description: "A média geral de Matemática fixa-se em 244.01, servindo como baseline para identificar quais grupos estão abaixo da meta nacional.",
    color: "border-l-blue-500"
  },
  {
    icon: <GraduationCap className="text-emerald-600" />,
    title: "Média Global (Português)",
    description: "A proficiência média em Português (248.65) supera ligeiramente a de Matemática, com variações significativas entre os estados do Norte e Nordeste.",
    color: "border-l-emerald-500"
  }
];

export const InsightCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-baseline justify-between mb-8">
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight italic">
          Análise de Equidade <span className="text-slate-400 font-light">| SAEB Analytics</span>
        </h3>
        <a
          href="https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/saeb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-700 font-semibold hover:underline flex items-center gap-1"
        >
          Dados do INEP 2026 <span className="text-xs">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl border border-slate-200 border-l-4 ${item.color} shadow-sm transition-all hover:shadow-md hover:-translate-y-1`}
          >
            <div className="mb-4 p-2 bg-slate-50 w-fit rounded-lg">
              {item.icon}
            </div>
            <h4 className="font-bold text-slate-800 mb-2 leading-tight">{item.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};