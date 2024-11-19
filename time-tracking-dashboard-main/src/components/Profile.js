import React from "react";
export default function Profile() {
  return (
    <div>
      <main>
        <div className="lg:w-[200px] w-[300px] lg:mr-4 mr-0 mb-0 h-[160px] lg:h-[300px] rounded-[10px] bg-[#5746ea] lg:m-0 flex lg:flex-col flex-row p-5 m-0  items-start">
          <img
            className="w-[80px] h-[80px] border-[3px] border-white rounded-full "
            src="/images/image-jeremy.png"
            alt="image-jeremy.png"
          />
          <div className="">
            <p className="text-white text-xs lg:ml-0 ml-6 mt-7">Report for</p>
            <h1 className="text-white lg:text-4xl text-1xl lg:ml-0  ml-6 font-semibold">
              {"Jeremy Rabson "}
              
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
