import React from 'react'

function Card({name, email, imageUrl, removeData, index}) {
  return (
    <div className='w-52 h-full bg-zinc-100 flex flex-col items-center p-3 rounded-lg'>
        <div className='image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden'>
          <img className='2-full h-full object-cover' src={imageUrl} alt="" />
        </div>
        <h1 className='mt-1 text-xl font-semibold text-center leading-none'>{name}</h1>
        <h4 className='opacity-60 text-xs font-semibold'>{email}</h4>
        <p className='mt-1 text-center text-xs font-semibold learning-1 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda ab rem.</p>
        <button onClick={()=>removeData(index)} className='px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4'>Remove it</button>
    </div>
  )
}

export default Card