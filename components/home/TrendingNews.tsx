const news = [
  {
    title: "Galatasaray yeni transferini açıkladı",
    category: "Süper Lig",
  },
  {
    title: "Şampiyonlar Ligi fikstürü açıklandı",
    category: "UEFA",
  },
  {
    title: "Fenerbahçe hazırlık maçını kazandı",
    category: "Hazırlık Maçı",
  },
];

export default function TrendingNews() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="mb-6 text-3xl font-bold">🔥 Trend Haberler</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {news.map((item) => (
          <article
            key={item.title}
            className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl"
          >
            <span className="text-sm font-semibold text-emerald-600">
              {item.category}
            </span>

            <h3 className="mt-3 text-lg font-bold">
              {item.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}