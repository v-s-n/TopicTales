import React from "react";

interface TopicInputProps {
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const TopicInput: React.FC<TopicInputProps> = ({
  setTopic,
  setCurrentStep,
}) => {
  return (
    <div className="p-4">
      <label className="block  text-xl font-bold ">Brief your topic</label>
      <div className="description text-sm text-gray-600">
        This topic/idea will be used to create concept stories
      </div>
      <input
        className="border p-2 w-full mb-4 mt-8 h-12 rounded-lg bg-gray-200"
        type="text"
        onChange={(e) => setTopic(e.target.value)}
      />
      <button
        className="bg-purple-500 text-white p-3 rounded absolute left-1/2 transform -translate-x-1/2 bottom-28 text-sm flex flex-row items-center gap-1"
        onClick={() => setCurrentStep(2)}
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
  );
};

export default TopicInput;
