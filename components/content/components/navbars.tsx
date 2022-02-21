import React, { useState } from 'react'
import SVG from "../../../svg"

export default function Navbars() {
    const [code1, setcode1] = useState(false)
    const [code2, setcode2] = useState(false)
    const [code3, setcode3] = useState(false)
    const [code4, setcode4] = useState(false)
    const [code5, setcode5] = useState(false)
    const [code6, setcode6] = useState(false)

    function codeshow1() {
        if (code1) {
            setcode1(false)
        } else {
            setcode1(true)

        }
    }
    function codeshow2() {
        if (code2) {
            setcode2(false)
        } else {
            setcode2(true)

        }
    }
    function codeshow3() {
        if (code3) {
            setcode3(false)
        } else {
            setcode3(true)

        }
    }
    function codeshow4() {
        if (code4) {
            setcode4(false)
        } else {
            setcode4(true)

        }
    }
    function codeshow5() {
        if (code5) {
            setcode5(false)
        } else {
            setcode5(true)

        }
    }
    function codeshow6() {
        if (code6) {
            setcode6(false)
        } else {
            setcode6(true)

        }
    }
    return (
        <div className="p-10 pb-40 font-Rubik">
            <h1 className='text-4xl font-bold text-skin-dark'>Navbars</h1>
            <p className='my-4 text-skin-light'>Navbars are the top of the container which have links and icons, and is used to perform some activies easily.</p>

            {/* ---component--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-8'>Simple Navbars</h2>
            <p className='my-7 text-skin-light'>Simple navbars with icon and some links.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
            <div className="py-3 px-20 w-full bg-gray-100 flex justify-between">
                <div className="h-10 w-32 flex">
                    <img src="/assets/tailui-icon.svg" alt="Logo" className="object-contain h-8 w-h-8" />
                    <span className="text-xl ml-3 relative top-1">Tailui</span>
                </div>
                <div className="flex py-1 w-max px-2 text-lg font-medium">
                    <button className="py-1 px-6 text-cl-black-carbon  hover:relative hover:bottom-2">Home</button>
                    <button className="py-1 px-6 text-cl-grey-dark  hover:relative hover:bottom-2">About</button>
                    <button className="py-1 px-6 text-cl-grey-dark hover:relative hover:bottom-2">Contact</button>
                </div>
            </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow1}>
                        {code1 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code1 ? '400px' : '0', display: code1 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5 overflow-auto'>
                    <pre className='px-5 block whitespace-pr'><code className='px-5 pb-5 h-max-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;py-3 px-20 w-screen bg-white flex justify-between&quot;&gt;<br />
                        &lt;div className=&quot;h-10 w-32 flex&quot;&gt;<br />
                        &lt;img src=&quot;/assets/tailui-icon.svg&quot; alt=&quot;Logo&quot; className=&quot;object-contain h-8 w-h-8&quot; /&gt;<br />
                        &lt;span className=&quot;text-xl ml-3 relative top-1&quot;&gt;<br />Tailui&lt;/span&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;div className=&quot;flex py-1 w-max px-2 text-lg font-medium&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-black-carbon  hover:relative hover:bottom-2&quot;&gt;<br />Home&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark  hover:relative hover:bottom-2&quot;&gt;<br />About&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark hover:relative hover:bottom-2&quot;&gt;<br />Contact&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>


            {/* ---component--- */}


            {/* ---component--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-8'>Simple navbars with icon</h2>
            <p className='my-8 text-skin-light'>Simple navbars with icon and some links.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
            <div className="py-3 px-20 w-full bg-gray-100 flex justify-between">
                <div className="h-10 w-32 flex">
                    <img src="/assets/tailui-icon.svg" alt="Logo" className="object-contain h-8 w-h-8" />
                    <span className="text-xl ml-3 relative top-1">Tailui</span>
                </div>
                <div className="flex py-1 w-max px-2 text-lg font-medium">
                    <button className="py-1 px-6 text-cl-black-carbon hover:relative hover:bottom-2">Home</button>
                    <button className="py-1 px-6 text-cl-grey-dark hover:relative hover:bottom-2">About</button>
                    <button className="py-1 px-6 text-cl-grey-dark hover:relative hover:bottom-2">Contact</button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30" fill="#061C3F"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" /></svg>
                </div>
            </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-5'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow2}>
                        {code2 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code2 ? '400px' : '0', display: code2 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5 overflow-auto'>
                    <pre className='px-5 block whitespace-pr'><code className='px-5 pb-5 h-max-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;py-3 px-20 w-screen bg-white flex justify-between&quot;&gt;<br />
                        &lt;div className=&quot;h-10 w-32 flex&quot;&gt;<br />
                        &lt;img src=&quot;/assets/tailui-icon.svg&quot; alt=&quot;Logo&quot; className=&quot;object-contain h-8 w-h-8&quot; /&gt;<br />
                        &lt;span className=&quot;text-xl ml-3 relative top-1&quot;&gt;<br />Tailui&lt;/span&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;div className=&quot;flex py-1 w-max px-2 text-lg font-medium&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-black-carbon hover:relative hover:bottom-2&quot;&gt;<br />Home&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark hover:relative hover:bottom-2&quot;&gt;<br />About&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark hover:relative hover:bottom-2&quot;&gt;<br />Contact&lt;/button&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 496 512&quot; width=&quot;30&quot; height=&quot;30&quot; fill=&quot;#061C3F&quot;&gt;<br />&lt;path d=&quot;M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z&quot; /&gt;<br />&lt;/svg&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>


            {/* ---component--- */}


            {/* ---component--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-8'>Simple navbars with icon and search</h2>
            <p className='my-8 text-skin-light'>Simple navbars with icon, search and some menus.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
            <div className="py-3 px-5 w-full bg-gray-100 flex justify-between">
                <div className='flex'>
                    <div className="h-10 w-32 flex">
                        <img src="/assets/tailui-icon.svg" alt="Logo" className="object-contain h-8 w-h-8" />
                        <span className="text-xl ml-3 relative top-1">Tailui</span>
                    </div>
                    <div className="flex py-1 w-max px-2 text-lg font-medium">
                        <button className="py-1 px-2 text-cl-black-carbon hover:relative hover:bottom-2">Home</button>
                        <button className="py-1 px-2 text-cl-grey-dark  hover:relative hover:bottom-2">About</button>
                        <button className="py-1 px-2 text-cl-grey-dark  hover:relative hover:bottom-2">Contact</button>
                    </div>
                </div>

                <div className="flex py-1 w-max px-2">

                    <div className='flex bg-cl-secondary rounded-full'>
                        <input
                            type="text" name="username" id="usernamer" placeholder="Username"
                            className="bg-cl-secondary placeholder:text-cl-grey-dark w-40 appearance-none border-2 border-gray-300 rounded-l-full py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent "
                        />
                        <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full">Search</button>
                    </div>
                    <div className='w-6'></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30" fill="#061C3F"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" /></svg>
                </div>
            </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow3}>
                        {code3 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code3 ? '400px' : '0', display: code3 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5 overflow-auto'>
                    <pre className='px-5 block whitespace-pr'><code className='px-5 pb-5 h-max-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;py-3 px-20 w-screen bg-white flex justify-between&quot;&gt;<br />
                        &lt;div className=&quot;flex&quot;&gt;<br />
                        &lt;div className=&quot;h-10 w-32 flex&quot;&gt;<br />
                        &lt;img src=&quot;/assets/tailui-icon.svg&quot; alt=&quot;Logo&quot; className=&quot;object-contain h-8 w-h-8&quot; /&gt;<br />
                        &lt;span className=&quot;text-xl ml-3 relative top-1&quot;&gt;<br />Tailui&lt;/span&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;div className=&quot;flex py-1 w-max px-2 text-lg font-medium&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-black-carbon hover:relative hover:bottom-2&quot;&gt;<br />Home&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark  hover:relative hover:bottom-2&quot;&gt;<br />About&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark  hover:relative hover:bottom-2&quot;&gt;<br />Contact&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                        &lt;div className=&quot;flex py-1 w-max px-2&quot;&gt;<br />

                        &lt;div className=&quot;flex bg-cl-secondary rounded-full&quot;&gt;<br />
                        &lt;input
                        type=&quot;text&quot; name=&quot;username&quot; id=&quot;usernamer&quot; placeholder=&quot;Username&quot;
                        className=&quot;bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-l-full py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent &quot;
                        /&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-blue text-white text-base rounded-full&quot;&gt;<br />Search&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;div className=&quot;w-6&quot;&gt;<br />&lt;/div&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 496 512&quot; width=&quot;30&quot; height=&quot;30&quot; fill=&quot;#061C3F&quot;&gt;<br />&lt;path d=&quot;M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z&quot; /&gt;<br />&lt;/svg&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>


            {/* ---component--- */}

            {/* ---component--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-8'>Simple Navbars</h2>
            <p className='my-8 text-skin-light'>Simple navbars with icon and search.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
            <div className="py-3 px-20 w-full bg-gray-100 flex justify-between">
                <span className="text-xl ml-3 relative top-1">Tailui</span>
                <div className='flex bg-cl-secondary rounded-full'>
                    <input
                        type="text" name="username" id="usernamer" placeholder="Username"
                        className="bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-l-full py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent "
                    />
                    <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full">Search</button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30" fill="#061C3F"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" /></svg>

            </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow4}>
                        {code4 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code4 ? '400px' : '0', display: code4 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5 overflow-auto'>
                    <pre className='px-5 block whitespace-pr'><code className='px-5 pb-5 h-max-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;py-3 px-20 w-screen bg-white flex justify-between&quot;&gt;<br />
                        &lt;span className=&quot;text-xl ml-3 relative top-1&quot;&gt;<br />Tailui&lt;/span&gt;<br />
                        &lt;div className=&quot;flex bg-cl-secondary rounded-full&quot;&gt;<br />
                        &lt;input
                        type=&quot;text&quot; name=&quot;username&quot; id=&quot;usernamer&quot; placeholder=&quot;Username&quot;
                        className=&quot;bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-l-full py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent &quot;
                        /&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-blue text-white text-base rounded-full&quot;&gt;<br />Search&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 496 512&quot; width=&quot;30&quot; height=&quot;30&quot; fill=&quot;#061C3F&quot;&gt;<br />&lt;path d=&quot;M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z&quot; /&gt;<br />&lt;/svg&gt;<br />

                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>


            {/* ---component--- */}

            {/* ---component--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-8'>Simple Navbar</h2>
            <p className='my-8 text-skin-light'>Simple navbar with icon and search.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
            <div className="py-3 px-20 w-full bg-gray-100 flex justify-between">
                <div className='flex bg-cl-secondary rounded-full'>
                    <input
                        type="text" name="username" id="usernamer" placeholder="Username"
                        className="bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-l-full py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent "
                    />
                    <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full">Search</button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30" fill="#061C3F"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" /></svg>

            </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow5}>
                        {code5 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code5 ? '400px' : '0', display: code5 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5 overflow-auto'>
                    <pre className='px-5 block whitespace-pr'><code className='px-5 pb-5 h-max-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;py-3 px-20 w-screen bg-white flex justify-between&quot;&gt;<br />
                        &lt;div className=&quot;flex bg-cl-secondary rounded-full&quot;&gt;<br />
                        &lt;input
                        type=&quot;text&quot; name=&quot;username&quot; id=&quot;usernamer&quot; placeholder=&quot;Username&quot;
                        className=&quot;bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-l-full py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent &quot;
                        /&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-blue text-white text-base rounded-full&quot;&gt;<br />Search&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 496 512&quot; width=&quot;30&quot; height=&quot;30&quot; fill=&quot;#061C3F&quot;&gt;<br />&lt;path d=&quot;M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z&quot; /&gt;<br />&lt;/svg&gt;<br />

                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>


            {/* ---component--- */}

            {/* ---component--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-8'>Simple navbars with  search</h2>
            <p className='my-8 text-skin-light'>Simple rounder navbar with icon and some search.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
            <div className="py-3 px-10 w-full bg-gray-100 flex justify-between rounded-full shadow-xl">
                <div className='flex'>
                    <div className="h-10 w-32 flex">
                        <img src="/assets/tailui-icon.svg" alt="Logo" className="object-contain h-8 w-h-8" />
                        <span className="text-xl ml-3 relative top-1">Tailui</span>
                    </div>
                    <div className="flex py-1 w-max px-2 text-lg font-medium">
                        <button className="py-1 px-2 text-cl-black-carbon hover:relative hover:bottom-2">Home</button>
                        <button className="py-1 px-2 text-cl-grey-dark  hover:relative hover:bottom-2">About</button>
                        <button className="py-1 px-2 text-cl-grey-dark  hover:relative hover:bottom-2">Contact</button>
                    </div>
                </div>

                <div className="flex py-1 w-max px-2">

                    <div className='flex bg-cl-secondary rounded-full'>
                        <input
                            type="text" name="username" id="usernamer" placeholder="Username"
                            className="bg-cl-secondary placeholder:text-cl-grey-dark w-40 appearance-none border-2 border-gray-300 rounded-l-full py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent "
                        />
                        <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full">Search</button>
                    </div>
                    <div className='w-6'></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30" fill="#061C3F"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" /></svg>
                </div>
            </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow6}>
                        {code6 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code6 ? '400px' : '0', display: code6 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5 overflow-auto'>
                    <pre className='px-5 block whitespace-pr'><code className='px-5 pb-5 h-max-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;py-3 px-20 w-screen bg-white flex justify-between rounded-full shadow-xl&quot;&gt;<br />
                        &lt;div className=&quot;flex&quot;&gt;<br />
                        &lt;div className=&quot;h-10 w-32 flex&quot;&gt;<br />
                        &lt;img src=&quot;/assets/tailui-icon.svg&quot; alt=&quot;Logo&quot; className=&quot;object-contain h-8 w-h-8&quot; /&gt;<br />
                        &lt;span className=&quot;text-xl ml-3 relative top-1&quot;&gt;<br />Tailui&lt;/span&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;div className=&quot;flex py-1 w-max px-2 text-lg font-medium&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-black-carbon hover:relative hover:bottom-2&quot;&gt;<br />Home&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark  hover:relative hover:bottom-2&quot;&gt;<br />About&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark  hover:relative hover:bottom-2&quot;&gt;<br />Contact&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                        &lt;div className=&quot;flex py-1 w-max px-2&quot;&gt;<br />

                        &lt;div className=&quot;flex bg-cl-secondary rounded-full&quot;&gt;<br />
                        &lt;input
                        type=&quot;text&quot; name=&quot;username&quot; id=&quot;usernamer&quot; placeholder=&quot;Username&quot;
                        className=&quot;bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-l-full py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent &quot;
                        /&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-blue text-white text-base rounded-full&quot;&gt;<br />Search&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;div className=&quot;w-6&quot;&gt;<br />&lt;/div&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 496 512&quot; width=&quot;30&quot; height=&quot;30&quot; fill=&quot;#061C3F&quot;&gt;<br />&lt;path d=&quot;M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z&quot; /&gt;<br />&lt;/svg&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>


            {/* ---component--- */}

        </div>
    )
}
