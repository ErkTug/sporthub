import { Match } from "@/types/match";

export async function getLiveMatches(): Promise<Match[]> {
  return [
    {
      id: 1,
      homeTeam: "Galatasaray",
      awayTeam: "Fenerbahçe",
      homeScore: 2,
      awayScore: 1,
      status: "75'",
      league: "Trendyol Süper Lig",
      kickoff: "20:00",
    },
    {
      id: 2,
      homeTeam: "Beşiktaş",
      awayTeam: "Trabzonspor",
      homeScore: 1,
      awayScore: 1,
      status: "Devre Arası",
      league: "Trendyol Süper Lig",
      kickoff: "19:00",
    },
  ];
}