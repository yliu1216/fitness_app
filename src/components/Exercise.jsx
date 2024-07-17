import React, { useContext, useState } from "react";
import { ExerciseContext } from "./ExerciseContext";
import ExerciseCard from "./ExerciseCard";
import ReactPaginate from "react-paginate";
import "../index.css"

export default function Exercise() {
  const { selectedExerciseData } = useContext(ExerciseContext);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 10;
  const offset = currentPage * cardsPerPage;
  const pageCount = Math.ceil(selectedExerciseData.length / cardsPerPage);

  
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentCards = selectedExerciseData.slice(offset, offset + cardsPerPage);
  return (
    <div className="text-primary">
    <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-6 pb-5">
      {currentCards.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
    <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}