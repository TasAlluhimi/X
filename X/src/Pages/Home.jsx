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

    const Like = (item)=>{
        axios.post(`https://657ab4661acd268f9afba392.mockapi.io/likes`, {
                    username: item.username,
                    tweet: item.tweet,
                    userId: userData.id
                })
                .then(
                    console.log('like')
                )
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
             lg:flex-col lg:col-span-3
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
            <img src="https://cdn.discordapp.com/attachments/1118278449967149078/1184772567987400714/IMG_0389.png?ex=658d3070&is=657abb70&hm=9223350ce66b359d352b63737a32ff6040f0743094ec58157d4575706ec15a79&"
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
        <div className='flex gap-5'>
                    <img className='w-5 h-5' src="https://cdn0.iconfinder.com/data/icons/thin-line-color-2/21/23-512.png" alt="" srcset="" />
                    <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/5362/5362497.png" alt="" />
                    <img className='w-5 h-5' src="https://cdn3.iconfinder.com/data/icons/business-and-finace-icons/512/Chart.png" alt="" srcset="" />
                    <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/3337/3337247.png" alt="" />
                </div>
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
                        <img src={userData.id == '4'? 'https://cdn.discordapp.com/attachments/1118278449967149078/1184772567987400714/IMG_0389.png?ex=658d3070&is=657abb70&hm=9223350ce66b359d352b63737a32ff6040f0743094ec58157d4575706ec15a79&' : "https://s3.amazonaws.com/kd4/rickie"}
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

                    <div className='ml-16 mr-3 flex'>
                        {item.tweet}
                    </div>

                    <div className='ml-12 p-5'>
                       
                        <div className='flex gap-28 py-1'>
                        <svg xmlns={" http://www.w3.org/2000/svg"} fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        w-4" viewBox="0 0 24 24">
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        w-4" viewBox="0 0 24 24">
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
                        </svg>

                        <svg onClick={()=>{Like(item)}} xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        w-4" viewBox="0 0 24 24">
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e
                        w-4" viewBox="0 0 24 24">
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"/>
                        </svg>
                </div>
                    </div>
    </div>
            ))}

        </div>

    </div>


            {/* ads  */}
            <div className='max-sm: md:flex max-md:flex lg:flex md:flex-col max-md:flex-col 
            lg:flex-col lg:col-span-4
            lg:h-screen p-5'>
                <Ads/>
            </div>
        </div>
    </>
  )
}

export default Home