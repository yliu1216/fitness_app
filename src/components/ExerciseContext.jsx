import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ExerciseContext = createContext();

export function ExerciseProvider({ children }) {
  const [exerciseData, setExerciseData] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [selectedExerciseData, setSelectedExerciseData] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const response = await axios.get("/exerciseData");
        const data = response.data;
        setExerciseData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExerciseData();
  }, []);

  useEffect(() => {
    const fetchSelectedExerciseData = async () => {
      if (selectedBodyPart) {
        try {
          let response;
          if (selectedBodyPart === "all") {
            response = await axios.get("/exerciseData");
          } else {
            response = await axios.get(
              `/exerciseBodyPartName?bodyPart=${selectedBodyPart}`
            );
          }
          const data = response.data;
          setSelectedExerciseData(data);
        } catch (error) {
          console.error(error);
        }
      } else {
        setSelectedExerciseData([]);
      }
    };
  
    fetchSelectedExerciseData();
  }, [selectedBodyPart]);

  return (
    <ExerciseContext.Provider
      value={{
        exerciseData,
        selectedBodyPart,
        setSelectedBodyPart,
        selectedExerciseData,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
}