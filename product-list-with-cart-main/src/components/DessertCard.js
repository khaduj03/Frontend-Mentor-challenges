import React from "react";
import { useState } from "react";

const DessertCard = ({ image, name, price, discription }) => {
  const [isAddcartClicked, setIsAddCartClicked] = useState(true);
  const [addToCart , setAddToCart]=useState("")

  const handleAdd=()=>{
    setIsAddCartClicked(!isAddcartClicked)
  }
  return (
    <div>
      <div className="w-[200px] h-[260px] m-2 bg-white flex flex-col justify-center items-center">
        <div className=" relative w-[170px] h-[170px] flex justify-center items-center cursor-pointer ">
          <img className="w-[170px] h-[170px] rounded-md" src={image} alt="" />

          {isAddcartClicked ?
          (<div className="flex flex-row justify-center bottom-[-20px]  bg-white items-center w-[120px] absolute h-[30px] p-2  space-x-2 rounded-3xl border-[1px] border-black ">
            <img
              src="/assets/images/icon-add-to-cart.svg"
              alt="the add to cadt icon"
            />
            <span
            onClick={handleAdd}
             className="text-xs  ">Add to cart</span>
          </div>
          ):(
            <div className="flex flex-row justify-center bottom-[-20px]  bg-red-700 items-center w-[120px] absolute h-[30px] p-2  space-x-6 rounded-3xl  ">
            <img
            className= "hover:bg-white hover:text-red-700 fill-transparent  border-white border-[1px] w-4 h-4 p-1 flex justify-center items-center rounded-full "
              src="/assets/images/icon-decrement-quantity.svg"
              alt="the add to cadt icon"
            />
            <span className="text-xs text-white ">0</span>
            <img
             className="border-white border-[1px] w-4 h-4 p-1 flex justify-center items-center rounded-full"
              src="/assets/images/icon-increment-quantity.svg"
              alt="the add to cadt icon"
            />
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
