import React from "react";

export default function FrontCard({
  cardName,
  cardNumber,
  expDateMM,
  expDateYY,
}) {
  return (
    <div>
      <div className=" lg:w-[400xp] flex  lg:top-[0px] lg:right-0 lg:static  relative top-[100px] right-[130px] w-[330px] z-50 lg:z-50 justify-center items-center ">
        <img
          className="z-10 lg:w-[400px]  absolute left-36 top-20"
          src="/images/bg-card-front.png "
          alt=""
        />
        <div className="bg-white w-14 h-14 rounded-full absolute top-[110px] left-[170px] z-50">
          {" "}
        </div>
        <div className="border-[1px] border-white w-7 h-7 rounded-full absolute top-[125px] left-[245px] z-50">
          {" "}
        </div>
        <div className=" lg:text-3xl text-1xl font-mono  w-[350px] h-[40px] rounded absolute top-[180px] lg:top-[200px] left-[170px] text-white z-50">
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </div>
        <div className=" text-white text-xs font-mono  w-[100px] h-[30px] rounded absolute top-[230px] lg:top-[260px] left-[170px] z-50">
          {cardName ? cardName : "JANE APPLESEED"}
        </div>
        <div className=" text-white text-xs font-mono  w-[100px] h-[30px] rounded absolute top-[230px] lg:top-[260px] left-[400px] lg:left-[470px] z-50">
          {expDateMM ? `${expDateMM}/${expDateYY}` : "00/00"}
        </div>
      </div>
    </div>
  );
}
