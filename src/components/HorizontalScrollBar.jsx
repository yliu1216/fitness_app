import BodyPart from "./BodyPart";
import React, { useRef } from "react";

export default function HorizontalScrollBar({ data }) {
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 100;
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 100;
  };

  return (
    <div className="relative" >
      <div className="flex mt-5 items-center gap-x-8 overflow-x-hidden" ref={containerRef}   style={{ scrollBehavior: "smooth", maxWidth: "100%", margin: "0 auto", flexWrap: 'nowrap'  }}>
        {data.map((item, index) => (
          <div key={index} className="text-black">
            <BodyPart item={item} />
          </div>
        ))}
      </div>
      <div className="top-0 right-0 bottom-0 items-center">
        <button className="bg-gray-200 text-gray-600 p-2 ml-2" onClick={handleScrollLeft}>
          <img src={require("../assets/icons/left-arrow.png")} alt="larrow" />
        </button>
        <button className="bg-gray-200 text-gray-600 p-2 ml-2" onClick={handleScrollRight}>
          <img src={require("../assets/icons/right-arrow.png")} alt="rarrow" />
        </button>
      </div>
    </div>
  );
}