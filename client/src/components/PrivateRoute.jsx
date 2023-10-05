import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
export default function PrivateRoute() {
    const {currentUser}=useSelector((state)=>state.user)
  return currentUser ? <Outlet/>:<Navigate to ='/sign-in'/>
}
