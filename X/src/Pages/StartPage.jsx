import React from 'react'
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// reminder for me 
// mockapi account 
// email: xtuta@gmail.com
// passowrd: 123456a

function StartPage() {

    const navigate = useNavigate()
    const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged'))

    if (isLogged) {
        navigate('/Home')
    } 
    // else {
    //     navigate('/Home')
    // }

  return (
    <>
    <div>
        <div className='max-sm:flex-col max-md:flex-col md:flex-col lg:grid lg:grid-cols-12 h-screen'>
            <div className='lg:col-span-6 lg:flex lg:justify-center lg:items-center border'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-twitter-x max-sm:w-20 max-md:w-20 md:w-20 lg:w-80" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                </svg>
            </div>

            <div className='lg:col-span-6 lg:flex-col lg:flex h-full lg:justify-center lg:items-center border text-white'>
                <div className='max-sm:text-4xl max-md:text-6xl md:text-6xl lg:text-7xl font-bold' >Happening now</div>
                <div className=''>Join today.</div>

                {/* sign ups only for view :3 */}
                <div class="flex-col flex items-center justify-center">
                <button class="px-9 rounded-3xl py-2 border flex gap-2 border-slate-200 dark:border-slate-700  hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 bg-white text-black dark:hover:text-slate-300 hover:shadow transition duration-150">
                    <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                    <span>Sign up with Google</span>
                </button>
            
                <button class="px-9 rounded-3xl py-2 border flex gap-2 border-slate-200 dark:border-slate-700  hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 bg-white text-black dark:hover:text-slate-300 hover:shadow transition duration-150">
                    <img class="w-6 h-6" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.pngs" loading="lazy" alt="google logo"/>
                    <span className='font-bold'>Sign up with Apple</span>
                </button>

                <div className='flex justify-center items-center gap-1'>
                    <div className='bg-slate-800 rounded-full h-1 w-40'></div>
                    <div>or</div>
                    <div className='bg-slate-800 rounded-full h-1 w-40'></div>
                </div>

                {/* popups now  */}
                <div className='flex flex-col items-center justify-center bg-black border-black'>
            {/* <h4>Popup - GeeksforGeeks</h4> */}
            <Popup trigger=
                {<button class="px-16 rounded-3xl py-2 border flex gap-2 border-slate-200 dark:border-slate-700  hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 bg-sky-300 text-black dark:hover:text-slate-300 hover:shadow transition duration-150">
                
                <span className='font-bold'>Create account</span>
            </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal bg-black border-black flex-col flex justify-center items-center'>
                            <div className='content text-white text-3xl p-5'>
                                Create your account
                            </div>
                            <div className='flex-col flex gap-5'>

                            <input 
                                type="text" 
                                name='username'
                                // value={}
                                placeholder='Username'
                                className='bg-black border py-3 px-8 text-white rounded-lg'
                                />

                            <input 
                                type="email" 
                                name='email'
                                // value={}
                                placeholder='Email'
                                className='bg-black border py-3 px-8 text-white rounded-lg'
                                />

                            <input 
                                type="password" 
                                name='password'
                                // value={}
                                placeholder='Password'
                                className='bg-black border py-3 px-8 text-white rounded-lg'
                                />

                            </div>

                            <div className='mt-10'>
                            <button 
                                    class="px-40 rounded-3xl py-2 border flex gap-2 border-slate-200 dark:border-slate-700  hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 bg-sky-300 text-black dark:hover:text-slate-300 hover:shadow transition duration-150">
                                                            
                                    <span className='font-bold'>Create account</span>
                                </button>
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
            <p className='text-xs'>By signing up, you agree to the Terms of Service and Privacy<br/> Policy, including Cookie Use.</p>
        </div>
            </div>
                
            <p className='text-white mt-10'>Already have an account?</p>

            <div className='flex flex-col items-center justify-center'>
            {/* <h4>Popup - GeeksforGeeks</h4> */}
            <Popup trigger=
                {<button class="px-24 rounded-3xl py-2 border flex gap-2 border-slate-200 dark:border-slate-700  hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 bg-black text-blue-300 dark:hover:text-slate-300 hover:shadow transition duration-150">
                
                <span className='font-bold'>Sign in</span>
            </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='modal bg-black border-black flex-col flex justify-center items-center'>
                            <div className='content text-white text-3xl p-5'>
                                Create your account
                            </div>
                            <div className='flex-col flex gap-5'>

                            <input 
                                type="text" 
                                name='username'
                                // value={}
                                placeholder='Username'
                                className='bg-black border py-3 px-8 text-white rounded-lg'
                                />

                            <input 
                                type="email" 
                                name='email'
                                // value={}
                                placeholder='Email'
                                className='bg-black border py-3 px-8 text-white rounded-lg'
                                />

{/* <input 
                                type="password" 
                                name='password'
                                // value={}
                                placeholder='Password'
                                className='bg-black border py-3 px-8 text-white rounded-lg'
                                /> */}

                            </div>

                            <div className='mt-10'>
                            <button 
                                    class="px-40 rounded-3xl py-2 border flex gap-2 border-slate-200 dark:border-slate-700  hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 bg-sky-300 text-black dark:hover:text-slate-300 hover:shadow transition duration-150">
                                                            
                                    <span className='font-bold'>Sign in</span>
                                </button>
                            </div>
                            {/* <div> */}
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
            
        </div>
            </div>
            
        </div>
        <div>

        </div>
    </div>
    </>
  )
}

export default StartPage