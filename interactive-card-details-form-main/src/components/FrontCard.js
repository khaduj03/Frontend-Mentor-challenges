import React from "react";

export default function FrontCard() {
  return (
    <div>
      <div className="flex relative justify-center items-center  w-[300xp]">
        <img
          className="z-10 w-[400px]  absolute left-36 top-20"
          src="/images/bg-card-front.png "
          alt=""
        />
        <div className="bg-white w-14 h-14 rounded-full absolute top-[110px] left-[170px] z-50">
          {" "}
        </div>
        <div className="border-[1px] border-white w-7 h-7 rounded-full absolute top-[125px] left-[245px] z-50">
          {" "}
        </div>
        <div className=" text-4xl font-mono  w-[350px] h-[40px] rounded absolute top-[200px] left-[170px] text-white z-50">
          12345678900{" "}
        </div>
        <div className=" text-white text-xs font-mono  w-[100px] h-[30px] rounded absolute top-[260px] left-[170px] z-50">
          FELICIA LEIRE{" "}
        </div>
        <div className=" text-white text-xs font-mono  w-[100px] h-[30px] rounded absolute top-[260px] left-[470px] z-50">
          09/00{" "}
        </div>
      </div>
    </div>
  );
}
