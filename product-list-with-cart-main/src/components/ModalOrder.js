import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheck } from 'react-icons/fa'; 

const ModalOrder = ({ orderCart,setShowModal ,setOrderCart}) => {

    const handleStartNew=()=>{
        setShowModal(false)
        setOrderCart([])
    }

  return (
    <div>
      <div className="bg-white w-[330px] h-[440px] flex justify-center items-center flex-col  rounded-xl mb-10 ">
        <div className="p-8">
            <FaCheck
            className="p-2 font-thin text-7xl   w-10 h-10 text-green-500 border-green-500 border rounded-full flex justify-center items-center"
            />
            <p className="text-3xl font-bold">Order Confirmed</p>
            <p className="text-xs text-gray-400">We hope you enjoy your food!</p>
        </div>
        <div className="w-[330px] h-[200px] overflow-y-auto  ">
        {orderCart.map((item) => (
            <div className="flex justify-between overflow-x-hidden items-center flex-row m-2 p-2 rounded-lg ">
              <div className="flex flex-row">
                <img
                  className="w-[60px] h-[60px] rounded-lg"
                  src={item.img}
                  alt={item.name}
                />
                <div className="ml-3">
                  <p className="font-bold ">{item.name}</p>
                  <p className="text-gray-500 text-xs ">
                    <span className="text-red-700 font-bold">
                      x{item.count}{" "}
                    </span>{" "}
                    @ ${item.price} <span> ${item.count * item.price}</span>
                  </p>
                </div>
              </div>
            </div>
        ))}
        </div>
        <button 
        className="bg-red-700 text-xl relative bottom-0 text-white flex justify-center items-center w-[250px] h-[40px] rounded-lg "
        onClick={handleStartNew}>Start new Order</button>
      </div>
      {/* <div className="total-price">
        <p className="font-bold">Total: ${total}</p>
      </div> */}
    </div>
  );
};

export default ModalOrder
