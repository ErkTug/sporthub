const leagues = [
  "🇹🇷 Trendyol Süper Lig",
  "🏴 Premier League",
  "🇪🇸 LaLiga",
  "🇮🇹 Serie A",
  "🇩🇪 Bundesliga",
  "🇫🇷 Ligue 1",
];

export default function PopularLeagues() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="mb-6 text-3xl font-bold">🏆 Popüler Ligler</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {leagues.map((league) => (
          <div
            key={league}
            className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">{league}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}