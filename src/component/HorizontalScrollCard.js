import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const HorizontalScrollCard = ({ data = [], heading, media_type }) => {
  const containerRef = useRef();
  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };
  const handlePre = () => {
    containerRef.current.scrollLeft -= 300;
  };
  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">
        {heading}
      </h2>
      <div className=" relative">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-x-scroll overflow-hidden relative z-10 scroll-smooth transition-all scroll-none"
        >
          {data.map((item, index) => {
            return (
              <Card
                key={item.id + "heading" + index}
                data={item}
                index={index + 1}
                trending={true}
                media_type={media_type}
              />
            );
          })}
        </div>
        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
          <button
            onClick={() => handlePre()}
            className="bg-white p-2 rounded-full text-black -ml-2 z-10"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={() => handleNext()}
            className="bg-white p-2 rounded-full text-black -ml-2 z-10"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
