import { Database, BarChart, ShieldCheck, Code2, Wind, Layers } from 'lucide-react';

export const AboutDetails = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <ShieldCheck className="text-emerald-600" /> Objetivo e Compromisso
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              O <strong>SAEB Analytics</strong> é um projeto estritamente pessoal e acadêmico. 
              Seu propósito é transformar microdados públicos brutos do INEP em conhecimento visual 
              para observar as disparidades educacionais no Brasil sob as perspectivas de 
              <strong> gênero (sexo)</strong> e <strong>cor/raça</strong>.
            </p>
            <p className="bg-slate-100 p-4 rounded-lg border-l-4 border-slate-400 text-sm italic">
              "Esta análise não possui cunho preconceituoso ou racista. Trata-se de uma ferramenta 
              técnica independente para dar visibilidade a desigualdades estatísticas e promover a equidade".
            </p>
          </div>
        </div>
        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
          <h3 className="text-xl font-semibold mb-8 flex items-center gap-3 text-blue-400 border-b border-slate-700 pb-4">
            <Layers size={20} /> Stack Tecnológica 2026
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-2 bg-blue-500/20 rounded-lg h-fit text-blue-400">
                  <Database size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Dados & ETL</h4>
                  <p className="text-xs text-slate-400">Power BI e ETL Pipelines</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2 bg-yellow-500/20 rounded-lg h-fit text-yellow-400">
                  <BarChart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">BI & Analytics</h4>
                  <p className="text-xs text-slate-400">Modelagem DAX e visualização interativa via Power BI.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-2 bg-cyan-500/20 rounded-lg h-fit text-cyan-400">
                  <Code2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Frontend Framework</h4>
                  <p className="text-xs text-slate-400">React com TypeScript para uma interface tipada e segura.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2 bg-teal-500/20 rounded-lg h-fit text-teal-400">
                  <Wind size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Styling & Build</h4>
                  <p className="text-xs text-slate-400">Tailwind CSS v4 e Vite para performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-12">Fluxo de Engenharia</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
        </div>
      </div>
    </section>
  );
};