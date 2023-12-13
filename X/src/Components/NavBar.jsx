import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function NavBar() {

    const user = localStorage.getItem('user')
    const userData = JSON.parse(user)
    const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged'))
    const navigate = useNavigate()
    const log_out = ()=>{
        localStorage.clear()
        navigate('/')
    }
  return (
    <>
        <div className='max-sm:flex text-white'>
            {/* menu  */}
            <div className='md:flex md:flex-col max-sm:w-screen max-md:flex max-md:flex-col lg:flex 
            lg:flex-col border flex flex-col max-sm:justify-center max-sm:items-center
            h-screen max-md:w-fit md:w-fit max-md:justify-center md:items-center'>
                <div>
                    <ul className='flex flex-col lg:gap-5 gap-3'>
                        <Link to='/Home'>
                        <li className='mt-2.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="bi bi-twitter-x max-sm:w-0 max-md:w-7 md:w-7 lg:w-7" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 
                        .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                        </svg>
                        </li>
                        </Link>
                        
                        <NavLink to='/Home'
                        style={({ isActive }) => ({
                            fontWeight: isActive
                                ? "bold"
                                : "",
                        })}>
                        <li className='flex gap-4 mt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        max-sm:w-0 max-md:w-7 md:w-7 lg:w-7" viewBox="0 0 24 24">
                        <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 
                        .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511
                         0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"/>
                        </svg>
                            <p className='text-lg md:invisible lg:visible'>Home</p>
                        </li>
                        </NavLink>
                        
                        <NavLink to='/'
                        style={({ isActive }) => ({
                            fontWeight: isActive
                                ? "bold"
                                : "",
                        })}>
                        <li className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        max-sm:w-0 max-md:w-7 md:w-7 lg:w-7" viewBox="0 0 24 24">
                        <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
                        </svg>
                            <p className='text-lg md:invisible lg:visible'>Explore</p>
                        </li>
                        </NavLink>

                        <NavLink to='/'
                        style={({ isActive }) => ({
                            fontWeight: isActive
                                ? "bold"
                                : "",
                        })}>
                        <li className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        max-sm:w-0 max-md:w-7 md:w-7 lg:w-7" viewBox="0 0 24 24">
                        <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"/>
                        </svg>
                            <p className='text-lg  md:invisible lg:visible'>Notifications</p>
                        </li>
                        </NavLink>

                        <NavLink to='/'
                        style={({ isActive }) => ({
                            fontWeight: isActive
                                ? "bold"
                                : "",
                        })}>
                        <li className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        max-sm:w-0 max-md:w-7 md:w-7 lg:w-7" viewBox="0 0 24 24">
                        <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"/>
                        </svg>
                            <p className='text-lg md:invisible lg:visible'>Messages</p>
                        </li>
                        </NavLink>

                        <NavLink to='/'
                        style={({ isActive }) => ({
                            fontWeight: isActive
                                ? "bold"
                                : "",
                        })}>
                        <li className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        max-sm:w-0 max-md:w-7 md:w-7 lg:w-7" viewBox="0 0 24 24">
                        <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"/>
                        </svg>
                            <p className='text-lg md:invisible lg:visible'>Lists</p>
                        </li>
                        </NavLink>

                        <NavLink to='/'
                        style={({ isActive }) => ({
                            fontWeight: isActive
                                ? "bold"
                                : "",
                        })}>
                        <li className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        max-sm:w-0 max-md:w-7 md:w-7 lg:w-7" viewBox="0 0 24 24">
                        <path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"/>
                        </svg>
                            <p className='text-lg md:invisible lg:visible'>Communities</p>
                        </li>
                        </NavLink>

                        <NavLink to='/'
                        style={({ isActive }) => ({
                            fontWeight: isActive
                                ? "bold"
                                : "",
                        })}>
                        <li className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        max-sm:w-0 max-md:w-7 md:w-7 lg:w-7" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                            <p className='text-lg md:invisible lg:visible'>Premium</p>
                        </li>
                        </NavLink>

                        <NavLink to='/Profile'
                        style={({ isActive }) => ({
                            fontWeight: isActive
                                ? "bold"
                                : "",
                        })}>
                        <li className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        max-sm:w-0 max-md:w-7 md:w-7 lg:w-7" viewBox="0 0 24 24">
                        <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"/>
                        </svg>
                            <p className='text-lg md:invisible lg:visible'>Profile</p>
                        </li>
                        </NavLink>

                        <NavLink to='/'
                        style={({ isActive }) => ({
                            fontWeight: isActive
                                ? "bold"
                                : "",
                        })}>
                        <li className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i 
                        r-lwhw9o r-cnnz9e max-sm:w-0 max-md:w-7 md:w-7 lg:w-7" viewBox="0 0 24 24">
                        <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"/>
                        </svg>
                            <p className='text-lg md:invisible lg:visible'>More</p>
                        </li>
                        </NavLink>


                        <li className='flex lg:justify-center max-sm:justify-center mt-2'>
                        <button class="self-center md:px-3 max-sm:px-6 lg:px-24 rounded-3xl py-3 flex gap-2 border-slate-200 
                        dark:border-slate-700  hover:border-slate-400 dark:hover:border-slate-500 
                        hover:text-slate-300 bg-[rgb(29,155,240)] text-white border-none dark:hover:text-slate-300 hover:shadow 
                        transition duration-150">
                
                        <span className='font-bold'>Post</span>
                        
                        </button>
                        </li>
                        
                    </ul>
                        {/* <img src="https://s3.amazonaws.com/kd4/rickie"
                        alt="" 
                        className='rounded-full w-12'
                        /> */}

                    <div className='lg:mt-20 mt-5'>
                        <Popup trigger=
                            {<button onClick={log_out}>
                            <div className='flex justify-start items-end gap-3'>
                                    <img src="https://s3.amazonaws.com/kd4/rickie"
                                    alt="" 
                                    className='rounded-full w-12'
                                    />
                                <div className='text-left'>
                        
                                    <div className='font-bold'>{userData.username}</div>
                                    <div className='text-gray-500 text-sm'>{userData.username}</div>
                                </div>
                                    
                            </div>
                            </button>}
                            position="top center"
                            shadingColor="rgba(0, 0, 0, 0.2)"
                            
                            >

                            <div className='bg-black text-white py-7 rounded-lg border 
                            border-black'>
                            <div>Add an existing account</div>
                            <button className='mt-3'>Log Out @{userData.username}</button>
                            </div>                                                                
                            
                        </Popup>

                    </div>
                </div>
                
            </div>


            {/* main  */}
            {/* <div></div> */}


            {/* ads  */}
            {/* <div></div> */}

        </div>
    </>
  )
}

export default NavBar