import React from "react";

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="w-full h-1 bg-gray-300 my-4">
      <div
        className="h-full bg-purple-500"
        style={{ width: `${(currentStep / 4) * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
