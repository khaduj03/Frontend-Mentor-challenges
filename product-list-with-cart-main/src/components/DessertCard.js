import React from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
const DessertCard = ({setOrderCart,setDesserts,count,idCart, image, name, price, discription, handleAddCart, isAdded }) => {

    const handleIncrement = (id) => {
        setOrderCart(prev => {
          return prev.map(item => {
            if (item.id === id) {
              return { ...item, count: (item.count || 0) + 1 };
            }
            
            return item;

          });
        });

        setDesserts(prev=>{
            return prev.map(item => {
                if (item.id === id) {
                  return { ...item, count: (item.count || 0) + 1 };
                  
                }
                return item;
    
              });
        })
      };
      

    const handleDecrement=(id)=>{
        setOrderCart(prev => {
            return prev.map(item => {
              if (item.id === id &&item.count!==1) {
                return { ...item, count: (item.count || 1) -1 };
              }
              return item;
  
            });
          });
  
          setDesserts(prev=>{
              return prev.map(item => {
                  if (item.id === id &&item.count!==1) {
                    return { ...item, count: (item.count || 1) - 1 };
                  }
                  return item;
      
                });
          })
    }
  return (
    <div>
      <div className="lg:w-[200px] p-8 lg:p-0 h-[380px] lg:h-[260px] lg:m-2 bg-pink-50  flex flex-col justify-center items-center">
        <div className="relative  lg:w-[170px] lg:h-[170px] flex justify-center items-center cursor-pointer">
          <img className={`${isAdded ? "border-red-700 border-[2px] shadow-[0px_5px_60px_rgba(0,0,0,0.2)] " : "border-none"} lg:w-[170px]  lg:h-[170px] rounded-md`} src={image} alt={name} />

          {!isAdded && (
            <div className="flex flex-row justify-center bottom-[-20px] bg-white items-center w-[120px] absolute h-[30px] p-2 space-x-2 rounded-3xl border-[1px] border-black">
              <img src="/assets/images/icon-add-to-cart.svg" alt="Add to cart icon" />
              <span onClick={() => handleAddCart(idCart, image, price, name,count)} className="text-xs">Add to cart</span>
            </div>
          )}

          {isAdded && (
            <motion.div className="flex flex-row text-white justify-center bottom-[-20px] bg-red-700 items-center w-[120px] absolute h-[30px] p-2 space-x-6 rounded-3xl 
            "
            initial={{ opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{ opacity: 0 }}
            
            >
              <FaMinus 
              onClick={()=>{handleDecrement(idCart)}}
              className="hover:bg-white hover:text-red-700 border-white border-[1px] w-4 h-4 p-1 flex justify-center items-center rounded-full" />
              <AnimatePresence>
              <motion.span 
            initial={{y:20, opacity: 0 }}
            animate={{y:0,opacity: 1 }}
            exit={{y:-20, opacity: 0 }}
              className="text-xs text-white">{count}</motion.span> 
              </AnimatePresence>
              <FaPlus 
              onClick={()=>handleIncrement(idCart)}
              className="border-white hover:bg-white hover:text-red-700 text-white border-[1px] w-4 h-4 p-1 flex justify-center items-center rounded-full" />
            </motion.div>
          )}
        </div>

        <div className="lg:h-[200px] w-[300px] lg:w-[170px] mt-6">
          <p className="text-xs text-gray-500 m-1">{name}</p>
          <p className="text-xs font-bold m-1">{discription}</p>
          <p className="text-red-700 text-xs font-bold m-1">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default DessertCard;
