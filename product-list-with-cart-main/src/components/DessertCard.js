import React from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';

const DessertCard = ({ id, image, name, price, discription, handleAddCart, isAdded }) => {

  return (
    <div>
      <div className="w-[200px] h-[260px] m-2 bg-pink-50  flex flex-col justify-center items-center">
        <div className="relative w-[170px] h-[170px] flex justify-center items-center cursor-pointer">
          <img className="w-[170px] h-[170px] rounded-md border-red-700 border" src={image} alt={name} />

          {!isAdded && (
            <div className="flex flex-row justify-center bottom-[-20px] bg-white items-center w-[120px] absolute h-[30px] p-2 space-x-2 rounded-3xl border-[1px] border-black">
              <img src="/assets/images/icon-add-to-cart.svg" alt="Add to cart icon" />
              <span onClick={() => handleAddCart(id, image, price, name)} className="text-xs">Add to cart</span>
            </div>
          )}

          {isAdded && (
            <div className="flex flex-row text-white justify-center bottom-[-20px] bg-red-700 items-center w-[120px] absolute h-[30px] p-2 space-x-6 rounded-3xl">
              <FaMinus className="hover:bg-white hover:text-red-700 border-white border-[1px] w-4 h-4 p-1 flex justify-center items-center rounded-full" />
              <span className="text-xs text-white">1</span> {/* تعداد اقلام در سبد خرید */}
              <FaPlus className="border-white hover:bg-white hover:text-red-700 text-white border-[1px] w-4 h-4 p-1 flex justify-center items-center rounded-full" />
            </div>
          )}
        </div>

        <div className="h-[200px] w-[170px] mt-6">
          <p className="text-xs text-gray-500 m-1">{name}</p>
          <p className="text-xs font-bold m-1">{discription}</p>
          <p className="text-red-700 text-xs font-bold m-1">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default DessertCard;
