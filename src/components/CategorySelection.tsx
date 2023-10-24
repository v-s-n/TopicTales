import React from "react";

interface CategorySelectionProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({
  selectedCategories,
  setSelectedCategories,
  setCurrentStep,
}) => {
  const categories = [
    "Fantacy",
    "Fiction",
    "Manga",
    "Fun",
    "Adventure",
    "Mystery",
    "Magic",
    "Thrill",
    "Random",
  ];

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([category]);
    }
  };

  return (
    <div className="p-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`m-2 p-2 ${
            selectedCategories.includes(category)
              ? "bg-purple-500 text-white rounded-full text-[14px] px-4"
              : "bg-gray-200 rounded-full text-[14px] px-4"
          }`}
          onClick={() => toggleCategory(category)}
        >
          {category}
        </button>
      ))}
      <div className="mt-4">
        <button
          className="bg-purple-500 text-white p-3 rounded absolute left-1/2 transform -translate-x-1/2 bottom-12 text-sm flex flex-row items-center gap-1"
          onClick={() => setCurrentStep(3)}
        >
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CategorySelection;
