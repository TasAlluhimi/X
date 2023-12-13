import React from 'react'
import { Routes, Route as R } from 'react-router-dom'
import Home from '../Pages/Home'
import StartPage from '../Pages/StartPage'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import Profile from '../Pages/Profile'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<StartPage/>}></R>
            <R path='/Home' element={<Home/>}></R>
            <R path='/SignUp' element={<SignUp/>}></R>
            <R path='/SignIn' element={<SignIn/>}></R>
            <R path='/Profile' element={<Profile/>}></R>
        </Routes>
    </>
  )
}

export default Route