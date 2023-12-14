import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
       <section class="flex items-center justify-center h-screen p-16">
    <div class="container flex flex-col items-center ">
        <div class="flex flex-col gap-6 max-w-md text-center">
            <h2 class="font-extrabold text-9xl text-white">
                <span class="sr-only">Error</span>404
            </h2>
            <p class="text-2xl md:text-3xl text-white">Sorry, we couldn't find this page.</p>
            <Link to="/" class="px-8 py-4 text-xl font-semibold bg-[rgb(29,155,240)] hover:text-gray-400 rounded-3xl text-white">Back to homepage</Link>
        </div>
    </div>
</section>
    </>
  )
}

export default Error