"use client";
import { Category } from "@/app/interfaces/category";

interface CategoryFilterProps {
  categories: Category[];
  getPhotosByCategory: (id: string) => void;
}
export const CategoryFilter: React.FC<CategoryFilterProps> = (props) => {
  return (
    <div className="w-full text-center">
      <span
        id="badge-dismiss-default"
        className="inline-flex items-center rounded-full mb-2 px-3 py-2 mr-2 text-xs cursor-pointer lg:text-sm font-medium text-black bg-white rounded"
        onClick={() => props.getPhotosByCategory("all")}
      >
        Toutes
      </span>
      {props.categories?.map((category) => (
        <span
          key={category.id}
          id="badge-dismiss-default"
          className="inline-flex items-center rounded-full mb-2 px-3 py-2 mr-2 text-xs lg:text-sm cursor-pointer font-medium text-black bg-white rounded"
          onClick={() => props.getPhotosByCategory(category.id)}
        >
          {category.name}
        </span>
      ))}
    </div>
  );
};
