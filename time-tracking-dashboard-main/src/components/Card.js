import React from 'react'

export default function Card({src , bg}) {
  return (
    <div>
        <div className={` ${bg ? bg:""} w-[200px] h-[40px]`}>
            <img className='' src={src} alt="" />
        </div>
    </div>
  )
}
