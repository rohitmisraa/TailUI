import React, { useState } from 'react'
import SVG from "../../../svg"
// import highlight from '../../public/assets/highlight.min.js'


export default function Buttons() {
    const [code1, setcode1] = useState(false)
    const [code2, setcode2] = useState(false)
    const [code3, setcode3] = useState(false)
    const [code4, setcode4] = useState(false)
    const [code5, setcode5] = useState(false)
    const [code6, setcode6] = useState(false)
    const [code7, setcode7] = useState(false)
    const [code8, setcode8] = useState(false)
    const [code9, setcode9] = useState(false)
    const [code10, setcode10] = useState(false)

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
    function codeshow7() {
        if (code7) {
            setcode7(false)
        } else {
            setcode7(true)

        }
    }
    function codeshow8() {
        if (code8) {
            setcode8(false)
        } else {
            setcode8(true)

        }
    }
    function codeshow9() {
        if (code9) {
            setcode9(false)
        } else {
            setcode9(true)

        }
    }
    function codeshow10() {
        if (code10) {
            setcode10(false)
        } else {
            setcode10(true)

        }
    }


    return (
        <div className="p-10">
            <h1 className='text-4xl font-bold text-skin-dark'>Buttons</h1>
            <p className='my-4 text-skin-light'>Buttons allows users to perform on click activities.</p>
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Default Buttons</h2>
            <p className='my-4 text-skin-light'>The buttons have very little rounded corners.</p>
            <div className="flex justify-between my-10 space-x-3">
                <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-lg">Default</button>
                <button className="py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base rounded-lg">Default</button>
                <button className="py-1 px-6 bg-cl-red text-white text-base rounded-lg">Red</button>
                <button className="py-1 px-6 bg-cl-pink text-white text-base rounded-lg">Pink</button>
                <button className="py-1 px-6 bg-cl-orange text-white text-base rounded-lg">Orange</button>
                <button className="py-1 px-6 bg-cl-yellow text-white text-base rounded-lg">Yellow</button>
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow1}>
                        {code1 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code1 ? '400px' : '0', display: code1 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>
                        &lt;button className="py-1 px-6 bg-cl-blue text-white text-base rounded-lg"&gt;Default&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base rounded-lg"&gt;Default&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-red text-white text-base rounded-lg"&gt;Red&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-pink text-white text-base rounded-lg"&gt;Pink&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-orange text-white text-base rounded-lg"&gt;Orange&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-red text-white text-base rounded-lg"&gt;Red&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-pink text-white text-base rounded-lg"&gt;Pink&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-orange text-white text-base rounded-lg"&gt;Orange&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-red text-white text-base rounded-lg"&gt;Red&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-pink text-white text-base rounded-lg"&gt;Pink&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-orange text-white text-base rounded-lg"&gt;Orange&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-yellow text-white text-base rounded-lg"&gt;Yellow&lt;/button&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Bt 2--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Rounded Buttons</h2>
            <p className='my-4 text-skin-light'>The buttons have rounded corners.</p>
            <div className="flex justify-between my-10">
                <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full">Default</button>
                <button className="py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base rounded-full">Secondary</button>
                <button className="py-1 px-6 bg-cl-red text-white text-base rounded-full">Red</button>
                <button className="py-1 px-6 bg-cl-orange text-white text-base rounded-full">Orange</button>
                <button className="py-1 px-6 bg-cl-green text-white text-base rounded-full">Green</button>
                <button className="py-1 px-6 bg-cl-violet text-white text-base rounded-full">Purple</button>
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow2}>
                        {code2 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code2 ? '400px' : '0', display: code2 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pre-line'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>
                        &lt;button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full"&gt;Default&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base rounded-full"&gt;Secondary&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-red text-white text-base rounded-full"&gt;Red&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-orange text-white text-base rounded-full"&gt;Orange&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-green text-white text-base rounded-full"&gt;Green&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-violet text-white text-base rounded-full"&gt;Purple&lt;/button&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Bt 1--- */}

            {/* ---Bt 1--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Un-rounded Buttons</h2>
            <p className='my-4 text-skin-light'>The buttons does not have rounded corners.</p>
            <div className="flex justify-between my-10">
                <button className="py-1 px-6 bg-cl-blue text-white text-base ">Default</button>
                <button className="py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base ">Secondary</button>
                <button className="py-1 px-6 bg-cl-red text-white text-base ">Red</button>
                <button className="py-1 px-6 bg-cl-orange text-white text-base rounded-full">Orange</button>
                <button className="py-1 px-6 bg-cl-green text-white text-base ">Green</button>
                <button className="py-1 px-6 bg-cl-violet text-white text-base ">Purple</button>
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow3}>
                        {code3 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code3 ? '400px' : '0', display: code3 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>
                        
                        &lt;button className="py-1 px-6 bg-cl-blue text-white text-base "&gt;Default&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base "&gt;Secondary&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-red text-white text-base "&gt;Red&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-orange text-white text-base rounded-full"&gt;Orange&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-green text-white text-base "&gt;Green&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-cl-violet text-white text-base "&gt;Purple&lt;/button&gt;<br />
                        
                    </code>
                    </pre>
                </div>
            </div>
            {/* ---Bt 1--- */}

            {/* ---Bt 1--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Secondary Buttons</h2>
            <p className='my-4 text-skin-light'>The buttons have border and text.</p>

            <div className="flex justify-between my-10 w-max space-x-5">
                <button className="py-1 px-6 border-2 border-cl-blue text-cl-blue text-base rounded-lg">Default</button>
                <button className="py-1 px-6 border-2 border-cl-blue text-cl-blue text-base rounded-full">Default</button>
                <button className="py-1 px-6 border-2 border-cl-blue text-cl-blue text-base ">Default</button>

            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow4}>
                        {code4 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code4 ? '400px' : '0', display: code4 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>
                        
                        &lt;button className="py-1 px-6 border-2 border-cl-blue text-cl-blue text-base rounded-lg"&gt;Default&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 border-2 border-cl-blue text-cl-blue text-base rounded-full"&gt;Default&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 border-2 border-cl-blue text-cl-blue text-base "&gt;Default&lt;/button&gt;<br />


                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Bt 1--- */}

            {/* ---Bt 1--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Text only buttons</h2>
            <p className='my-4 text-skin-light'>The buttons have text with transparent background.</p>

            <div className="flex justify-between my-10">
                <button className="py-1 px-6 text-blue rounded-lg">Default</button>

            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow5}>
                        {code5 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code5 ? '400px' : '0', display: code5 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;button className="py-1 px-6 text-blue rounded-lg"&gt;Default&lt;/button&gt;

                    </code>
                    </pre>
                </div>
            </div>
            {/* ---Bt 1--- */}


            {/* gradient */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Gradient Buttons Default</h2>
            <p className='my-4 text-skin-light'>The buttons have little rounded corners with gradient background.</p>

            <div className="flex justify-between my-10">
                <button className="py-1 px-6 bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 text-white text-base rounded-lg">Default</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_red-1 to-gr_red-2 text-white text-base rounded-lg">Red</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_yellow-1 to-gr_yellow-2 text-white text-base rounded-lg">Yellow</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_cyan-1 to-gr_cyan-2 text-white text-base rounded-lg">Cyan</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_green-1 to-gr_green-2 text-white text-base rounded-lg">Green</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 text-white text-base rounded-lg">Violet</button>

            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow6}>
                        {code6 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code6 ? '400px' : '0', display: code6 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 text-white text-base rounded-lg"&gt;Default&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_red-1 to-gr_red-2 text-white text-base rounded-lg"&gt;Red&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_yellow-1 to-gr_yellow-2 text-white text-base rounded-lg"&gt;Yellow&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_cyan-1 to-gr_cyan-2 text-white text-base rounded-lg"&gt;Cyan&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_green-1 to-gr_green-2 text-white text-base rounded-lg"&gt;Green&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 text-white text-base rounded-lg"&gt;Violet&lt;/button&gt;<br />


                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Bt 1--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Gradient Buttons Rounded</h2>
            <p className='my-4 text-skin-light'>The buttons have rounded corners with gradient background.</p>

            <div className="flex justify-between my-10">
                <button className="py-1 px-6 bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 text-white text-base rounded-full">Default</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_pink-1 to-gr_pink-2 text-white text-base rounded-full">Pink</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_orange-1 to-gr_orange-2 text-white text-base rounded-full">Orange</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_cyan-1 to-gr_cyan-2 text-white text-base rounded-full">Cyan</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_green-1 to-gr_green-2 text-white text-base rounded-full">Green</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 text-white text-base rounded-full">Violet</button>

            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow7}>
                        {code7 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code7 ? '400px' : '0', display: code7 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 text-white text-base rounded-full"&gt;Default&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_pink-1 to-gr_pink-2 text-white text-base rounded-full"&gt;Pink&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_orange-1 to-gr_orange-2 text-white text-base rounded-full"&gt;Orange&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_cyan-1 to-gr_cyan-2 text-white text-base rounded-full"&gt;Cyan&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_green-1 to-gr_green-2 text-white text-base rounded-full"&gt;Green&lt;/button&gt;<br />
                        &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 text-white text-base rounded-full"&gt;Violet&lt;/button&gt;<br />


                    </code>
                    </pre>
                </div>
            </div>


            {/* ---Bt 1--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Gradient Buttons unRounded</h2>
            <p className='my-4 text-skin-light'>The buttons does not have rounded corners but has gradient background.</p>

            <div className="flex justify-between my-10">
                <button className="py-1 px-6 bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 text-white text-base ">Default</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_red-1 to-gr_red-2 text-white text-base ">Red</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_yellow-1 to-gr_yellow-2 text-white text-base ">Yellow</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_cyan-1 to-gr_cyan-2 text-white text-base ">Cyan</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_green-1 to-gr_green-2 text-white text-base ">Green</button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 text-white text-base ">Violet</button>

            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow8}>
                        {code8 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code8 ? '400px' : '0', display: code8 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 text-white text-base "&gt;Default&lt;/button&gt;<br />
                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_red-1 to-gr_red-2 text-white text-base "&gt;Red&lt;/button&gt;<br />
                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_yellow-1 to-gr_yellow-2 text-white text-base "&gt;Yellow&lt;/button&gt;<br />
                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_cyan-1 to-gr_cyan-2 text-white text-base "&gt;Cyan&lt;/button&gt;<br />
                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_green-1 to-gr_green-2 text-white text-base "&gt;Green&lt;/button&gt;<br />
                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 text-white text-base "&gt;Violet&lt;/button&gt;<br />


                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Bt 1--- */}

            {/* ---Bt 1--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Buttons with right icons</h2>
            <p className='my-4 text-skin-light'>The buttons have icon align to right.</p>

            <div className="flex justify-between my-10 w-max space-x-5">
                <button className="py-1 px-6 bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 text-white text-base rounded-lg">
                    Default
                    <span className="float-right relative top-1 ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" ><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg>
                    </span>
                </button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 text-white text-base rounded-full">
                    Default
                    <span className="float-right relative top-1 ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" ><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg>
                    </span>
                </button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_orange-1 to-gr_orange-2 text-white text-base">
                    Default
                    <span className="float-right relative top-1 ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" ><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg>
                    </span>
                </button>

            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl '>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow9}>
                        {code9 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code9 ? '400px' : '0', display: code9 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 text-white text-base rounded-lg"&gt;<br />
                                Default
                                &lt;span className="float-right relative top-1 ml-3"&gt;
                                    &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" &gt;&lt;path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /&gt;&lt;/svg&gt;
                                &lt;/span&gt;<br />
                            &lt;/button&gt;<br />
                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 text-white text-base rounded-full"&gt;<br />
                                Default
                                &lt;span className="float-right relative top-1 ml-3"&gt;<br />
                                    &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" &gt;&lt;path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /&gt;&lt;/svg&gt;
                                &lt;/span&gt;<br />
                            &lt;/button&gt;<br />
                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_orange-1 to-gr_orange-2 text-white text-base"&gt;<br />
                                Default
                                &lt;span className="float-right relative top-1 ml-3"&gt;<br />
                                    &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" &gt;&lt;path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /&gt;&lt;/svg&gt;
                                &lt;/span&gt;<br />
                            &lt;/button&gt;<br />


                    </code>
                    </pre>
                </div>
            </div>


            {/* ---Bt 1--- */}
            {/* ---Bt 1--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Buttons with left icons</h2>
            <p className='my-4 text-skin-light'>The buttons have icon align to left.</p>

            <div className="flex justify-between my-10 w-max space-x-5">
                <button className="py-1 px-6 bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 text-white text-base rounded-lg">
                    Default
                    <span className="float-left relative top-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" ><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg>
                    </span>
                </button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_green-1 to-gr_green-2 text-white text-base rounded-full">
                    Default
                    <span className="float-right relative top-1 ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" ><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg>
                    </span>
                </button>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_red-1 to-gr_red-2 text-white text-base">
                    Default
                    <span className="float-right relative top-1 ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" ><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg>
                    </span>
                </button>

            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow10}>
                        {code10 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code10 ? '400px' : '0', display: code10 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 text-white text-base rounded-lg"&gt;<br />
                                Default
                                &lt;span className="float-left relative top-1 mr-3"&gt;<br />
                                    &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" &gt;&lt;path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /&gt;&lt;/svg&gt;
                                &lt;/span&gt;<br />
                            &lt;/button&gt;<br />
                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_green-1 to-gr_green-2 text-white text-base rounded-full"&gt;<br />
                                Default
                                &lt;span className="float-right relative top-1 ml-3"&gt;<br />
                                    &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" &gt;&lt;path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /&gt;&lt;/svg&gt;
                                &lt;/span&gt;<br />
                            &lt;/button&gt;<br />
                            &lt;button className="py-1 px-6 bg-gradient-to-r from-gr_red-1 to-gr_red-2 text-white text-base"&gt;<br />
                                Default
                                &lt;span className="float-right relative top-1 ml-3"&gt;<br />
                                    &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="white" &gt;&lt;path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /&gt;&lt;/svg&gt;
                                &lt;/span&gt;<br />
                            &lt;/button&gt;<br />


                    </code>
                    </pre>
                </div>
            </div>


            {/* ---Bt 1--- */}
        </div>
    )
}
