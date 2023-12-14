import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignIn() {

    const navigate = useNavigate()
    const [errorMes, setErrorMes] = React.useState('')
    // const [data, setData] = React.useState([])
    const [err, setErr] = React.useState(false)
    const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged'))

    // if (isLogged) {
    //     navigate('/Home')
    // } 

    // else {
    //     navigate('/Home')
    // }

    const [inputs, setInputs] = React.useState({
        username: '',
        password: '',
        
      });
    
      const addInputs = (event)=>{
        setInputs({...inputs,
            [event.target.name]: event.target.value
        })
    }
    
    const Sign_in = ()=>{
    
      if (!inputs.username) {
        setErrorMes('Please enter your Username');
        setErr(true)
        return;
      }
    
      if (!inputs.password) {
        setErrorMes('please enter your Password');
        setErr(true)
        return;
      }
    
    
        axios.get('https://65796afff08799dc8046e2ef.mockapi.io/users', {})
        .then((response)=>{
            // console.log(response.data);
            const result = response.data.find((item)=>item.username===inputs.username && item.password === inputs.password)

            // console.log(result);

            if (result) {
                console.log("logged in");
                localStorage.setItem('user',JSON.stringify(result))
                localStorage.setItem('isLogged', true)
                navigate('/Home')
            } else {
                setErrorMes('Username or Password is wrong!');
                setErr(true)
            }
            
    
        })
        .catch(err=>
            {console.log(err)
            setErrorMes('something went wrong! try again later.');
            setErr(true)})
    }


  return (
    <>
        <div className='max-sm:flex-col max-md:flex-col md:flex-col lg:grid lg:grid-cols-12 h-screen'>
            <div className='lg:col-span-6 lg:flex lg:justify-center lg:items-center max-sm:p-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-twitter-x max-sm:w-20 max-md:w-20 md:w-20 lg:w-80" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                </svg>
            </div>

            <div className='lg:col-span-6 lg:flex-col lg:flex lg:justify-center lg:items-center text-white max-sm:mt-10'>
            <div className='bg-black border-black flex-col flex justify-center items-center'>
                           <div className='text-white text-3xl p-5'>
                               Sign in
                           </div>

                           {err ? (<div className="flex justify-center bg-red-100 border 
                           text-sm border-red-400 text-red-700 px-8 py-3 my-3 rounded"
                               role="alert">
                               <span className="block sm:inline pl-2">
                                   <strong className="font-bold">{errorMes}</strong>
                               </span>
                               </div> )
                               : ''}

                           <div className='flex-col flex gap-5 justify-center items-center'>

                           <input 
                               type="text" 
                               name='username'
                               value={inputs.username}
                               onChange={addInputs}
                               placeholder='Username'
                               className='bg-black border py-3 px-8 text-white rounded-lg'
                               />

                           <input 
                               type="password" 
                               name='password'
                               value={inputs.password}
                               onChange={addInputs}
                               placeholder='Password'
                               className='bg-black border py-3 px-8 text-white rounded-lg'
                               />

                           </div>

                           <div className='mt-10'>
                           <button 
                                   class="px-16 rounded-3xl py-2 border flex gap-2 
                                   hover:text-slate-300 bg-[rgb(29,155,240)] text-white
                                  dark:hover:text-slate-300 hover:shadow transition 
                                    duration-150 border-none"
                                   onClick={Sign_in}
                                   >                       
                                   <span className='font-bold'>Sign in</span>
                               </button>
                           </div>
                           
                       </div>
            </div>
          </div>
    </>
  )
}

export default SignIn