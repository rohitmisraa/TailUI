

export default function Inputs() {
  return (
    <div className="p-10">
        {/* ---Default Input--- */}
        <h1 className="text-xl my-5">Input fields</h1>
        <input 
            type="text" name="username" id="usernamer" placeholder="Username" 
            className="appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent "
            />
        {/* ---Default Input--- */}

        {/* ---Default Input--- */}
        <h1 className="text-xl my-5">Rounded Input fields</h1>
        <input 
            type="text" name="username" id="usernamer" placeholder="Username" 
            className="appearance-none border-2 border-gray-300 rounded-full py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent "
            />
        {/* ---Default Input--- */}

        {/* ---Default Input--- */}
        <h1 className="text-xl my-5">Un-Rounded Input fields</h1>
        <input 
            type="text" name="username" id="usernamer" placeholder="Username" 
            className="appearance-none border-2 border-gray-300 py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-green focus:border-transparent "
            />
        {/* ---Default Input--- */}

        <h1 className="text-xl my-5">For darker fields</h1>
        {/* ---Default Input--- */}
        <h1 className="text-xl my-5">Input fields</h1>
        <input 
            type="text" name="username" id="usernamer" placeholder="Username" 
            className="bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent "
            />
        {/* ---Default Input--- */}

        {/* ---Default Input--- */}
        <h1 className="text-xl my-5">Rounded Input fields</h1>
        <input 
            type="text" name="username" id="usernamer" placeholder="Username" 
            className="bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-full py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent "
            />
        
        {/* ---Default Input--- */}

        {/* ---Default Input--- */}
        <h1 className="text-xl my-5">Un-Rounded Input fields</h1>
        <input 
            type="text" name="username" id="usernamer" placeholder="Username" 
            className="bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-green focus:border-transparent "
            />
        
        {/* ---Default Input--- */}

        {/* ---Input Cards--- */}
        <h1 className="text-xl my-5">Input Cards</h1>
        <h1 className="text-base my-5">Username</h1>
        <div className="grid w-96 shadow-lg py-10 px-4 border-[1px] border-gray-300 rounded-md">
            <span>Username</span>
            <input 
                type="text" name="username" id="username" placeholder="enter your username" 
                className="appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent "
                />
        </div>


        {/* ---Input Cards--- */}

        {/* ---Input Cards--- */}
        <h1 className="text-xl my-5">Input Cards</h1>
        <h1 className="text-base my-5">Password</h1>
        <div className="grid w-96 shadow-lg py-10 px-4 border-[1px] border-gray-300 rounded-md">
            <span>Password</span>
            <input 
                type="password" name="password" id="password" placeholder="enter your password" 
                className="appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent "
                />
        </div>


        {/* ---Input Cards--- */}
    </div>
  )
}
