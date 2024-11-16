import React from "react";

export default function Form() {

    
  return (
    <div>
      <div className="w-[300px] h-[300px]">
        <form action="" className="flex flex-col">
          <label htmlFor="" className="font-mono mb-1  mt-2">
            {" "}
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            className="outline-none border-[1px] p-2 rounded focus:border-purple-400 border-black"
          />

          <label htmlFor="" className="font-mono mb-1 mt-2">
            {" "}
            CARD NUMBER
          </label>
          <input
            type="text"
            className="outline-none border-[1px] p-2 rounded focus:border-purple-400 border-black"
          />

          <div className="flex flex-row h-[80px]  justify-center items-center">
            <div className="flex flex-col w-52">
              <label htmlFor="" className="text-xs">
                EXP.DATE(MM/YY){" "}
              </label>
              <div className="flex flex-row">
                <input
                  type="text"
                  className="border-[1px] focus:border-purple-400 p-2 outline-none h-[30px] w-[50px] rounded mr-2 border-black"
                />
                <input
                  type="text"
                  className="border-[1px] focus:border-purple-400 p-2 outline-none h-[30px] w-[50px] rounded  border-black"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-xs">
                CVC
              </label>
              <input
                type="text"
                className="border-[1px] mb-2 focus:border-purple-400 p-2 outline-none w-44 h-[30px] rounded ml-2  border-black"
              />
            </div>
          </div>
          <button className="w-[300px] rounded-lg h-9 bg-black text-white">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
