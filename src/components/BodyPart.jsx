import React, { useState, useContext } from 'react';
import { ExerciseContext } from "./ExerciseContext";

export default function BodyPart({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const { setSelectedBodyPart } = useContext(ExerciseContext);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = async () => {
    try {
      setSelectedBodyPart(item);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div
      className="w-48 h-48 bg-white rounded-lg shadow-md flex flex-col justify-center items-center mt-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <button className="flex flex-col items-center justify-center">
        <img
          className={`w-12 transition-all duration-300 ${isHovered ? 'scale-150' : ''}`}
          src={require("../assets/icons/gym.png")}
          alt="gym"
        />
        <h1 className="text-black text-lg font-medium mt-2 text-center">{item}</h1>
      </button>
    </div>
  );
}