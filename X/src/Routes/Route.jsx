import React from 'react'
import { Routes, Route as R } from 'react-router-dom'
import Home from '../Pages/Home'
import StartPage from '../Pages/StartPage'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<StartPage/>}></R>
            <R path='/Home' element={<Home/>}></R>
        </Routes>
    </>
  )
}

export default Route