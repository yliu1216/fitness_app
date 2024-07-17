import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Exercise from "../components/Exercise.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import SearchExercise from "../components/SearchExercises.jsx";

export default function Home(){
    return (
        <div>
            <HeroBanner/>
            <SearchExercise/>
            <Exercise/>
        </div>
    )
}