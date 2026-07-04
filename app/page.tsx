import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-100">
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="mb-6 text-5xl font-bold text-slate-900">
            Türkiye'nin Yeni Spor Platformu
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
            Haberler, canlı skorlar, ligler, takımlar ve spor dünyasındaki tüm gelişmeler tek bir platformda.
          </p>

          <button className="rounded-lg bg-emerald-600 px-8 py-3 text-white hover:bg-emerald-700">
            Keşfet
          </button>
        </section><div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  <div className="rounded-xl bg-white p-6 shadow">
    <h3 className="text-xl font-bold">📰 Haberler</h3>
    <p className="mt-2 text-gray-600">
      En güncel spor haberlerini takip edin.
    </p>
  </div>

  <div className="rounded-xl bg-white p-6 shadow">
    <h3 className="text-xl font-bold">⚽ Canlı Skor</h3>
    <p className="mt-2 text-gray-600">
      Maçları anlık olarak takip edin.
    </p>
  </div>

  <div className="rounded-xl bg-white p-6 shadow">
    <h3 className="text-xl font-bold">🏆 Ligler</h3>
    <p className="mt-2 text-gray-600">
      Dünyanın en büyük liglerini keşfedin.
    </p>
  </div>

  <div className="rounded-xl bg-white p-6 shadow">
    <h3 className="text-xl font-bold">👥 Takımlar</h3>
    <p className="mt-2 text-gray-600">
      Favori takımlarınızı inceleyin.
    </p>
  </div>
</div>
      </main>
    </>
  );
}