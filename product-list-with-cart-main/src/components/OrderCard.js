import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const OrderCard = ({ orderCart, setOrderCart, count, setCount,setShowModal }) => {
  const [total, setTotal] = useState(0);

  const handleDelete = (id) => {
    setOrderCart((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const newCount = orderCart.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
    const newTotal = orderCart.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
    setCount(newCount);
    setTotal(newTotal);
  }, [orderCart]);

  return (
    <div>
      <div className="bg-white w-[330px] rounded-xl flex flex-col justify-center items-center h-[310px]rounded-xl mr-32 mt-12">
        <h1 className="text-red-700 font-bold text-2xl w-full h-16 justify-start ml-4 items-center flex">
          Your Cart({count})
        </h1>
        <div className="h-[300px] w-[330px]  overflow-x-hidden  overflow-y-auto  ">
        {orderCart.map((item) => (
          <motion.div
            key={item.id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center flex-row m-2 p-2 shadow-[0px_8px_20px_rgba(0,0,0,0.2)] rounded-lg ">
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
              <div>
                <FaTimes
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  className="text-xs cursor-pointer mr-2 border-[1px] border-black rounded-full "
                />
              </div>
            </div>
          </motion.div>
        ))}
       </div>
        <div className="total-price">
        <p className="font-bold">Total: ${total}</p>
      </div>
      <div>
      <button 
        className="bg-red-700 text-xl relative bottom-0 text-white flex justify-center items-center w-[250px] h-[40px] rounded-lg "
        onClick={()=>{setShowModal(true)}}>Start new Order</button>
      </div>
      </div>

    </div>
  );
};

export default OrderCard;
