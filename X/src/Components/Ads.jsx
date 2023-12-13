import React from 'react'

function Ads() {
  return (
    <>
        <div className='felx flex-col justify-center items-start w-[80%]'>
            
<div>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only 
    ">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 
        bg-[rgb(32,35,39)] rounded-3xl focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 border-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search" />
        
    </div>
</div>

        <div className='text-white mt-5 bg-[rgb(22,24,28)] p-3 rounded-2xl'>
            <div className='text-xl font-bold'>Subscribe to Premium</div>
            <div>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</div>
            <button class="self-center md:px-3 lg:px-6 rounded-3xl py-1.5 mt-5 border flex gap-2 border-slate-200 
             dark:border-slate-700  hover:border-slate-400 dark:hover:border-slate-500 
             hover:text-slate-300 bg-[rgb(29,155,240)] text-white dark:hover:text-slate-300 hover:shadow 
             transition duration-150 border-none">
                        
                        <span className='font-bold'>Subscribe</span>
                                
                        </button>
        </div>

        <div className='text-white mt-5 bg-[rgb(22,24,28)] p-3 rounded-2xl flex flex-col gap-10'>
            <div className='text-xl'>What’s happening</div>
            <div>#JavaScript_Bootcamp.</div>
            <div>Best front-end developers.</div>
            <div>Tasneem Alluhimi.</div>
            <div>Overwatch is a bad game.</div>
            <div>#Cats.</div>
            <div>#meow.</div>
            
        </div>

        </div>
    </>
  )
}

export default Ads