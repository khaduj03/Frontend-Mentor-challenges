import React from "react";

const TestimonialsSlider = ({ image, text ,handleSlider,handlePrevSlider }) => {
  return (
    <div className="flex w-[100rem] h-[35rem] justify-center relative ">
        <img
        className="absolute z-20 w-[35rem] right-0"
         src="images/pattern-bg.svg" alt="bg-svg" />
        
      <div className="text-3xl  w-96">
        <p className="flex w-96 absolute z-40 left-0">{text}</p>
      </div>
      <div className="w-[27rem] h-[350px] relative">
        <img className="w-[27rem] absolute z-30 left-20 top-14 shadow-[0px_10px_60px_rgba(0,0,0,0.3)] rounded " src={image} />
        <div className=" flex absolute z-50 top-[29rem]  left-32 w-24 p-4 items-center bg-white rounded-3xl justify-between h-10">
        <button 
        onClick={handlePrevSlider}><img src="/images/icon-prev.svg" alt="" /></button>
        <button onClick={handleSlider}><img src="/images/icon-next.svg" alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
