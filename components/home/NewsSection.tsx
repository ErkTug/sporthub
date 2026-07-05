export default function NewsSection() {
  const news = [
    {
      title: "Galatasaray yeni transferini açıkladı",
      category: "Süper Lig",
    },
    {
      title: "Şampiyonlar Ligi fikstürü belli oldu",
      category: "UEFA",
    },
    {
      title: "Milli takım hazırlık kampına başladı",
      category: "A Milli Takım",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="mb-6 text-3xl font-bold">📰 Son Haberler</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {news.map((item, index) => (
          <article
            key={index}
            className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition"
          >
            <span className="text-sm font-semibold text-emerald-600">
              {item.category}
            </span>

            <h3 className="mt-3 text-xl font-bold">
              {item.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}