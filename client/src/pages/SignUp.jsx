import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7 '>Sign Up</h1>
    <form className='flex flex-col gap-4 '>
      <input className='border p-3 rounded-lg' type='text' id='username' placeholder='username'/>
      <input className='border p-3 rounded-lg' type='email' id='email'placeholder='email'/>
      <input className='border p-3 rounded-lg' type='password' id='password'placeholder='password'/>
      <button className='border p-3 bg-slate-700 text-white rounded-lg hover:opacity-80 disabled:opacity-50'  id='button'>SIGN-UP</button>
    </form>
    <div className="flex gap-2 mt-5">
      <p>Have an account?</p>
      <Link to={'/sign-in'}>
        <span className='text-blue-700'>sign-in</span>
      </Link>
    </div>
    </div>
    )
}
