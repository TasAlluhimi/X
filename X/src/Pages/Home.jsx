import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Ads from '../Components/Ads'
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import del from '../assets/del.svg'


function Home() {

    const user = localStorage.getItem('user')
    const userData = JSON.parse(user)
    const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged'))
    const [tweet, setTweet] = React.useState('')
    const [tweets, setTweets] = React.useState([])

    // console.log(userData.id);
    const post = ()=>{
        if (isLogged) {
            if (tweet.trim() !== '') {
                axios.post(`https://65796afff08799dc8046e2ef.mockapi.io/tweets`, {
                    userId: userData.id,
                    username: userData.username,
                    tweet: tweet,
                })
                .then(
                    setTweet('')
                )
            }
        } else {
            navigate('/')
        }
        
    }

    const getData = ()=>{
        axios.get(`https://65796afff08799dc8046e2ef.mockapi.io/tweets`)
        .then(res=>{
            console.log(res.data);
            setTweets(res.data);
        })
    }

    // const del = (id)=>{

    // }

    React.useEffect(()=>{
        getData()
    }, [])

  return (
    <>
        <div className='max-sm:flex max-sm:flex-col md:grid max-md:grid lg:grid lg:grid-cols-12'>
            {/* menu  */}
            
             <div className='max-sm: md:flex max-md:flex lg:flex md:flex-col max-md:flex-col 
             lg:flex-col border lg:col-span-3
             lg:h-screen lg:px-28'>
                <NavBar/>

            </div>


            {/* main  */}
            <div className='max-sm: md:flex max-md:flex lg:flex md:flex-col 
            max-md:flex-col lg:flex-col border lg:col-span-5
            text-white'>
                <div className='flex text-center font-bold border-b-2 p-4'>
                    <div className='w-[45%]'>For your</div>
                    <div className='w-[45%]'>Following</div>
                    <div className='w-[10%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i 
                        r-lwhw9o r-cnnz9e max-sm:w-5 max-md:w-5 md:w-5 lg:w-5" viewBox="0 0 24 24">
                        <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"/>
                        </svg>
                    </div>
                </div>

                {/* tweet  */}

                <div className='border flex p-4'>
                    <div>
                    <div>   
    {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only 
    ">What is happening?!</label> */}
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <div>
            <img src="https://s3.amazonaws.com/kd4/rickie"
                    alt="" 
                    className='rounded-full w-12'
                                    />
            </div>
        </div>
    <input 
        type="text" 
        name='tweet'
        class="block w-full ps-10 text-sm text-white
        bg-black rounded-3xl focus:ring-blue-500 focus:border-blue-500 
        dark:placeholder-white border-none dark:focus:ring-blue-500 lg:px-52 lg:py-5 text-left dark:focus:border-blue-500" 
        placeholder="What is happening?!" 
        value={tweet}
        onChange={(event)=>{setTweet(event.target.value)}}
        />
        
    </div>
    <div className='p-5 flex justify-between items-center'>

        <div>
            {/* icons here  */}
        </div>
        <div>
            <button
            onClick={post}
            // disabled
            class="self-center md:px-3 max-sm:px-6 lg:px-5 rounded-3xl py-1.5 flex gap-2 border-slate-200 
                        dark:border-slate-700  hover:border-slate-400 dark:hover:border-slate-500 
                        hover:text-slate-300 bg-[rgb(29,155,240)] text-white border-none dark:hover:text-slate-300 hover:shadow 
                        transition duration-150">
                
                        <span className='font-bold'>Post</span>
                        
                        </button>
                       </div>
                    </div>

                    
                </div>
                
            </div>
            
        </div>
        
        {/* tweets here  */}
        <div className='flex flex-col'>
            {[...tweets].reverse().map((item)=>(
    <div 
                key={item.id}
                className='border'>
            <div className='p-3 flex justify-between'>
                <div className='flex gap-3 justify-start items-start'>
                        <img src="https://s3.amazonaws.com/kd4/rickie"
                        alt="" 
                        className='rounded-full w-10'
                        />

                    <div className='flex justify-center items-center gap-3'>
                        <div>{item.username}</div>
                        <div className='text-gray-400 text-xs'>@{item.username}</div>
                    </div>

                </div>
                    
                    <div>
            
            <Popup trigger=
                {<svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i 
                r-lwhw9o r-cnnz9e max-sm:w-0 max-md:w-7 md:w-7 lg:w-7" viewBox="0 0 24 24">
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                </svg>}
                position="top center">
                
                <button className='font-bold flex'>
                    Block
                </button>
            </Popup>
        </div>
                    
            </div>

                    <div className='bg-slate-600 ml-16 mr-3 flex'>
                        {item.tweet}
                    </div>

                    <div className=''>
                        h
                    </div>
    </div>
            ))}

        </div>

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

export default Home