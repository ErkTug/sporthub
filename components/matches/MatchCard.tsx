import { Match } from "@/types/match";

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl">
      <p className="text-sm font-semibold text-emerald-600">
        {match.status}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {match.league}
      </p>

      <h3 className="mt-4 text-xl font-bold">
        {match.homeTeam}
      </h3>

      <p className="my-3 text-center text-2xl font-bold">
        {match.homeScore} - {match.awayScore}
      </p>

      <h3 className="text-xl font-bold">
        {match.awayTeam}
      </h3>

      <p className="mt-4 text-sm text-gray-500">
        Başlangıç: {match.kickoff}
      </p>
    </div>
  );
}