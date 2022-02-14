




export default function Buttongroups() {
  return (
    <div className="p-10">
        <h1 className="text-2xl">Button Groups</h1>

        {/* ---Default Buttons--- */}
        <h2 className="text-base">Button Groups</h2>
        <div className="flex rounded-lg bg-cl-blue py-1 w-max my-10">
            <button className="py-1 px-6 text-white rounded-lg">Button 1</button>
            <button className="py-1 px-6 text-white rounded-lg">Button 2</button>
            <button className="py-1 px-6 text-white rounded-lg">Button 3</button>
        </div>
        {/* ---Default Buttons--- */}


        {/* ---Default Buttons--- */}
        <h2 className="text-base">Secondary Button Groups</h2>
        <div className="flex rounded-lg bg-white py-1 w-max my-10">
            <button className="py-1 px-6 text-cl-blue-dark font-semibold rounded-l-lg border-2 border-cl-blue-dark">Button 1</button>
            <button className="py-1 px-6 text-cl-blue-dark font-semibold border-2 border-cl-blue-dark">Button 2</button>
            <button className="py-1 px-6 text-cl-blue-dark font-semibold rounded-r-lg border-2 border-cl-blue-dark">Button 3</button>
        </div>


        {/* ---Default Buttons--- */}

        {/* ---Default Buttons--- */}
        <h2 className="text-base">No-border Button Groups</h2>
        <div className="flex rounded-lg bg-cl-secondary w-max py-1 my-10">
            <button className="py-1 px-6 text-cl-blue-dark font-semibold rounded-lg">Button 1</button>
            <button className="py-1 px-6 text-cl-blue-dark font-semibold rounded-lg">Button 2</button>
            <button className="py-1 px-6 text-cl-blue-dark font-semibold rounded-lg">Button 3</button>
        </div>


        {/* ---Default Buttons--- */}

        {/* ---Default Buttons--- */}
        <h2 className="text-base">Rouded Button Groups</h2>
        <div className="flex rounded-full bg-cl-blue py-1 w-max my-10">
            <button className="py-1 px-6 text-white rounded-lg">Button 1</button>
            <button className="py-1 px-6 text-white rounded-lg">Button 2</button>
            <button className="py-1 px-6 text-white rounded-lg">Button 3</button>
        </div>
        {/* ---Default Buttons--- */}

        {/* ---Default Buttons--- */}
        <h2 className="text-base">Un-Rounded Button Groups</h2>
        <div className="flex bg-cl-blue py-1 w-max my-10">
            <button className="py-1 px-6 text-white rounded-lg">Button 1</button>
            <button className="py-1 px-6 text-white rounded-lg">Button 2</button>
            <button className="py-1 px-6 text-white rounded-lg">Button 3</button>
        </div>
        {/* ---Default Buttons--- */}

        <h1 className="text-2xl">Gradient Button Groups</h1>

        {/* ---Default Buttons--- */}
        <h2 className="text-base">Default Button Groups</h2>
        <div className="flex bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 rounded-lg py-1 w-max my-10">
            <button className="py-1 px-6 text-white rounded-lg  hover:bg-blue-600">Button 1</button>
            <button className="py-1 px-6 text-white rounded-lg  hover:bg-blue-600">Button 2</button>
            <button className="py-1 px-6 text-white rounded-lg  hover:bg-blue-600">Button 3</button>
        </div>
        {/* ---Default Buttons--- */}

        {/* ---Default Buttons--- */}
        <h2 className="text-base">Rounded Button Groups</h2>
        <div className="flex bg-gradient-to-r from-gr_orange-1 to-gr_orange-2 rounded-full py-1 w-max my-10 px-2">
            <button className="py-1 px-6 text-white rounded-lg  hover:bg-orange-600">Button 1</button>
            <button className="py-1 px-6 text-white rounded-lg  hover:bg-orange-600">Button 2</button>
            <button className="py-1 px-6 text-white rounded-lg  hover:bg-orange-600">Button 3</button>
        </div>
        {/* ---Default Buttons--- */}

        {/* ---Default Buttons--- */}
        <h2 className="text-base">Un-Rounded Button Groups</h2>
        <div className="flex bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 py-1 w-max my-10 px-2">
            <button className="py-1 px-6 text-white  hover:bg-violet-600">Button 1</button>
            <button className="py-1 px-6 text-white  hover:bg-violet-600">Button 2</button>
            <button className="py-1 px-6 text-white  hover:bg-violet-600">Button 3</button>
        </div>
        {/* ---Default Buttons--- */}
        {/* ---Default Buttons--- */}
        <h2 className="text-base">Text only Button Groups</h2>
        <div className="flex py-1 w-max my-10 px-2">
            <button className="py-1 px-6 text-cl-blue  hover:bg-violet-600">Button 1</button>
            <button className="py-1 px-6 text-cl-blue  hover:bg-violet-600">Button 2</button>
            <button className="py-1 px-6 text-cl-blue  hover:bg-violet-600">Button 3</button>
        </div>
        {/* ---Default Buttons--- */}
        {/* ---Default Buttons--- */}
        <div className="flex justify-between">
            <h2 className="text-base">Verticles</h2>
            <div className="grid bg-gradient-to-r from-gr_orange-1 to-gr_orange-2 rounded-lg py-1 w-max my-10 px-2">
                <button className="py-1 px-6 text-white rounded-lg  hover:bg-orange-600">Button 1</button>
                <button className="py-1 px-6 text-white rounded-lg  hover:bg-orange-600">Button 2</button>
                <button className="py-1 px-6 text-white rounded-lg  hover:bg-orange-600">Button 3</button>
                <button className="py-1 px-6 text-white rounded-lg  hover:bg-orange-600">Button 4</button>
            </div>
            <div className="grid bg-gradient-to-r from-gr_cyan-1 to-gr_cyan-2 rounded-lg py-1 w-max my-10 px-2">
                <button className="py-1 px-6 text-white rounded-lg  hover:bg-cyan-600">Button 1</button>
                <button className="py-1 px-6 text-white rounded-lg  hover:bg-cyan-600">Button 2</button>
                <button className="py-1 px-6 text-white rounded-lg  hover:bg-cyan-600">Button 3</button>
                <button className="py-1 px-6 text-white rounded-lg  hover:bg-cyan-600">Button 4</button>
            </div>
        </div>
        <div className="flex justify-between">
            <h2 className="text-base">Verticles</h2>
            <div className="grid bg-white rounded-lg py-1 w-max my-10 px-2 shadow-lg">
                <button className="py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light">Button 1</button>
                <button className="py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light">Button 2</button>
                <button className="py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light">Button 3</button>
                <button className="py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light">Button 4</button>
            </div>
        </div>
        
        {/* ---Default Buttons--- */}




    </div>
  )
}
