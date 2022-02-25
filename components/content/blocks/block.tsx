import React, { useState } from 'react'
import SVG from "../../../svg"
import Link from 'next/link'

export default function Blocks() {
    const [code1, setcode1] = useState(false)
    const [code2, setcode2] = useState(false)
    const [code3, setcode3] = useState(false)
    const [code4, setcode4] = useState(false)
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
    return (
        <div className='p-10 min-h-screen'>
            <h1 className='text-4xl font-bold text-skin-dark'>Hero blocks</h1>
            <p className='my-4 text-skin-light'>Hero blocks are the top or the first component user see when come to index page.</p>
            <h2 className='text-2xl font-medium text-skin-dark my-5' id='Simple-Tracking-app'>Simple Tracking app Hero</h2>
            <p className='my-4 text-skin-light'>This hero is best for simple sites like app landing page, and other simple design websites.</p>
            <Link href={'/blocks/demo/hero-simple'} passHref><a target={'_blank'}>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_pink-1 to-gr_pink-2 text-white text-base rounded-full">Live Demo</button>
                </a></Link>
            <div className="flex justify-between my-10 space-x-3 overflow-auto pb-10 sm:pb-0">
                <img src="/assets/posts/bg-hero-simple.jpg" alt="hero simple screenshot" />
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow1}>
                        {code1 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code1 ? '400px' : '0', display: code1 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>
                        &lt;div class=&quot;w-full overflow-x-hidden bg-skin-bas bg-cl-violet min-h-screen&quot;&gt;<br />
                            &lt;div class=&quot;py-3 px-5 sm:px-20 w-screen flex justify-between&quot;&gt;<br />
                                &lt;div class=&quot;h-10 w-32 flex&quot;&gt;<br />
                                    &lt;img src=&quot;/assets/tailui-icon.svg&quot; alt=&quot;Logo&quot; class=&quot;object-contain h-8 w-h-8&quot; /&gt;<br />
                                    &lt;span class=&quot;text-xl ml-3 relative top-1 text-white&quot;&gt;<br />
                                        TailUI&lt;/span&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div class=&quot;py-1 w-max px-2 text-lg font-medium hidden sm:flex&quot;&gt;<br />
                                    &lt;button class=&quot;py-1 px-6 text-skin-dark  hover:relative hover:bottom-2&quot;&gt;<br />
                                        Home&lt;/button&gt;<br />
                                    &lt;button class=&quot;py-1 px-6 text-skin-light  hover:relative hover:bottom-2&quot;&gt;<br />
                                        About&lt;/button&gt;<br />
                                    &lt;button class=&quot;py-1 px-6 text-skin-light hover:relative hover:bottom-2&quot;&gt;<br />
                                        Contact&lt;/button&gt;<br />
                                &lt;/div&gt;<br />
                            &lt;/div&gt;<br />
                            &lt;div class=&quot;py-3 px-5 sm:px-20 w-screen flex justify-between pt-44 space-x-4&quot;&gt;<br />
                                &lt;div class=&quot;w-full lg:w-3/6&quot;&gt;<br />
                                    &lt;h1 class=&quot;lg:text-7xl w-full text-5xl xl:w-[650px] text-white&quot;&gt;<br />&lt;span class=&quot;font-bold text-cl-cyan&quot;&gt;<br />Track&lt;/span&gt;<br /> your Daily activity anytime&lt;/h1&gt;<br />
                                    &lt;p class=&quot;text-xl text-cl-secondary xl:w-[650px]&quot;&gt;<br />Track your active time spend running, walking or cycling. Also get the sight of progress from anywhere no matter, its phone, tablet or pc.&lt;/p&gt;<br />
                                    &lt;div class=&quot;flex space-x-4 mt-10&quot;&gt;<br />
                                        &lt;button class=&quot;py-1 px-6 bg-cl-blue text-white text-base rounded-full&quot;&gt;<br />Learn More&lt;/button&gt;<br />
                                        &lt;button class=&quot;py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base rounded-full&quot;&gt;<br />Check our blog&lt;/button&gt;<br />
                                    &lt;/div&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;img src=&quot;/assets/undraw_fitness_tracker_3033.svg&quot; alt=&quot;Fitness image&quot; class=&quot;sm:w-3/6 lg:w-[500px] xl:w-[700px] my-5 xl:my-0 m-auto hidden md:block relative bottom-16&quot; /&gt;<br />
                            &lt;/div&gt;<br />
                        &lt;/div&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>

            {/* --- Hero */}

            <h2 className='text-2xl font-medium text-skin-dark my-5' id='Modern-with-background'>Modern with background Hero</h2>
            <p className='my-4 text-skin-light'>This hero is best for modern sites with background image.</p>
            <Link href={'/blocks/demo/hero-ocean'} passHref><a target={'_blank'}>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_pink-1 to-gr_pink-2 text-white text-base rounded-full">Live Demo</button>
            </a></Link>
            <div className="flex justify-between my-10 space-x-3 overflow-auto pb-10 sm:pb-0">
                <img src="/assets/posts/bg-hero-ocena.jpg" alt="hero ocean foundation website screenshot" />
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow2}>
                        {code2 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code2 ? '400px' : '0', display: code2 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>
                        &lt;div class=&quot;w-full overflow-x-hidden bg-skin-bas bg-cl-blue min-h-screen bg-no-repeat bg-cover bg-[url(&apos;/assets/pexels-belle-co-847393.jpg&apos;)]&quot;&gt;<br />
                            &lt;div class=&quot;py-3 px-5 sm:px-20 w-screen flex justify-between bg-[#FFCCC2]&quot;&gt;<br />
                                &lt;div class=&quot;h-10 w-32 flex&quot;&gt;<br />
                                    &lt;img src=&quot;/assets/tailui-icon.svg&quot; alt=&quot;Logo&quot; class=&quot;object-contain h-8 w-h-8&quot; /&gt;<br />
                                    &lt;span class=&quot;text-xl ml-3 relative top-1 text-cl-black-carbon&quot;&gt;<br />
                                        TailUI&lt;/span&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div class=&quot;py-1 w-max px-2 text-lg font-medium hidden sm:flex&quot;&gt;<br />
                                    &lt;button class=&quot;py-1 px-6 text-cl-black-carbon  hover:relative hover:bottom-2&quot;&gt;<br />
                                        Home&lt;/button&gt;<br />
                                    &lt;button class=&quot;py-1 px-6 text-cl-grey-dark  hover:relative hover:bottom-2&quot;&gt;<br />
                                        About&lt;/button&gt;<br />
                                    &lt;button class=&quot;py-1 px-6 text-cl-grey-dark hover:relative hover:bottom-2&quot;&gt;<br />
                                        Contact&lt;/button&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div class=&quot;bg-[#FFCCC2] h-screen w-0 sm:w-7 absolute float-left top-0 left-0&quot;&gt;<br />&lt;/div&gt;<br />
                                &lt;div class=&quot;bg-[#FFCCC2] h-screen w-0 sm:w-7 absolute float-right top-0 right-0&quot;&gt;<br />&lt;/div&gt;<br />

                            &lt;/div&gt;<br />
                            &lt;div class=&quot;py-3 px-10 sm:px-20 w-screen flex justify-between pt-44 space-x-4&quot;&gt;<br />
                                &lt;div class=&quot;w-full lg:w-3/6&quot;&gt;<br />
                                    &lt;h1 class=&quot;lg:text-7xl w-full text-5xl xl:w-[650px] text-white&quot;&gt;<br /> We &lt;span class=&quot;font-bold text-[#FD8067]&quot;&gt;<br />CLEAN&lt;/span&gt;<br /> Water and make it healthier&lt;/h1&gt;<br />
                                    &lt;p class=&quot;text-xl text-cl-secondary xl:w-[650px]&quot;&gt;<br />We are on a journey to clean ocean water and thousands of beaches, you can also help in this journey by donating.&lt;/p&gt;<br />
                                    &lt;div class=&quot;flex space-x-4 mt-10&quot;&gt;<br />
                                        &lt;button class=&quot;py-1 px-6 bg-[#FD8067] text-white text-base rounded-full&quot;&gt;<br />Learn More&lt;/button&gt;<br />
                                        &lt;button class=&quot;py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base rounded-full&quot;&gt;<br />Check our blog&lt;/button&gt;<br />
                                    &lt;/div&gt;<br />
                                &lt;/div&gt;<br />
                            &lt;/div&gt;<br />
                        &lt;/div&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>

            {/* --- Hero */}

            <h2 className='text-2xl font-medium text-skin-dark my-5' id='Modern-with-icons'>Modern with icons Hero</h2>
            <p className='my-4 text-skin-light'>This hero is for modern web with icons and story telling look.</p>
            <Link href={'/blocks/demo/hero-payment-web'} passHref><a target={'_blank'}>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_pink-1 to-gr_pink-2 text-white text-base rounded-full">Live Demo</button>
            </a></Link>
            <div className="flex justify-between my-10 space-x-3 overflow-auto pb-10 sm:pb-0">
                <img src="/assets/posts/bg-hero-payment.jpg" alt="hero ocean foundation website screenshot" />
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow3}>
                        {code3 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code3 ? '400px' : '0', display: code3 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>
                        &lt;div class=&quot;w-full overflow-x-hidden bg-skin-bas bg-[#EBEBEB]&quot;&gt;<br />
                            &lt;div class=&quot;py-3 px-5 sm:px-20 w-screen flex justify-between pt-5 fixed z-40&quot;&gt;<br />
                                &lt;div class=&quot;h-10 w-32 flex&quot;&gt;<br />
                                    &lt;img src=&quot;/assets/TailUI-icon.svg&quot; alt=&quot;Logo&quot; class=&quot;object-contain h-8 w-h-8&quot; /&gt;<br />
                                    &lt;span class=&quot;text-xl ml-3 relative top-1 text-cl-black-carbon&quot;&gt;<br />
                                        TailUI Pay&lt;/span&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div class=&quot;py-1 w-max px-2 text-lg font-medium hidden sm:flex&quot;&gt;<br />
                                    &lt;button class=&quot;py-1 px-6 text-cl-black-carbon  hover:relative hover:bottom-2&quot;&gt;<br />
                                        Home&lt;/button&gt;<br />
                                    &lt;button class=&quot;py-1 px-6 text-cl-grey-dark  hover:relative hover:bottom-2&quot;&gt;<br />
                                        About&lt;/button&gt;<br />
                                    &lt;button class=&quot;py-1 px-6 text-cl-grey-dark hover:relative hover:bottom-2&quot;&gt;<br />
                                        Contact&lt;/button&gt;<br />
                                &lt;/div&gt;<br />

                            &lt;/div&gt;<br />
                            &lt;div class=&quot;py-3 w-screen h-screen overflow-hidden pt-44 md:pt-10 mt-24&quot;&gt;<br />
                                &lt;div class=&quot;w-full&quot;&gt;<br />
                                    &lt;h1 class=&quot;text-5xl w-full md:w-[650px] text-cl-black-carbon font-light m-auto text-center z-20 relative&quot;&gt;<br />We help to send money by one click&lt;/h1&gt;<br />
                                    &lt;div class=&quot; w-40 m-auto my-7&quot;&gt;<br />
                                        &lt;button class=&quot;py-1 px-6 bg-cl-blue text-white text-base rounded-full relative z-20&quot;&gt;<br />Learn More&lt;/button&gt;<br />

                                    &lt;/div&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div class=&quot;&quot;&gt;<br />
                                    &lt;img src=&quot;/assets/blocksw.svg&quot; alt=&quot;Fitness image&quot; className=&quot;w-[1680px] h-[900px] absolute top-0  overflow-hidden hidden md:block&quot; /&gt;<br />
                                    &lt;img src=&quot;/assets/undraw_winter_activities_vv-0-v.svg&quot; alt=&quot;Tree image&quot; className=&quot;top-20 lg:top-0 relative left-32 z-10 w-60 xl:w-[450px] hidden md:block&quot; /&gt;<br />
                                    &lt;img src=&quot;/assets/undraw_wallet_aym5.svg&quot; alt=&quot;Tree image&quot; className=&quot;relative bottom-24 xl:bottom-[300px] float-right right-32 z-10 w-60 xl:w-[450px] hidden md:block&quot; /&gt;<br />

                                &lt;/div&gt;<br />
                            &lt;/div&gt;<br />
                        &lt;/div&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>

            {/* --- Hero */}

            <h2 className='text-2xl font-medium text-skin-dark my-5' id='Our-TailUI-Hero'>Our TailUI Hero</h2>
            <p className='my-4 text-skin-light'>This is our TailUI hero with light and dark theme option.</p>
            <Link href={'/blocks/demo/hero-tailui'} passHref><a target={'_blank'}>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_pink-1 to-gr_pink-2 text-white text-base rounded-full">Live Demo</button>
            </a></Link>
            <div className="flex justify-between my-10 space-x-3 overflow-auto pb-10 sm:pb-0 border-2 border-gray-50">
                <img src="/assets/posts/bg-hero-tailui.jpg" alt="hero ocean foundation website screenshot" />
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow4}>
                        {code4 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code4 ? '400px' : '0', display: code4 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

                    &lt;div class=&quot;w-full overflow-x-hidden bg-skin-base min-h-screen&quot;&gt;<br />
                    &lt;div class=&quot;py-3 px-10 lg:px-20 w-screen flex justify-between fixed max-h-20  z-20 bg-white/5 backdrop-blur-md&quot;&gt;<br />
                            &lt;div class=&apos;flex text-skin-dark&apos;&gt;<br />
                                &lt;button class=&quot;py-1 px-2  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 block lg:hidden&quot;&gt;<br />
                                    &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 448 512&quot; width=&quot;30&quot; height=&quot;30&quot; fill=&apos;currentColor&apos;&gt;<br />&lt;path d=&quot;M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z&quot; /&gt;<br />&lt;/svg&gt;<br />
                                &lt;/button&gt;<br />
                                &lt;div class=&quot;h-10 relative top-2 mx-2 w-auto flex&quot;&gt;<br />
                                    &lt;img src=&quot;/assets/tailui-icon.svg&quot; alt=&quot;Logo&quot; class=&quot;object-contain h-8 w-h-8 shadow-sm&quot; /&gt;<br />
                                    &lt;span class=&quot;text-xl ml-3 relative top-1 sm:block hidden&quot;&gt;<br />TailUI&lt;/span&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div class=&apos;flex bg-cl-secondary rounded-full my-1&apos;&gt;<br />
                                    &lt;input
                                        type=&quot;text&quot; name=&quot;username&quot; id=&quot;usernamer&quot; placeholder=&quot;components&quot;
                                        class=&quot;bg-cl-secondary w-32 placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-l-full py-0 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent &quot;
                                    /&gt;<br />
                                    &lt;button class=&quot;px-6 py-0 bg-cl-blue text-white text-base rounded-full&quot;&gt;<br />Search&lt;/button&gt;<br />
                                &lt;/div&gt;<br />

                            &lt;/div&gt;<br />

                            &lt;div class=&quot;flex py-1 w-max text-skin-light px-2 text-lg font-medium&quot;&gt;<br />
                                &lt;Link href=&apos;/&apos; passHref&gt;<br />
                                    &lt;button class=&quot;py-1 px-6  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 hidden lg:block&quot;&gt;<br />Home&lt;/button&gt;<br />&lt;/Link&gt;<br />
                                &lt;Link href=&apos;/&apos; passHref&gt;<br />&lt;button class=&quot;py-1 px-6  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 hidden lg:block&quot;&gt;<br />Documentation&lt;/button&gt;<br />&lt;/Link&gt;<br />
                                &lt;Link href=&apos;/components/buttons&apos; passHref&gt;<br />&lt;button class=&quot;py-1 px-6  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 hidden lg:block&quot;&gt;<br />Components&lt;/button&gt;<br />&lt;/Link&gt;<br />
                                &lt;Link href=&apos;/&apos; passHref&gt;<br />&lt;button class=&quot;py-1 px-2 w-16  relative hover:text-cl-violet top-1 hover:font-medium hover:top-0 sm:block hidden&quot;&gt;<br />
                                    SVG.light_btn
                                &lt;/button&gt;<br />&lt;/Link&gt;<br />
                                &lt;Link href=&apos;/github.com&apos; passHref&gt;<br />&lt;button class=&quot;py-1 px-2  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 sm:block hidden&quot;&gt;<br />
                                    &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 496 512&quot; width=&quot;30&quot; height=&quot;30&quot; fill=&apos;currentColor&apos;&gt;<br />
                                        &lt;path d=&quot;M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z&quot; /&gt;<br />&lt;/svg&gt;<br />
                                &lt;/button&gt;<br />&lt;/Link&gt;<br />
                            &lt;/div&gt;<br />

                        &lt;/div&gt;<br />
                    &lt;div class=&quot;py-3 px-5 sm:px-20 w-screen flex justify-between pt-44 space-x-4&quot;&gt;<br />
                        &lt;div class=&quot;w-full lg:w-3/6&quot;&gt;<br />
                            &lt;h1 class=&quot;lg:text-7xl w-full text-5xl xl:w-[650px] text-skin-dark&quot;&gt;<br />&lt;span class=&quot;font-bold text-gr_violet-2&quot;&gt;<br />TailUI &lt;/span&gt;<br />- Tailwind Component library and templates&lt;/h1&gt;<br />
                            &lt;p class=&quot;text-xl text-skin-light xl:w-[650px] mt-5&quot;&gt;<br />A Tailwind library with 50+ components, Make your app using our library without much effort.&lt;/p&gt;<br />
                            &lt;div class=&quot;flex space-x-4 mt-10&quot;&gt;<br />
                            &lt;Link href=&apos;/components/buttons&apos; passHref&gt;<br />&lt;button class=&quot;py-3 px-10 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 text-white text-lg rounded-lg&quot;&gt;<br />Components&lt;/button&gt;<br />&lt;/Link&gt;<br />
                            &lt;Link href=&apos;/&apos; passHref&gt;<br />&lt;button class=&quot;py-3 px-10 bg-cl-secondary text-cl-blue-dark text-lg rounded-lg&quot;&gt;<br />Documentation&lt;/button&gt;<br />&lt;/Link&gt;<br />
                            &lt;/div&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;img src=&quot;/assets/undraw_product_teardown_re_m1pc.svg&quot; alt=&quot;Fitness image&quot; class=&quot;sm:w-3/6 lg:w-[500px] xl:w-[700px] my-5 xl:my-0 m-auto hidden md:block relative bottom-16&quot; /&gt;<br />
                    &lt;/div&gt;<br />
                &lt;/div&gt;<br />

                        
                    </code>
                    </pre>
                </div>
            </div>




        </div>
    )
}
