import React from 'react'
import NavBar from '../Components/NavBar'
import Ads from '../Components/Ads'

function Profile() {

    const user = localStorage.getItem('user')
    const userData = JSON.parse(user)
    const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged'))
    
  return (
    <>
        <div className='max-sm:flex md:grid max-md:grid lg:grid lg:grid-cols-12'>
            {/* menu  */}
            
             <div className='max-sm: md:flex max-md:flex lg:flex md:flex-col max-md:flex-col 
             lg:flex-col border lg:col-span-3
             lg:h-screen lg:px-28'>
                <NavBar/>

            </div>


            {/* main  */}
            <div className='max-sm: md:flex max-md:flex lg:flex md:flex-col 
            max-md:flex-col lg:flex-col border lg:col-span-5
            lg:h-screen lg:p-20'>

            </div>


            {/* ads  */}
            <div className='max-sm: md:flex max-md:flex lg:flex md:flex-col max-md:flex-col 
            lg:flex-col border lg:col-span-4
            lg:h-screen p-5'>
                <Ads/>
            </div>
        </div>
    </>
  )
}

export default Profile