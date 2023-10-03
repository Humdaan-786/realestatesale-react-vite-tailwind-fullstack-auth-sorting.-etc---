import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'




export default function SignUp() {
  const [formData,setFormData]=useState({});

  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(null);
  
  const navigate = useNavigate();

  const handlechange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
  }


const handleSubmit = async (e)=>
{
      e.preventDefault();
      try {
      setLoading(true);
      const res = await fetch('/api/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData),
  
      })
      const data= await res.json();
      console.log(data);
      if(data.success===false)
      { 
        setLoading(false);
        setError(data.message);
        return;
      }
      
    }
    catch (error) {
      console.log(err.message)
    }
    setLoading(false);
    setError(null);
    navigate('/sign-in');
    
  } 

  // console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7 '>Sign Up</h1>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <input className='border p-3 rounded-lg' onChange={handlechange} type='text' id='username' placeholder='username'/>
      <input className='border p-3 rounded-lg' onChange={handlechange} type='email' id='email'placeholder='email'/>
      <input className='border p-3 rounded-lg' onChange={handlechange} type='password' id='password'placeholder='password'/>
      <button className='border p-3 bg-slate-700 text-white rounded-lg hover:opacity-80 disabled:opacity-50'  disabled={loading} onChange={handlechange}  id='button'>SIGN-UP</button>
      {loading ?'Loading':'Sign-Up'}
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
