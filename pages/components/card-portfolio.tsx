import React from 'react'
import Link from "next/link"


export default function Card() {
    return (
        <div className='w-full xl:pl-60 pt-28'>
            <h1 className='text-4xl font-bold text-skin-'>Cards</h1>
            <p className='my-4 text-skin-lht'>Cards are the container which hold or group many element to one place.</p>

            <div className='md:h-96 mx-10 md:w-3/4 md:bg-transparent bg-cl-blue-dark xl:w-[1000px] m-auto p-2 rounded-2xl'>
                <div className='h-96 w-full md:w-[500px] rounded-[40px] overflow-hidden'>
                    <img className='min-h-full'
                        src="https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_960_720.jpg" alt="Tumbnail Image" />

                </div>
                <div className='md:float-right w-full md:p-0 md:w-[600px] md:relative md:bottom-96 text-white'>
                    <h3 className='text-3xl sm:text-4xl md:float-right md:relative md:top-5 m-5 md:m-0 md:right-24 text-w md:text-cl-blue-dark'>TailUI</h3>
                    <div className='md:mt-16 lg:mt-8 py-5 md:float-right px-5 md:px-16 w-full md:w-3/4 lg:w-auto md:relative left-20 lg:left-0 bg-cl-blue-dark md:rounded-tr-[100px] md:rounded-bl-[100px]'>
                        <p className='text-cl-secondary text-base sm:text-xl md:text-base'>TailUI is a Tailwind components library, It has 50+ components and many blocks available.TailUI is a Tailwind components library, It has 50+ components and many blocks available.TailUI is a Tailwind components library, It has 50+ components and many blocks available.TailUI is a Tailwind components library, It has 50+ components and many blocks available.</p>
                    </div>
                    <div className='flex md:float-right mt-2 mx-5  md:text-cl-blue-dark '>
                    <Link href={"#"}><button className='mx-5'>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor">
                            <path fill-rule="evenodd" d="M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,9.08899 7.69202,9.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z" />
                        </svg>
                    </button></Link>
                    <Link href={"#"}><button className='mx-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="35" height="35" fill="currentColor">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                    
                    </button></Link>

                        
                    </div>
                </div>
            </div>


        </div>
    )
}
