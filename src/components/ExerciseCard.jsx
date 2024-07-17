import React, {useState} from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center mt-4 p-4 gap-5" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className={`transition-all duration-300 ${isHovered ? 'scale-150' : ''}`} />
      <div className="font-semibold text-white gap-2">
        <button className="w-full gap-5 bg-black mr-2 mb-2 rounded-2xl items-center">{exercise.bodyPart}</button>
        <button className="w-full gap-5 bg-primary mr-2 rounded-2xl items-center">{exercise.target}</button> 
      </div>
      <h3 className="text-lg font-medium mt-2">{exercise.name}</h3>

    </Link>
  );
};

export default ExerciseCard;