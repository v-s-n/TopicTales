import React from "react";

interface FinalScreenProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ setCurrentStep }) => {
  return (
    <div className="px-4 relative flex flex-col items-center">
      <h1 className="story-title font-bold">Final</h1>
      <p className="story p-2 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
        odio vitae justo rutrum, in facilisis tellus aliquam.
      </p>
    </div>
  );
};

export default FinalScreen;
