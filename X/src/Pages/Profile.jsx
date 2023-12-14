import React from 'react'
import NavBar from '../Components/NavBar'
import Ads from '../Components/Ads'
import dl from '../assets/del.svg'
import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom'

// another api reminder 
// email: tutaxx@gmail.com
// pass: 123456a 

function Profile() {

    const user = localStorage.getItem('user')
    const userData = JSON.parse(user)
    const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged'))
    const [tweet, setTweet] = React.useState('')
const [tweets, setTweets] = React.useState([])
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
            const t = res.data.filter((item)=>
            item.userId === userData.id)
            console.log(t);
            setTweets(t);
        })
    }

    const del = (id)=>{
        axios.delete(`https://65796afff08799dc8046e2ef.mockapi.io/tweets/${id}`)
        .then(res=>{
            console.log(res.data);
            console.log('deleted hehe');
        })
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

    React.useEffect(()=>{
        getData()
    }, [])

  return (
    <>
        <div className='max-sm:flex md:grid max-md:grid lg:grid lg:grid-cols-12'>
            {/* menu  */}
            
             <div className='max-sm: md:flex max-md:flex lg:flex md:flex-col max-md:flex-col 
             lg:flex-col lg:col-span-3
             lg:h-screen lg:px-28'>
                <NavBar/>

            </div>


            {/* main  */}
            <div className='max-sm: md:flex max-md:flex lg:flex md:flex-col 
            max-md:flex-col lg:flex-col lg:col-span-5
            lg:h-screen w-full border-l-2'>

<div
    class="w-[41.5vw] bg-black shadow-xl rounded-lg text-gray-900">
    <div class="rounded-t-lg h-32 overflow-hidden">
        <img class="object-cover object-top w-full" 
        src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" 
        src='https://cdn.discordapp.com/attachments/1118278449967149078/1184772567987400714/IMG_0389.png?ex=658d3070&is=657abb70&hm=9223350ce66b359d352b63737a32ff6040f0743094ec58157d4575706ec15a79&' alt='user'/>
    </div>
    <div class="text-center mt-2">
        <h2 class="font-semibold text-white">{userData.username}</h2>
        <p class="text-gray-500">@{userData.username}</p>
    </div>
    <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li class="flex flex-col items-center justify-around">
            <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <div>2k</div>
        </li>
        <li class="flex flex-col items-center justify-between">
            <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
            </svg>
            <div>10k</div>
        </li>
        <li class="flex flex-col items-center justify-around">
            <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            <div>15</div>
        </li>
    </ul>
    <div class="p-4 border-t mx-8 mt-2">
        <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Edit profile</button>
    </div>
</div>
<hr />
<div className='text-white'>
    

<ul class="flex text-sm font-medium text-center w-full 
text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="me-10 ml-7">
        <a href="#" aria-current="page" class="inline-block p-4 text-blue-600 hover:bg-gray-900 
        rounded-t-lg active dark:text-blue-500">Profile</a>
    </li>
    <li class="me-10">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 
        hover:bg-gray-900 dark:hover:text-gray-300">Replies</a>
    </li>
    <li class="me-10">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600
        hover:bg-gray-900 dark:hover:text-gray-300">Hielights</a>
    </li>
    <li class="me-10">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-900 
         dark:hover:text-gray-300">Media</a>
    </li>
    <li>
        <Link to="/Likes" class="inline-block p-4 rounded-t-lg hover:text-gray-600 
        hover:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-300">Likes</Link>
    </li>
</ul>

</div>

{/* tweets here  */}
<div className='flex flex-col'>
            {[...tweets].reverse().map((item)=>(
    <div 
                key={item.id}
                className='border'>
            <div className='p-3 flex justify-between'>
                <div className='flex gap-3 justify-start items-start'>
                        <img src="https://cdn.discordapp.com/attachments/1118278449967149078/1184772567987400714/IMG_0389.png?ex=658d3070&is=657abb70&hm=9223350ce66b359d352b63737a32ff6040f0743094ec58157d4575706ec15a79&"
                        alt="" 
                        className='rounded-full w-10'
                        />

                    <div className='flex justify-center items-center gap-3'>
                        <div className='text-white'>{item.username}</div>
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
                
                <button className='text-red-500 font-bold flex'>
                    <img 
                    onClick={()=>{del(item.id)}}
                    className='w-6'
                    src={dl} alt="delete icon" />
                    Delete
                </button>
            </Popup>
        </div>
                    
            </div>

                    <div className='ml-16 mr-3 flex text-white'>
                        {item.tweet}
                    </div>

                    <div className='ml-12 p-5'>
                       
                        <div className='flex gap-28 py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" 
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
            lg:flex-col border-l-2 lg:col-span-4
            lg:h-screen p-5'>
                <Ads/>
            </div>
        </div>
    </>
  )
}

export default Profile