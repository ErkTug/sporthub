export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-emerald-400">
            ⚽ SportHub
          </h1>

          <nav className="hidden gap-6 md:flex">
            <a href="#" className="hover:text-emerald-400">
              Haberler
            </a>

            <a href="#" className="hover:text-emerald-400">
              Canlı Skor
            </a>

            <a href="#" className="hover:text-emerald-400">
              Ligler
            </a>

            <a href="#" className="hover:text-emerald-400">
              Takımlar
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="mb-6 text-5xl font-extrabold text-slate-900">
          Türkiye'nin Yeni Spor Platformu
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-600">
          Haberler, canlı skorlar, ligler, takımlar, oyuncular ve
          istatistikler tek bir platformda.
        </p>

        <button className="rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700">
          SportHub'a Başla
        </button>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3">
        {[
          "📰 Son Dakika Haberleri",
          "⚽ Canlı Skorlar",
          "🏆 Lig ve Takım İstatistikleri",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-white p-8 shadow-md transition hover:shadow-xl"
          >
            <h3 className="text-xl font-bold">{item}</h3>

            <p className="mt-4 text-slate-600">
              Bu bölüm yakında gerçek verilerle doldurulacak.
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-6 text-center text-slate-500">
        © 2026 SportHub — Tüm hakları saklıdır.
      </footer>
    </main>
  );
}