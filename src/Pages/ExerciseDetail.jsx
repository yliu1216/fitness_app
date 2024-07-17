import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function ExerciseDetail(){
    const {id} = useParams();
    console.log(id);
    const [exercise, setExercise] = useState(false);

    useEffect(()=>{
        if(!id){
            return null;
        }
        axios.get(`/exercise/:${id}`).then((response)=>{
            setExercise(response.data);
        });
    }, [id]);

    if(!exercise){
        return null;
    }

    return (
        <div className="mt-4 bg-white mx-8 px-8 pt-8">
        <h1 className="text-3xl font-bold mb-4">{exercise.name}</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-[2fr_1fr] rounded-2xl overflow-hidden">
          <div>
            {exercise.url && (
              <div>
                <img src={exercise.gifUrl} alt="exercise" className="w-full" />
              </div>
            )}
          </div>
          <div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Details</h2>
              <p>
                <span className="font-semibold">Target:</span> {exercise.target}
              </p>
              <p>
                <span className="font-semibold">Equipment:</span>{" "}
                {exercise.equipment}
              </p>
              <p>
                <span className="font-semibold">Body Part:</span>{" "}
                {exercise.bodyPart}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}