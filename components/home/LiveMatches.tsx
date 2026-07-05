export default function LiveMatches() {
  const matches = [
    {
      home: "Galatasaray",
      away: "Fenerbahçe",
      score: "2 - 1",
      status: "75'"
    },
    {
      home: "Beşiktaş",
      away: "Trabzonspor",
      score: "0 - 0",
      status: "Devre Arası"
    },
    {
      home: "Barcelona",
      away: "Real Madrid",
      score: "1 - 3",
      status: "Maç Sonu"
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-6 text-3xl font-bold">⚽ Canlı Maçlar</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {matches.map((match, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-6 shadow-lg"
          >
            <p className="text-sm text-emerald-600 font-semibold">
              {match.status}
            </p>

            <h3 className="mt-3 text-xl font-bold">
              {match.home}
            </h3>

            <p className="my-2 text-center text-2xl font-bold">
              {match.score}
            </p>

            <h3 className="text-xl font-bold">
              {match.away}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}