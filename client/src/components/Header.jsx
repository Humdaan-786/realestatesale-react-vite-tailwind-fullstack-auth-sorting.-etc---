import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
export default function Header() {
  const {currentUser}=useSelector(state =>state.user)

  return (
   <header className='bg-slate-200 shadow-md'>
    {/* <div className='flex justify-between items-center max-w-6l mx-auto p-3 ' > */}
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Raipur</span>
        <span className='text-slate-700'>Realtor</span>
      </h1>
      <form className='bg-slate-100 p-1 flex  items-center rounded-lg '>
      <input type='text' placeholder='Search...'
      //  sm: code.. if for small scxreen devices  
      className='bg-transparent focus:outline-none w-30 sm:w-64'/>
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
        <Link to='/profile'>
        {currentUser?(<img className='rounded-full h-7 w-7 object-cover ' src={currentUser.avatar} alt='profile' />):(<li className='sm:inline text-slate-700 hover:underline'>
        SignIn
        </li>)}

        
        </Link>
  
      </ul>
    </div>
   </header>
  )
}
