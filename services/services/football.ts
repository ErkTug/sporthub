export type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  score: string;
  status: string;
};

export async function getLiveMatches(): Promise<Match[]> {
  return [
    {
      id: 1,
      homeTeam: "Galatasaray",
      awayTeam: "Fenerbahçe",
      score: "2 - 1",
      status: "75'",
    },
    {
      id: 2,
      homeTeam: "Beşiktaş",
      awayTeam: "Trabzonspor",
      score: "0 - 0",
      status: "Devre Arası",
    },
  ];
}