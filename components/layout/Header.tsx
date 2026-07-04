export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-emerald-400">
          ⚽ SportHub
        </h1>

        <nav className="hidden gap-6 md:flex">
          <a href="#" className="hover:text-emerald-400 transition-colors">
            Haberler
          </a>

          <a href="#" className="hover:text-emerald-400 transition-colors">
            Canlı Skor
          </a>

          <a href="#" className="hover:text-emerald-400 transition-colors">
            Ligler
          </a>

          <a href="#" className="hover:text-emerald-400 transition-colors">
            Takımlar
          </a>

          <a href="#" className="hover:text-emerald-400 transition-colors">
            Giriş
          </a>
        </nav>
      </div>
    </header>
  );
}