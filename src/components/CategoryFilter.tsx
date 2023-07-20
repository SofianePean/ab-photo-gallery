"use client";
import { Category } from "@/app/interfaces/category";
import { useState } from "react";

interface CategoryFilterProps {
  categories: Category[];
  getPhotosByCategory: (id: string) => void;
}
export const CategoryFilter: React.FC<CategoryFilterProps> = (props) => {
  const [categoryActive, setCategoryActive] = useState<string>("all");

  const onClickOnCategory = (category: Category) => {
    props.getPhotosByCategory(category.id);
    setCategoryActive(category.name);
  };

  return (
    <div className="w-full text-center">
      <span
        id="badge-dismiss-default"
        className={`inline-flex items-center rounded-full mb-2 px-3 py-2 mr-2 text-xs cursor-pointer lg:text-sm font-medium  rounded ${
          categoryActive === "all"
            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
            : "text-black bg-white"
        }`}
        onClick={() => onClickOnCategory({ id: "all", name: "all" })}
      >
        Toutes
      </span>
      {props.categories?.map((category) => (
        <span
          key={category.id}
          id="badge-dismiss-default"
          className={`inline-flex items-center rounded-full mb-2 px-3 py-2 mr-2 text-xs lg:text-sm cursor-pointer font-medium rounded ${
            categoryActive === category.name
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
              : "text-black bg-white"
          }`}
          onClick={() => onClickOnCategory(category)}
        >
          {category.name}
        </span>
      ))}
    </div>
  );
};
