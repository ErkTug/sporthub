import MatchCard from "@/components/matches/MatchCard";
import { getLiveMatches } from "@/services/football";

export default async function LiveMatches() {
  const matches = await getLiveMatches();

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-6 text-3xl font-bold">⚽ Canlı Maçlar</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  );
}