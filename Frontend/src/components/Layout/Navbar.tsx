export const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="font-bold text-xl tracking-tighter">Analytics</span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
        <a href="#dashboard" className="hover:text-brand-primary transition-colors">Relatório</a>
        <a href="#AboutDetails" className="hover:text-brand-primary transition-colors">Sobre</a>
        <a href="https://victorhugo.dev.br" className="hover:text-brand-primary transition-colors">Portfólio</a>

      </div>
    </div>
  </nav>
);