import React from 'react'

export default function Complete({continueNew}) {
  return (
    <div>
        <div className='w-[300px] h-[300px] flex flex-col justify-center items-center'>
                <img src="/images/icon-complete.svg" alt="" className=' w-[60px] h-[60px] rounded-full' />
                <h1 className='font-mono text-3xl m-3'>Thank you!</h1>
                <p className='text-gray-600 font-mono'>we have aded your card detail</p>
                <button 
                className='w-[300px] font-mono m-3 text-white h-[40px] rounded-[10px] bg-blue-950'
                onClick={continueNew}>Continue</button>
        </div>
    </div>
  )
}
