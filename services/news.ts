export interface NewsItem {
  id: number;
  title: string;
  category: string;
}

export async function getTrendingNews(): Promise<NewsItem[]> {
  return [
    {
      id: 1,
      title: "Galatasaray yeni transferini açıkladı",
      category: "Süper Lig",
    },
    {
      id: 2,
      title: "Fenerbahçe hazırlık maçını kazandı",
      category: "Hazırlık",
    },
    {
      id: 3,
      title: "Şampiyonlar Ligi fikstürü açıklandı",
      category: "UEFA",
    },
  ];
}