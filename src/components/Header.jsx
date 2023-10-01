import React from 'react'
import { Link } from 'react-router-dom'
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
      <form className='bg-slate-100 p-3 flex items-center  rounded-lg '>
      <input type='text' placeholder='Search...'
      //  sm: code.. if for small scxreen devices  
      className='bg-transparent focus:outline-none w-50 sm: w-40'/>
      <FaSearch className='text-slate-600 '/>
      </form>
      <ul className='flex gap-4'>
        <Link to='/home'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
        Home
        </li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
        About
        </li>
        </Link>
        <Link to='/sign-In'>
        <li className='sm:inline text-slate-700 hover:underline'>
        SignIn
        </li>
        </Link>
        {/* <Link to='/home'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
        SignOut
        </li>
        </Link> */}
      </ul>
    </div>
   </header>
  )
}
