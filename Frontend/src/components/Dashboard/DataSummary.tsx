export const DataSummary = () => {
  const stats = [
    { label: "Total de Alunos", value: "2M", color: "text-slate-900" },
    { label: "Média Matemática", value: "244.01", color: "text-blue-600" },
    { label: "Média Português", value: "248.65", color: "text-indigo-600" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">{stat.label}</p>
          <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </section>
  );
};