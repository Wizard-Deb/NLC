export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: 'Poetry' | 'Fiction' | 'Debate' | 'Workshop';
}

export interface Dimensions {
  width: number;
  height: number;
}
