import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold text-emerald-400"
        >
          ⚽ SportHub
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/">Ana Sayfa</Link>

          <Link href="/live">Canlı Skor</Link>

          <Link href="/news">Haberler</Link>

          <Link href="/leagues">Ligler</Link>

          <Link href="/teams">Takımlar</Link>

          <button className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold hover:bg-emerald-600">
            Giriş Yap
          </button>
        </nav>
      </div>
    </header>
  );
}