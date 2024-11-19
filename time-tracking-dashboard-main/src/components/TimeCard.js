// TimeCard.js
import React from "react";

function TimeCard({ name, last, hrs }) {
  return (
    <div className="flex flex-col absolute bottom-0 right-0 left-0 lg:h-[150px] h-[110px] bg-gray-800 hover:bg-gray-700 rounded-tr-2xl   rounded-tl-2xl justify-between items-center w-full  p-4">
      <h2 className="text-white text-lg flex justify-between w-full">
        <span>{name}</span>{" "}
        <img className="w-3 h-1" src="/images/icon-ellipsis.svg" alt="" />
      </h2>
      <div className="text-white">
        <div>
          <div className="mt-2 flex lg:flex-col items-baseline  w-full inset-0 ">
            <p className="text-3xl mr-[100px] ">{hrs}hrs</p>
            <p className="text-xs  text-gray-400">Last Week {last} hrs </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeCard;
