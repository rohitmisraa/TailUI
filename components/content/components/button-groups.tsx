import React, { useState } from 'react'
import SVG from "../../../svg"



export default function Buttongroups() {
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
    const [code11, setcode11] = useState(false)

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
    function codeshow11() {
        if (code11) {
            setcode11(false)
        } else {
            setcode11(true)

        }
    }
    return (
        <div className="p-10">
            <h1 className='text-4xl font-bold text-skin-dark'>Button Groups</h1>
            <p className='my-4 text-skin-light'>Buttons allows users to perform on click activities and button groups can be good for many buttons like navigations.</p>

            {/* ---Default Buttons--- */}

            <h2 className='text-2xl font-medium text-skin-dark my-5'>Button Groups</h2>
            <p className='my-4 text-skin-light'>The buttons groups have very less rounded corners.</p>
            <div className='overflow-auto pb-10 sm:pb-0'>
                <div className="flex rounded-lg bg-cl-blue py-1 w-max my-10">
                    <button className="py-1 px-6 text-white rounded-lg">Button 1</button>
                    <button className="py-1 px-6 text-white rounded-lg">Button 2</button>
                    <button className="py-1 px-6 text-white rounded-lg">Button 3</button>
                </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow1}>
                        {code1 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code1 ? '400px' : '0', display: code1 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;flex rounded-lg bg-cl-blue py-1 w-max my-10&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>


            {/* ---Default Buttons--- */}
            {/* ---Default Buttons--- */}

            <h2 className='text-2xl font-medium text-skin-dark my-5'>Secondary Button Groups</h2>
            <p className='my-4 text-skin-light'>The buttons have rounded corners.</p>
            <div className='overflow-auto pb-10 sm:pb-0'>
                <div className="flex rounded-lg bg-white py-1 w-max my-10">
                    <button className="py-1 px-6 text-cl-blue-dark font-semibold rounded-l-lg border-2 border-cl-blue-dark">Button 1</button>
                    <button className="py-1 px-6 text-cl-blue-dark font-semibold border-2 border-cl-blue-dark">Button 2</button>
                    <button className="py-1 px-6 text-cl-blue-dark font-semibold rounded-r-lg border-2 border-cl-blue-dark">Button 3</button>
                </div>
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow2}>
                        {code2 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code2 ? '400px' : '0', display: code2 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;flex rounded-lg bg-white py-1 w-max my-10&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-blue-dark font-semibold rounded-l-lg border-2 border-cl-blue-dark&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-blue-dark font-semibold border-2 border-cl-blue-dark&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-blue-dark font-semibold rounded-r-lg border-2 border-cl-blue-dark&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>


            {/* ---Default Buttons--- */}

            {/* ---Default Buttons--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>No-border Button Groups</h2>
            <p className='my-4 text-skin-light'>The button group have no border.</p>
            <div className='overflow-auto pb-10 sm:pb-0'>
                <div className="flex rounded-lg bg-cl-secondary w-max py-1 my-10">
                    <button className="py-1 px-6 text-cl-blue-dark font-semibold rounded-lg">Button 1</button>
                    <button className="py-1 px-6 text-cl-blue-dark font-semibold rounded-lg">Button 2</button>
                    <button className="py-1 px-6 text-cl-blue-dark font-semibold rounded-lg">Button 3</button>
                </div>
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow3}>
                        {code3 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code3 ? '400px' : '0', display: code3 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;flex rounded-lg bg-cl-secondary w-max py-1 my-10&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-blue-dark font-semibold rounded-lg&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-blue-dark font-semibold rounded-lg&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-blue-dark font-semibold rounded-lg&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>



            {/* ---Default Buttons--- */}

            {/* ---Default Buttons--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Rounded Button Groups</h2>
            <p className='my-4 text-skin-light'>The button group have rounded corners.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
                <div className="flex rounded-full bg-cl-blue py-1 w-max my-10">
                    <button className="py-1 px-6 text-white rounded-lg">Button 1</button>
                    <button className="py-1 px-6 text-white rounded-lg">Button 2</button>
                    <button className="py-1 px-6 text-white rounded-lg">Button 3</button>
                </div>
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow4}>
                        {code4 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code4 ? '400px' : '0', display: code4 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;flex rounded-full bg-cl-blue py-1 w-max my-10&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Buttons--- */}

            {/* ---Default Buttons--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Un-Rounded Button Groups</h2>
            <p className='my-4 text-skin-light'>The button group have no-rounded corners.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
                <div className="flex bg-cl-blue py-1 w-max my-10">
                    <button className="py-1 px-6 text-white rounded-lg">Button 1</button>
                    <button className="py-1 px-6 text-white rounded-lg">Button 2</button>
                    <button className="py-1 px-6 text-white rounded-lg">Button 3</button>
                </div>
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow5}>
                        {code5 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code5 ? '400px' : '0', display: code5 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;flex bg-cl-blue py-1 w-max my-10&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Buttons--- */}

            <h1 className="text-2xl my-5">Gradient Button Groups</h1>

            {/* ---Default Buttons--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Default Button Groups</h2>
            <p className='my-4 text-skin-light'>The button group have less rounded corners with gradient background.</p>
            <div className='overflow-auto pb-10 sm:pb-0'>
                <div className="flex bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 rounded-lg py-1 w-max my-10">
                    <button className="py-1 px-6 text-white rounded-lg  hover:bg-blue-600">Button 1</button>
                    <button className="py-1 px-6 text-white rounded-lg  hover:bg-blue-600">Button 2</button>
                    <button className="py-1 px-6 text-white rounded-lg  hover:bg-blue-600">Button 3</button>
                </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow6}>
                        {code6 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code6 ? '400px' : '0', display: code6 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;flex bg-gradient-to-r from-gr_blue-1 to-gr_blue-2 rounded-lg py-1 w-max my-10&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-blue-600&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-blue-600&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-blue-600&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Buttons--- */}

            {/* ---Default Buttons--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Rounded Button Groups</h2>
            <p className='my-4 text-skin-light'>The button group have rounded corners with gradient background.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
                <div className="flex bg-gradient-to-r from-gr_orange-1 to-gr_orange-2 rounded-full py-1 w-max my-10 px-2">
                    <button className="py-1 px-6 text-white rounded-lg  hover:bg-orange-600">Button 1</button>
                    <button className="py-1 px-6 text-white rounded-lg  hover:bg-orange-600">Button 2</button>
                    <button className="py-1 px-6 text-white rounded-lg  hover:bg-orange-600">Button 3</button>
                </div>
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow7}>
                        {code7 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code7 ? '400px' : '0', display: code7 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;flex bg-gradient-to-r from-gr_orange-1 to-gr_orange-2 rounded-full py-1 w-max my-10 px-2&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-orange-600&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-orange-600&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-orange-600&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Buttons--- */}

            {/* ---Default Buttons--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Un-Rounded Button Groups</h2>
            <p className='my-4 text-skin-light'>The button group have no-rounded corners with gradient background.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
                <div className="flex bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 py-1 w-max my-10 px-2">
                    <button className="py-1 px-6 text-white  hover:bg-violet-600">Button 1</button>
                    <button className="py-1 px-6 text-white  hover:bg-violet-600">Button 2</button>
                    <button className="py-1 px-6 text-white  hover:bg-violet-600">Button 3</button>
                </div>
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow8}>
                        {code8 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code8 ? '400px' : '0', display: code8 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;flex bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 py-1 w-max my-10 px-2&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white  hover:bg-violet-600&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white  hover:bg-violet-600&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white  hover:bg-violet-600&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Buttons--- */}
            {/* ---Default Buttons--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Text only Button Groups</h2>
            <p className='my-4 text-skin-light'>The buttons have transparent background with only text.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
                <div className="flex py-1 w-max my-10 px-2">
                    <button className="py-1 px-6 text-cl-blue  hover:bg-violet-600">Button 1</button>
                    <button className="py-1 px-6 text-cl-blue  hover:bg-violet-600">Button 2</button>
                    <button className="py-1 px-6 text-cl-blue  hover:bg-violet-600">Button 3</button>
                </div>
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow9}>
                        {code9 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code9 ? '400px' : '0', display: code9 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;flex py-1 w-max my-10 px-2&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-blue  hover:bg-violet-600&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-blue  hover:bg-violet-600&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-blue  hover:bg-violet-600&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Buttons--- */}
            {/* ---Default Buttons--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Verticle button group</h2>
            <p className='my-4 text-skin-light'>The button group have rounded corners and aligned vertically.</p>

            <h2 className="text-base">Verticles</h2>
            <div className='overflow-auto pb-10 sm:pb-0'>
                <div className="flex justify-between  w-min  space-x-5">
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
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow10}>
                        {code10 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code10 ? '400px' : '0', display: code10 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;flex justify-between &quot;&gt;<br />
                        &lt;div className=&quot;grid bg-gradient-to-r from-gr_orange-1 to-gr_orange-2 rounded-lg py-1 w-max my-10 px-2&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-orange-600&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-orange-600&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-orange-600&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-orange-600&quot;&gt;<br />Button 4&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;div className=&quot;grid bg-gradient-to-r from-gr_cyan-1 to-gr_cyan-2 rounded-lg py-1 w-max my-10 px-2&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-cyan-600&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-cyan-600&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-cyan-600&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-white rounded-lg  hover:bg-cyan-600&quot;&gt;<br />Button 4&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---button--- */}

            <h2 className='text-2xl font-medium text-skin-dark my-5'>Verticle button group</h2>
            <p className='my-4 text-skin-light'>The button group have rounded corners and aligned vertically with transparent background.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
                <div className="flex justify-between  w-min  space-x-5">
                    <div className="grid bg-white rounded-lg py-1 w-max my-10 px-2 shadow-lg">
                        <button className="py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light">Button 1</button>
                        <button className="py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light">Button 2</button>
                        <button className="py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light">Button 3</button>
                        <button className="py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light">Button 4</button>
                    </div>
                </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow11}>
                        {code11 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code11 ? '400px' : '0', display: code11 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div className=&quot;flex justify-between&quot;&gt;<br />
                        &lt;div className=&quot;grid bg-white rounded-lg py-1 w-max my-10 px-2 shadow-lg&quot;&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light&quot;&gt;<br />Button 1&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light&quot;&gt;<br />Button 2&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light&quot;&gt;<br />Button 3&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 text-cl-grey-dark rounded-lg  hover:bg-cl-grey-light&quot;&gt;<br />Button 4&lt;/button&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>


            {/* ---Default Buttons--- */}




        </div>
    )
}
