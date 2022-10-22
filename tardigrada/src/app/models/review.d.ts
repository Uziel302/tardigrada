export interface IReview {
  id: number;
  name: string;
  stars: number;
  date: string;
  content: string;
  count: number;
  likers: number[];
}
