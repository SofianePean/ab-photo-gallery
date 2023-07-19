"use client";
import { Category } from "@/app/interfaces/category";

interface CategoryFilterProps {
  categories: Category[];
  getPhotosByCategory: (id: string) => void;
}
export const CategoryFilter: React.FC<CategoryFilterProps> = (props) => {
  return (
    <div className="w-full text-center">
      {props.categories?.map((category) => (
        <span
          key={category.id}
          id="badge-dismiss-default"
          className="inline-flex items-center rounded-full mb-2 px-2 py-1 mr-2 text-xs lg:text-sm font-medium text-black bg-white rounded"
          onClick={() => props.getPhotosByCategory(category.id)}
        >
          {category.name}
        </span>
      ))}
    </div>
  );
};
