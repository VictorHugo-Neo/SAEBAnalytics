export const Hero = () => {
  return (
    <header className="py-20 px-6 text-center bg-linear-to-b from-white to-slate-50">
      <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
        SAEB <span className="text-brand-primary">Analytics</span>
      </h1>
      <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Plataforma de inteligência de dados focada na investigação de 
        <strong className="text-slate-900"> disparidades educacionais</strong> baseada nos microdados do INEP.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <span className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold">
          Power BI Engine
        </span>
        <span className="px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold">
          INEP Data 2023
        </span>
      </div>
    </header>
  );
};