import React from "react";

interface FinalScreenProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ setCurrentStep }) => {
  return (
    <div className="p-4 relative">
      <button
        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
        onClick={() => setCurrentStep(3)}
      >
        Back
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
        odio vitae justo rutrum, in facilisis tellus aliquam.
      </p>
    </div>
  );
};

export default FinalScreen;
