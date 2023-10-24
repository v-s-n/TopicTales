import React from "react";

interface LevelSelectionProps {
  selectedLevel: string;
  setSelectedLevel: React.Dispatch<React.SetStateAction<string>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const LevelSelection: React.FC<LevelSelectionProps> = ({
  selectedLevel,
  setSelectedLevel,
  setCurrentStep,
}) => {
  const levels = ["Child", "Teen", "Adult", "Elderly"];

  const toggleLevel = (level: string) => {
    if (selectedLevel === level) {
      setSelectedLevel("");
    } else {
      setSelectedLevel(level);
    }
  };

  return (
    <div className="p-4">
      {levels.map((level) => (
        <button
          key={level}
          className={`m-2 p-2 ${
            selectedLevel.includes(level)
              ? "bg-purple-500 text-white rounded-full text-[14px] px-4"
              : "bg-gray-200 rounded-full text-[14px] px-4"
          }`}
          onClick={() => toggleLevel(level)}
        >
          {level}
        </button>
      ))}
      <div className="mt-4">
        <button
          className="bg-purple-500 text-white p-3 rounded mt-72 mx-auto text-sm flex flex-row items-center gap-1"
          onClick={() => setCurrentStep(4)}
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

export default LevelSelection;
