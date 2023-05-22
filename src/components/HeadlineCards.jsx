import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 capitalize'>Sun's Out, BOGO's Out</p>
                <p className='px-2 capitalize'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 px-4 py-1 rounded-full absolute bottom-4 hover:text-white hover:bg-orange-600 duration-100 ease-in'>Order Now</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80" alt="/" />
        </div>
        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 capitalize'>New Restaurants</p>
                <p className='px-2 capitalize'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 px-4 py-1 rounded-full absolute bottom-4 hover:text-white hover:bg-orange-600 duration-100 ease-in'>Order Now</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="/" />
        </div>
        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 capitalize'>We deliver desserts too</p>
                <p className='px-2 capitalize'>Tasty treats</p>
                <button className='border-white bg-white text-black mx-2 px-4 py-1 rounded-full absolute bottom-4 hover:text-white hover:bg-orange-600 duration-100 ease-in'>Order Now</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards