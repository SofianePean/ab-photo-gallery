import { Category } from "./category";

export interface Photo {
  id: number;
  src: string;
  url: string;
  description: string;
  category: Category;
}
