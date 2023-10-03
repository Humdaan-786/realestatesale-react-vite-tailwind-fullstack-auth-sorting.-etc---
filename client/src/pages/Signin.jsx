import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'




export default function SignIn() {
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
      const res = await fetch('/api/auth/signin',{
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
      console.log(error.message)
    }
    setLoading(false);
    setError(null);
    navigate('/');
    
  } 

  // console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7 '>Sign In</h1>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <input className='border p-3 rounded-lg' onChange={handlechange} type='email' id='email'placeholder='email'/>
      <input className='border p-3 rounded-lg' onChange={handlechange} type='password' id='password'placeholder='password'/>
      <button className='border p-3 bg-slate-700 text-white rounded-lg hover:opacity-80 disabled:opacity-50'  disabled={loading} onClick={handlechange}  id='button'>SIGN-IN</button>
      {/* {loading ?'Loading':'Sign-Up'} */}
    </form>
    <div className="flex gap-2 mt-5">
      <p>Don't Have an account?</p>
      <Link to={'/sign-up'}>
        <span className='text-blue-700'>sign-up</span>
      </Link>
    </div>
    </div>
    )
}
