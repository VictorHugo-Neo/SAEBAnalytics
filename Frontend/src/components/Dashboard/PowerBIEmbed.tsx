interface PowerBIProps {
  embedUrl: string;
  title: string;
}

export const PowerBIEmbed = ({ embedUrl, title }: PowerBIProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
      <div className="relative w-full rounded-2xl shadow-2xl border border-slate-200 bg-white p-2 overflow-hidden group">
        <div className="aspect-[1024/1060] md:aspect-video w-full">
          <iframe 
            title={title}
            src={embedUrl}
            className="w-full h-full rounded-lg"
            allowFullScreen={true}
            loading="lazy"
          />
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-500 text-center italic">
        * Utilize os filtros laterais do relatório para segmentar por região ou rede de ensino.
      </p>
    </section>
  );
};