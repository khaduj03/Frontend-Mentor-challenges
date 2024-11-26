import React from 'react';
import {  motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const OrderCard = ({ orderCart ,setOrderCart}) => {
    const handleDelete=(id)=>{
        setOrderCart(prev => prev.filter(item => item.id !== id));
    }
  return (
    <div>
      <div className='bg-white  w-[330px] h-[310px] overflow-x-hidden  overflow-y-auto rounded-xl mr-32 mt-12'>
        <h1 className='text-red-700 font-bold text-2xl w-full h-11 justify-start ml-4 items-center flex '>Your Cart</h1>
        {orderCart.map(item => {
          return (
            <AnimatePresence>
            <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            >
            <div key={item.id} className='flex justify-between items-center flex-row m-2 p-2 shadow-[0px_8px_20px_rgba(0,0,0,0.2)] rounded-lg '>
            <div className='flex flex-row'>
             <img 
              className='w-[60px] h-[60px] rounded-lg'
              src={item.img} alt={item.name} />
              <div className='ml-3'>
              <p className='font-bold '>{item.name}</p>
              <p className='text-gray-500 text-xs '><span className='text-red-700 font-bold' >x{item.count} </span> @ ${item.price}  <span> ${(item.count)*(item.price)}</span></p>
              </div>
              </div>
              <div>
                <FaTimes
                onClick={()=>{handleDelete(item.id)}}
                className='text-xs cursor-pointer  mr-2  border-[1px] border-black rounded-full '
                />
              </div>
            </div>
            </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};

export default OrderCard;
