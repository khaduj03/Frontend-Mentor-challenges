// TimeCard.js
import React from "react";

function TimeCard({ name, daily, weekly, monthly }) {
  return (
    <div className="flex flex-col absolute bottom-0 right-0 left-0 h-[150px] bg-gray-800 rounded-tr-2xl   rounded-tl-2xl justify-between items-center w-full  p-4">
      <h2 className="text-white text-lg flex justify-between w-full"><span>{name}</span> <img className="w-3 h-1" src="/images/icon-ellipsis.svg" alt="" /></h2>
      <div className="text-white">
        <div>
          <p className="text-3xl">{daily}hrs</p>
          <ul>
            {/* {daily.map((hours, index) => (
              <li key={index}>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index]}: {hours} hrs
              </li>
            ))} */}
          </ul>
        </div>
        <div className="mt-2">
          <strong>Weekly Total:</strong> {weekly} hrs
        </div>
        {/* <div className="mt-2">
          <strong>Monthly Total:</strong> {monthly} hrs
        </div> */}
      </div>
    </div>
  );
}

export default TimeCard;
