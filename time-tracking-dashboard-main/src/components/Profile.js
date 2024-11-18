import React from "react";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div>
        <main>
          <div className="w-[200px] mb-0 h-[300px] rounded-[10px] bg-[#5746ea] flex flex-col p-5 m-5 items-start">
            <img
              className="w-[80px] h-[80px] border-[3px] border-white rounded-full "
              src="/images/image-jeremy.png"
              alt="image-jeremy.png"
            />
            <p className="text-white text-xs mt-7">Report for</p>
            <h1 className="text-white text-4xl font-semibold"> Jeremy Rabson</h1>
          </div>
        </main>
    </div>
  );
}
