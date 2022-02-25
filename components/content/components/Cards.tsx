import React, { useState } from 'react'
import SVG from "../../../svg"
import Link from "next/link"

export default function Cards() {
    const [code1, setcode1] = useState(false)
    const [code2, setcode2] = useState(false)
    const [code3, setcode3] = useState(false)
    const [code4, setcode4] = useState(false)
    const [code5, setcode5] = useState(false)
    const [code6, setcode6] = useState(false)
    const [code7, setcode7] = useState(false)
    const [code8, setcode8] = useState(false)
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

    return (
        <div className="p-4 sm:p-10">
            <h1 className='text-4xl font-bold text-skin-dark'>Cards</h1>
            <p className='my-4 text-skin-light'>Cards are the container which hold or group many element to one place.</p>

            {/* ---Default Card--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Card with Image and text</h2>
            <p className='my-4 text-skin-light'>This is a beautiful card has thumbnail image, Heading and paragraph text.</p>

            <div className=' p-2 pb-5 bg-white w-80 rounded-xl' id="card-with-image">
                <div className='rounded-xl w-full h-52 overflow-hidden'>
                    <img className='min-h-full object-cover object-left'
                        src="https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_960_720.jpg" alt="Tumbnail Image" />

                </div>
                <div className='px-2 my-4'>
                    <h2 className='my-3 font-medium text-lg'>Headline</h2>
                    <p className='my-3 text-base text-[#425466]'>Write an amazing description in this dedicated card section. Each word counts. </p>
                </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow1}>
                        {code1 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code1 ? '400px' : '0', display: code1 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div class=&quot; p-2 pb-5 bg-white w-80 rounded-xl&quot; id=&quot;card-with-image&quot;&gt;<br />
                        &lt;div class=&quot;rounded-xl w-full h-52 overflow-hidden&quot;&gt;<br />
                        &lt;img class=&quot;min-h-full object-cover object-left&quot;
                        src=&quot;https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_960_720.jpg&quot; alt=&quot;Tumbnail Image&quot; /&gt;<br />

                        &lt;/div&gt;<br />
                        &lt;div class=&quot;px-2 my-4&quot;&gt;<br />
                        &lt;h2 class=&quot;my-3 font-medium text-lg&quot;&gt;<br />Headline&lt;/h2&gt;<br />
                        &lt;p class=&quot;my-3 text-base text-[#425466]&quot;&gt;<br />Write an amazing description in this dedicated card section. Each word counts. &lt;/p&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Cards--- */}

            {/* ---Default Card--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Empty Cards</h2>
            <p className='my-4 text-skin-light'>This is a an empty card with our theme so you can easily add other components as your requirements.</p>

            <div className=' p-2 pb-5 bg-white w-80 rounded-xl' id="empty-card">
                <div className='h-80'></div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow2}>
                        {code2 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code2 ? '400px' : '0', display: code2 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 pb-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                        &lt;div class=&quot; p-2 pb-5 bg-white w-80 rounded-xl&quot;&gt;<br />

                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Cards--- */}

            {/* ---Default Card--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Empty Cards</h2>
            <p className='my-4 text-skin-light'>This is a an empty card with our theme so you can easily add other components as your requirements.</p>

            <div className=' p-5 pb-5 bg-white w-96 rounded-xl' id="text-with-button">
                <div className='mt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={25} width={25} fill="currentColor">
                        <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z" /></svg>
                </div>

                <button className='float-right relative bottom-12'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" height={25} width={25} fill="currentColor">
                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
                </button>
                <p className='text-lg text-cl-blue-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <Link href={"#"} passHref><button className="py-1 mt-3 bg-transparent text-current text-base rounded-full">
                    Apply now
                    <span className="float-right relative top-1 ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="currentColor" ><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg> </span>
                </button>
                </Link>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow3}>
                        {code3 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code3 ? '400px' : '0', display: code3 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div class=&quot; p-5 pb-5 bg-white w-96 rounded-xl&quot; id=&quot;text-with-button&quot;&gt;<br />
                        &lt;div class=&quot;mt-4&quot;&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 320 512&quot; height={25} width={25} fill=&quot;currentColor&quot;&gt;<br />
                        &lt;path d=&quot;M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z&quot; /&gt;<br />&lt;/svg&gt;<br />
                        &lt;/div&gt;<br />

                        &lt;button class=&quot;float-right relative bottom-12&quot;&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 352 512&quot; height={25} width={25} fill=&quot;currentColor&quot;&gt;<br />
                        &lt;path d=&quot;M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z&quot; /&gt;<br />&lt;/svg&gt;<br />
                        &lt;/button&gt;<br />
                        &lt;p class=&quot;text-lg text-cl-blue-dark&quot;&gt;<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit&lt;/p&gt;<br />
                        &lt;Link href=&quot;#&quot; passHref&gt;<br />&lt;button class=&quot;py-1 mt-3 bg-transparent text-current text-base rounded-full&quot;&gt;<br />
                        Apply now
                        &lt;span class=&quot;float-right relative top-1 ml-3&quot;&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 448 512&quot; width=&quot;15&quot; height=&quot;15&quot; fill=&quot;currentColor&quot; &gt;<br />&lt;path d=&quot;M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z&quot; /&gt;<br />&lt;/svg&gt;<br /> &lt;/span&gt;<br />
                        &lt;/button&gt;<br />
                        &lt;/Link&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Cards--- */}

            {/* ---Default Card--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Empty Cards</h2>
            <p className='my-4 text-skin-light'>This is a an empty card with our theme so you can easily add other components as your requirements.</p>

            <div className=' bg-white w-60 pb-5 rounded-xl overflow-hidden' id="social-media-card">
                <div className='h-2 w-full bg-gradient-to-r from-gr_cyan-1 to-gr_cyan-2'></div>
                <h3 className='m-4 mb-2 text-2xl font-medium'>@tailui</h3>
                <span className='ml-4 text-xl'>7.5k+</span>
                <div className='flex'>
                    <Link href={"#"} passHref>
                        <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full ml-4 m-4 mr-10">Follow</button>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="60" height="60" fill="currentColor">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow4}>
                        {code4 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code4 ? '400px' : '0', display: code4 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div class=&quot; bg-white w-60 pb-5 rounded-xl overflow-hidden&quot; id=&quot;social-media-card&quot;&gt;<br />
                        &lt;div class=&quot;h-2 w-full bg-gradient-to-r from-gr_cyan-1 to-gr_cyan-2&quot;&gt;<br />&lt;/div&gt;<br />
                        &lt;h3 class=&quot;m-4 mb-2 text-2xl font-medium&quot;&gt;<br />@tailui&lt;/h3&gt;<br />
                        &lt;span class=&quot;ml-4 text-xl&quot;&gt;<br />7.5k+&lt;/span&gt;<br />
                        &lt;div class=&quot;flex&quot;&gt;<br />
                        &lt;Link href=&quot;#&quot; passHref&gt;<br />
                        &lt;button class=&quot;py-1 px-6 bg-cl-blue text-white text-base rounded-full ml-4 m-4 mr-10&quot;&gt;<br />Follow&lt;/button&gt;<br />
                        &lt;/Link&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 448 512&quot; width=&quot;60&quot; height=&quot;60&quot; fill=&quot;currentColor&quot;&gt;<br />
                        &lt;path d=&quot;M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z&quot; /&gt;<br />&lt;/svg&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Cards--- */}

            {/* ---Default Card--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Empty Cards</h2>
            <p className='my-4 text-skin-light'>This is a an empty card with our theme so you can easily add other components as your requirements.</p>

            <div className=' p-10 bg-white w-96 rounded-xl' id="payment-card">
                <h2 className='font-medium text-3xl'>$ 49 <span className='font-normal text-xl'>/month</span></h2>
                <h3 className='font-medium text-3xl my-2'>Base</h3>
                <p className='text-lg'>For freelancers and developers, who want to easily create apps.</p>
                <div className='py-3'>
                    <span className='flex space-x-2 mb-4'>
                        <div className='bg-cl-blue rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28" fill="#D3DEF0"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" /></svg>
                        </div>
                        <span className='ml-4 text-lg'>All premium components</span>
                    </span>
                    <span className='flex space-x-2 mb-4'>
                        <div className='bg-cl-blue rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28" fill="#D3DEF0"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" /></svg>
                        </div>
                        <span className='ml-4 text-lg'>All premium blocks</span>
                    </span>
                    <span className='flex space-x-2 mb-4'>
                        <div className='bg-cl-blue rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28" fill="#D3DEF0"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" /></svg>
                        </div>
                        <span className='ml-4 text-lg'>Special badge in forum</span>
                    </span>
                    <span className='flex space-x-2 mb-4'>
                        <div className='bg-cl-blue rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28" fill="#D3DEF0"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" /></svg>
                        </div>
                        <span className='ml-4 text-lg'>Special support from staff</span>
                    </span>
                    <span className='flex space-x-2 mb-4'>
                        <div className='bg-cl-blue rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28" fill="#D3DEF0"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" /></svg>
                        </div>
                        <span className='ml-4 text-lg'>All free features included</span>
                    </span>
                    <div className='w-full flex justify-center'>
                        <Link href={"#"} passHref>
                            <button className="py-2 px-12 bg-cl-secondary text-cl-blue-dark text-xl font-medium rounded-full">Choose Plan</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3' id="project-card">
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow5}>
                        {code5 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code5 ? '400px' : '0', display: code5 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div class=&quot; p-10 bg-white w-96 rounded-xl&quot; id=&quot;payment-card&quot;&gt;<br />
                        &lt;h2 class=&quot;font-medium text-3xl&quot;&gt;<br />$ 49 &lt;span class=&quot;font-normal text-xl&quot;&gt;<br />/month&lt;/span&gt;<br />&lt;/h2&gt;<br />
                        &lt;h3 class=&quot;font-medium text-3xl my-2&quot;&gt;<br />Base&lt;/h3&gt;<br />
                        &lt;p class=&quot;text-lg&quot;&gt;<br />For freelancers and developers, who want to easily create apps.&lt;/p&gt;<br />
                        &lt;div class=&quot;py-3&quot;&gt;<br />
                        &lt;span class=&quot;flex space-x-2 mb-4&quot;&gt;<br />
                        &lt;div class=&quot;bg-cl-blue rounded-full&quot;&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 512 512&quot; width=&quot;28&quot; height=&quot;28&quot; fill=&quot;#D3DEF0&quot;&gt;<br />&lt;path d=&quot;M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z&quot; /&gt;<br />&lt;/svg&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;span class=&quot;ml-4 text-lg&quot;&gt;<br />All premium components&lt;/span&gt;<br />
                        &lt;/span&gt;<br />
                        &lt;span class=&quot;flex space-x-2 mb-4&quot;&gt;<br />
                        &lt;div class=&quot;bg-cl-blue rounded-full&quot;&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 512 512&quot; width=&quot;28&quot; height=&quot;28&quot; fill=&quot;#D3DEF0&quot;&gt;<br />&lt;path d=&quot;M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z&quot; /&gt;<br />&lt;/svg&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;span class=&quot;ml-4 text-lg&quot;&gt;<br />All premium blocks&lt;/span&gt;<br />
                        &lt;/span&gt;<br />
                        &lt;span class=&quot;flex space-x-2 mb-4&quot;&gt;<br />
                        &lt;div class=&quot;bg-cl-blue rounded-full&quot;&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 512 512&quot; width=&quot;28&quot; height=&quot;28&quot; fill=&quot;#D3DEF0&quot;&gt;<br />&lt;path d=&quot;M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z&quot; /&gt;<br />&lt;/svg&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;span class=&quot;ml-4 text-lg&quot;&gt;<br />Special badge in forum&lt;/span&gt;<br />
                        &lt;/span&gt;<br />
                        &lt;span class=&quot;flex space-x-2 mb-4&quot;&gt;<br />
                        &lt;div class=&quot;bg-cl-blue rounded-full&quot;&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 512 512&quot; width=&quot;28&quot; height=&quot;28&quot; fill=&quot;#D3DEF0&quot;&gt;<br />&lt;path d=&quot;M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z&quot; /&gt;<br />&lt;/svg&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;span class=&quot;ml-4 text-lg&quot;&gt;<br />Special support from staff&lt;/span&gt;<br />
                        &lt;/span&gt;<br />
                        &lt;span class=&quot;flex space-x-2 mb-4&quot;&gt;<br />
                        &lt;div class=&quot;bg-cl-blue rounded-full&quot;&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 512 512&quot; width=&quot;28&quot; height=&quot;28&quot; fill=&quot;#D3DEF0&quot;&gt;<br />&lt;path d=&quot;M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z&quot; /&gt;<br />&lt;/svg&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;span class=&quot;ml-4 text-lg&quot;&gt;<br />All free features included&lt;/span&gt;<br />
                        &lt;/span&gt;<br />
                        &lt;div class=&quot;w-full flex justify-center&quot;&gt;<br />
                        &lt;Link href=&quot;#&quot; passHref&gt;<br />
                        &lt;button class=&quot;py-2 px-12 bg-cl-secondary text-cl-blue-dark text-xl font-medium rounded-full&quot;&gt;<br />Choose Plan&lt;/button&gt;<br />
                        &lt;/Link&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Cards--- */}


            {/* ---Default Card--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Empty Cards</h2>
            <p className='my-4 text-skin-light'>This is a an empty card with our theme so you can easily add other components as your requirements.</p>
            <div className='w-full overflow-auto py-10' id="">

                <div className='md:h-96 mx-10 md:w-3/4 md:bg-transparent bg-cl-blue-dark xl:w-[1000px] m-auto p-2 rounded-2xl overflow-y-hidden'>
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
                            <Link href={"#"} passHref><button className='mx-5'>
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor">
                                    <path fillRule="evenodd" d="M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,9.08899 7.69202,9.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z" />
                                </svg>
                            </button></Link>
                            <Link href={"#"} passHref><button className='mx-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="35" height="35" fill="currentColor">
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>

                            </button></Link>


                        </div>
                    </div>
                </div>

            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl my-3' id="">
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow6}>
                        {code6 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code6 ? '400px' : '0', display: code6 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                        &lt;div class=&quot;w-full overflow-auto py-10&quot;&gt;<br />

                        &lt;div class=&quot;md:h-96 mx-10 md:w-3/4 md:bg-transparent bg-cl-blue-dark xl:w-[1000px] m-auto p-2 rounded-2xl overflow-y-hidden&quot;&gt;<br />
                        &lt;div class=&quot;h-96 w-full md:w-[500px] rounded-[40px] overflow-hidden&quot;&gt;<br />
                        &lt;img class=&quot;min-h-full&quot;
                        src=&quot;https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_960_720.jpg&quot; alt=&quot;Tumbnail Image&quot; /&gt;<br />

                        &lt;/div&gt;<br />
                        &lt;div class=&quot;md:float-right w-full md:p-0 md:w-[600px] md:relative md:bottom-96 text-white&quot;&gt;<br />
                        &lt;h3 class=&quot;text-3xl sm:text-4xl md:float-right md:relative md:top-5 m-5 md:m-0 md:right-24 text-w md:text-cl-blue-dark&quot;&gt;<br />TailUI&lt;/h3&gt;<br />
                        &lt;div class=&quot;md:mt-16 lg:mt-8 py-5 md:float-right px-5 md:px-16 w-full md:w-3/4 lg:w-auto md:relative left-20 lg:left-0 bg-cl-blue-dark md:rounded-tr-[100px] md:rounded-bl-[100px]&quot;&gt;<br />
                        &lt;p class=&quot;text-cl-secondary text-base sm:text-xl md:text-base&quot;&gt;<br />TailUI is a Tailwind components library, It has 50+ components and many blocks available.TailUI is a Tailwind components library, It has 50+ components and many blocks available.TailUI is a Tailwind components library, It has 50+ components and many blocks available.TailUI is a Tailwind components library, It has 50+ components and many blocks available.&lt;/p&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;div class=&quot;flex md:float-right mt-2 mx-5  md:text-cl-blue-dark &quot;&gt;<br />
                        &lt;Link href=&quot;#&quot; passHref&gt;<br />&lt;button class=&quot;mx-5&quot;&gt;<br />
                        &lt;svg viewBox=&quot;0 0 16 16&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;35&quot; height=&quot;35&quot; fill=&quot;currentColor&quot;&gt;<br />
                        &lt;path fillRule=&quot;evenodd&quot; d=&quot;M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,9.08899 7.69202,9.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z&quot; /&gt;<br />
                        &lt;/svg&gt;<br />
                        &lt;/button&gt;<br />&lt;/Link&gt;<br />
                        &lt;Link href=&quot;#&quot; passHref&gt;<br />&lt;button class=&quot;mx-5&quot;&gt;<br />
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 496 512&quot; width=&quot;35&quot; height=&quot;35&quot; fill=&quot;currentColor&quot;&gt;<br />
                        &lt;path d=&quot;M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z&quot; /&gt;<br />&lt;/svg&gt;<br />

                        &lt;/button&gt;<br />&lt;/Link&gt;<br />


                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />

                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Cards--- */}

        </div>
    )
}
