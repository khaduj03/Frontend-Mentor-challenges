import React from 'react';

const OrderCard = ({ orderCart }) => {
  return (
    <div>
      <div className='bg-white w-[330px] rounded-xl mr-32'>
        <h1 className='text-red-700 font-bold text-2xl w-full h-11 justify-start ml-4 items-center flex '>Your Cart</h1>
        {/* Iterate through the orderCart array and render each item */}
        {orderCart.map(item => {
          return (
            <div key={item.id} className='flex flex-row m-5 '>
             <img 
              className='w-[60px] h-[60px] rounded-lg'
              src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderCard;
