import React from 'react'

export default function nav() {
  return (
    <div className="py-3 px-20 w-screen flex justify-between fixed  z-20 bg-white/5 backdrop-blur-md">
          <div className='flex'>
            <div className="h-10 w-32 flex">
                <img src="/assets/icon.png" alt="Logo" className="object-contain h-8 w-h-8"/>
                <span className="text-xl ml-3 relative top-1">Tailui</span>
            </div>
            <div className='flex bg-cl-secondary rounded-full'>
                <input 
                    type="text" name="username" id="usernamer" placeholder="components" 
                    className="bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-l-full py-0 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent "
                />
                <button className="px-6 py-0 bg-cl-blue text-white text-base rounded-full">Search</button>
            </div>

          </div>
            <div className="flex py-1 w-max text-skin-light px-2 text-lg font-medium">
            <button className="py-1 px-6  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1">Home</button>
            <button className="py-1 px-6  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1">Documentations</button>
            <button className="py-1 px-6  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1">Github</button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30" fill='currentColor'><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/></svg>
            </div>
        </div>
  )
}
