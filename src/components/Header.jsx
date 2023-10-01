import React from 'react'
import {FaSearch} from 'react-icons/fa'
export default function Header() {
  return (
   <header className='bg-slate-200 shadow-md'>
    {/* <div className='flex justify-between items-center max-w-6l mx-auto p-3 ' > */}
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Raipur</span>
        <span className='text-slate-700'>Realtor</span>
      </h1>
      <form className='bg-slate-100 p-3 flex items-center   rounded-lg '>
      <input type='text' placeholder='Search...'
      //  sm: code.. if for small scxreen devices  
      className='bg-transparent focus:outline-none w-50 sm: w-60'/>
      <FaSearch className='text-slate-600 '/>
      </form>
    </div>
   </header>
  )
}
