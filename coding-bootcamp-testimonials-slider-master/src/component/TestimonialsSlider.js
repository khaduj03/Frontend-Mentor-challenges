import React from "react";

const TestimonialsSlider = ({ image, text }) => {
  return (
    <div className="flex  w-4/5 h-4/5 justify-center relative ">
        <img
        className="absolute z-20 w-96 right-0"
         src="images/pattern-bg.svg" alt="bg-svg" />
        
      <div className="text-3xl  w-96">
        <p className="flex w-96 absolute z-40 left-0">{text}</p>
      </div>
      <div className="w-[300px] h-[350px] relative">
        <img className="w-5/6 absolute z-30 right-0 " src={image} />
      </div>
    </div>
  );
};

export default TestimonialsSlider;
