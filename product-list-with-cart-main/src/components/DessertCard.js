import React from 'react'

const DessertCard = ({image,name,price}) => {
  return (
    <div>
      <div className='w-[150px] h-[200px] bg-white flex flex-col justify-center items-center'>
        <img
        className='w-[150px] h-[150px]'
         src={image} alt="" />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default DessertCard
