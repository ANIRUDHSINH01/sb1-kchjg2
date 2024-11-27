export interface Game {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  banner: string;
}

export interface Tournament {
  id: string;
  title: string;
  game: string;
  startDate: string;
  prizePool: string;
  registrationOpen: boolean;
  thumbnail: string;
}

export interface FeaturedStream {
  id: string;
  title: string;
  game: string;
  viewerCount: number;
  thumbnailUrl: string;
  streamerName: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  thumbnail: string;
}