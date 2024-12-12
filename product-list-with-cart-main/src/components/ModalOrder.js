import React, { useEffect } from "react";

import { FaCheck } from 'react-icons/fa'; 

const ModalOrder = ({count, orderCart,setCount,setShowModal,isEmpty ,setOrderCart,setIsempty}) => {

    const handleStartNew=()=>{
        setShowModal(false)
        setOrderCart([])
        setIsempty(false)
    }

    useEffect(() => {
        const newTotal = orderCart.reduce((acc, item) => {
            return acc + item.price * item.count;
          }, 0);
        setCount(newTotal);
      }, [orderCart]);
    

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
        {!isEmpty? (<div className="h-[200px] flex justify-center items-center">
        <img src="/assets/images/illustration-empty-cart.svg" alt="" />
        </div>):(
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
        )}
        <div className="w-[280px] h-10 flex justify-between">
          <p className="mt-1">Order Total</p>
          <p className="font-bold text-2xl"> ${count}</p>
        </div>
        <button 
        className="bg-red-700 text-xs relative mb-2 text-white flex justify-center items-center w-[300px] h-[40px] rounded-3xl "
        onClick={handleStartNew}>Start new Order</button>
      </div>
  
    </div>
  );
};

export default ModalOrder
