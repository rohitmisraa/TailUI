import React, { useState } from 'react'
import SVG from "../../../svg"
import Link from 'next/link'

export default function Portfolios() {
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
            <h1 className='text-4xl font-bold text-skin-dark'>Portfolios</h1>
            <p className='my-4 text-skin-light'>Portfolio are personal website for anyone who belongs to any proffession like developer, engineers, doctors, etc.</p>
            <h2 className='text-2xl font-medium text-skin-dark my-5' id='Modern-Portfolio'>Modern Portfolio</h2>
            <p className='my-4 text-skin-light'>This is a modern portfolio with contact and projects section with some animations.</p>
            <Link href={'/blocks/dev-portfolio'} passHref><a target={'_blank'}>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_pink-1 to-gr_pink-2 text-white text-base rounded-full">Live Demo</button>
            </a></Link>
            <div className="flex justify-between my-10 space-x-3 overflow-auto pb-10 sm:pb-0">
                <img src="/assets/cdn/portfolio-sdwd23.jpg" alt="hero simple screenshot" />
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow1}>
                        {code1 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code1 ? '400px' : '0', display: code1 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>
                        &lt;div className=&quot;w-full overflow-x-hidden bg-skin-bas bg-[#14070b] scroll-smooth&quot;&gt;<br />
                            &lt;div className=&quot; max-w-[1500px] m-auto&quot;&gt;<br />

                                &lt;div className=&quot;py-7 px-5 sm:px-32 w-full flex justify-between&quot;&gt;<br />
                                    &lt;div className=&quot;h-10 md:ml-0 w-32 flex&quot;&gt;<br />
                                        &lt;img src=&quot;/assets/tailui-icon.svg&quot; alt=&quot;Logo&quot; className=&quot;object-contain h-8 w-h-8&quot; /&gt;<br />
                                        &lt;span className=&quot;text-xl ml-3 relative top-1 text-white&quot;&gt;<br />
                                            TailUI&lt;/span&gt;<br />
                                    &lt;/div&gt;<br />
                                    &lt;div className=&quot;py-1 w-max px-2 text-lg font-medium hidden sm:flex&quot;&gt;<br />
                                        &lt;Link href=&quot;#projects&quot; passHref&gt;<br />&lt;button className=&quot;py-1 px-6 text-skin-dark  hover:relative hover:bottom-2&quot;&gt;<br />
                                            Projects&lt;/button&gt;<br />&lt;/Link&gt;<br />
                                        &lt;Link href=&quot;https://blog.tailui.xyz&quot; passHref&gt;<br />&lt;a target=&quot;_blank&quot;&gt;<br />&lt;button className=&quot;py-1 px-6 text-skin-dark  hover:relative hover:bottom-2&quot;&gt;<br />
                                            Blog&lt;/button&gt;<br />&lt;/a&gt;<br />&lt;/Link&gt;<br />
                                        &lt;Link href=&quot;#contact&quot; passHref&gt;<br />&lt;button className=&quot;py-1 px-6 text-skin-dark hover:relative hover:bottom-2&quot;&gt;<br />
                                            Contact&lt;/button&gt;<br />&lt;/Link&gt;<br />
                                    &lt;/div&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div className=&quot;py-3 px-5 md:px-20 w-full sm:w-11/12 xl:w-11/12 m-auto pt-44 flex&quot;&gt;<br />
                                    &lt;div className=&quot;w-full lg:w-3/6&quot;&gt;<br />
                                        &lt;h3 className=&quot;text-cl-cyan italic&quot;&gt;<br />Welcome, My name is&lt;/h3&gt;<br />
                                        &lt;p className=&quot;text-6xl text-cl-secondary md:w-[500px] xl:w-[650px]&quot;&gt;<br />Rohit kr Mishra&lt;/p&gt;<br />
                                        &lt;h1 className=&quot;lg:text-6xl w-full text-4xl md:w-[500px] xl:w-[700px] mb-2 text-cl-red&quot;&gt;<br />I make web and Mobile Apps&lt;/h1&gt;<br />
                                        &lt;p className=&quot;text-xl text-cl-secondary xl:w-[650px]&quot;&gt;<br />I am a Student and devloper from India, I have built 5+ apps in React, Next JS, Express, PHP, Dart and always looking new interesting Projects. Do you have any project for me? Contact or Checkout my other works below.&lt;/p&gt;<br />
                                        &lt;div className=&quot;flex space-x-4 mt-10&quot;&gt;<br />
                                            &lt;Link href=&quot;#contact&quot; passHref&gt;<br />
                                                &lt;button className=&quot;py-2 px-10 bg-gradient-to-r from-gr_red-1 to-gr_red-2 text-white text-base rounded-full&quot;&gt;<br />Contact Me&lt;/button&gt;<br />
                                            &lt;/Link&gt;<br />
                                            &lt;Link href=&quot;#projects&quot; passHref&gt;<br />
                                                &lt;button className=&quot;py-2 px-10 border-4 border-cl-secondary text-cl-secondary text-base rounded-full hover:bg-cl-secondary hover:text-cl-blue-dark&quot;&gt;<br />Projects&lt;/button&gt;<br />
                                            &lt;/Link&gt;<br />
                                        &lt;/div&gt;<br />
                                    &lt;/div&gt;<br />
                                    &lt;img src=&quot;/assets/cdn/orange-back-dark.png&quot; alt=&quot;Fitness image&quot; className=&quot;sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] my-5  m-auto hidden md:block relative bottom-16&quot; /&gt;<br />
                                &lt;/div&gt;<br />


                                &lt;div className=&quot;py-3 px-5 md:px-20 w-full sm:w-11/12 xl:w-4/5 m-auto pt-44&quot;&gt;<br />
                                    &lt;h2 className=&quot;text-3xl my-4 text-cl-secondary &quot;&gt;<br />My Skills&lt;/h2&gt;<br />
                                    &lt;div className=&quot;w-max grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-auto gap-3&quot;&gt;<br />
                                        &lt;div className=&quot;flex bg-cl-secondary h-24 px-5 py-1 rounded-xl overflow-hidden&quot;&gt;<br />
                                            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 448 512&quot; width=&quot;80&quot; height=&quot;80&quot; fill=&quot;#FFC300&quot;&gt;<br />&lt;path d=&quot;M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z&quot; /&gt;<br />&lt;/svg&gt;<br />

                                            &lt;div className=&quot;ml-3&quot;&gt;<br />
                                                &lt;h3 className=&quot;text-xl font-bold&quot;&gt;<br />JavaScript&lt;/h3&gt;<br />
                                                &lt;h4&gt;<br />Frontend&lt;/h4&gt;<br />
                                            &lt;/div&gt;<br />
                                        &lt;/div&gt;<br />
                                        &lt;div className=&quot;flex bg-cl-secondary h-24 px-5 py-1 rounded-xl overflow-hidden&quot;&gt;<br />
                                            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 128 128&quot; width=&quot;80&quot; height=&quot;80&quot; fill=&quot;#0074c2&quot;&gt;<br />&lt;path fill=&quot;#fff&quot; d=&quot;M22.67 47h99.67v73.67H22.67z&quot; /&gt;<br />&lt;path data-name=&quot;original&quot; fill=&quot;#0074c2&quot; d=&quot;M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z&quot; /&gt;<br />&lt;/svg&gt;<br />
                                            &lt;div className=&quot;ml-3&quot;&gt;<br />
                                                &lt;h3 className=&quot;text-xl font-bold&quot;&gt;<br />TypeScript&lt;/h3&gt;<br />
                                                &lt;h4&gt;<br />Frontend&lt;/h4&gt;<br />
                                            &lt;/div&gt;<br />
                                        &lt;/div&gt;<br />
                                        &lt;div className=&quot;flex bg-cl-secondary h-24 px-5 py-1 rounded-xl overflow-hidden&quot;&gt;<br />
                                            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 640 512&quot; width=&quot;80&quot; height=&quot;80&quot; fill=&quot;currentColor&quot;&gt;<br />&lt;path d=&quot;M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z&quot; /&gt;<br />&lt;/svg&gt;<br />
                                            &lt;div className=&quot;ml-3&quot;&gt;<br />
                                                &lt;h3 className=&quot;text-xl font-bold&quot;&gt;<br />Nodejs&lt;/h3&gt;<br />
                                                &lt;h4&gt;<br />Server&lt;/h4&gt;<br />
                                            &lt;/div&gt;<br />
                                        &lt;/div&gt;<br />
                                        &lt;div className=&quot;flex bg-cl-secondary h-24 px-5 py-1 rounded-xl overflow-hidden&quot;&gt;<br />
                                            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 128 128&quot;&gt;<br />&lt;path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; fill=&quot;#01e15f&quot; d=&quot;M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 006.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z&quot; /&gt;<br />&lt;/svg&gt;<br />
                                            &lt;div className=&quot;ml-3&quot;&gt;<br />
                                                &lt;h3 className=&quot;text-xl font-bold&quot;&gt;<br />MongoDB&lt;/h3&gt;<br />
                                                &lt;h4&gt;<br />Server&lt;/h4&gt;<br />
                                            &lt;/div&gt;<br />
                                        &lt;/div&gt;<br />
                                        &lt;div className=&quot;flex bg-cl-secondary h-24 px-5 py-1 rounded-xl overflow-hidden&quot;&gt;<br />
                                            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 128 128&quot;&gt;<br />&lt;path fill=&quot;#E44D26&quot; d=&quot;M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z&quot; /&gt;<br />&lt;/svg&gt;<br />
                                            &lt;div className=&quot;ml-3&quot;&gt;<br />
                                                &lt;h3 className=&quot;text-xl font-bold&quot;&gt;<br />HTML&lt;/h3&gt;<br />
                                                &lt;h4&gt;<br />Frontend&lt;/h4&gt;<br />
                                            &lt;/div&gt;<br />
                                        &lt;/div&gt;<br />
                                        &lt;div className=&quot;flex bg-cl-secondary h-24 px-5 py-1 rounded-xl overflow-hidden&quot;&gt;<br />
                                            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 128 128&quot;&gt;<br />&lt;path fill=&quot;#1572B6&quot; d=&quot;M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z&quot; /&gt;<br />&lt;/svg&gt;<br />
                                            &lt;div className=&quot;ml-3&quot;&gt;<br />
                                                &lt;h3 className=&quot;text-xl font-bold&quot;&gt;<br />CSS&lt;/h3&gt;<br />
                                                &lt;h4&gt;<br />Frontend&lt;/h4&gt;<br />
                                            &lt;/div&gt;<br />
                                        &lt;/div&gt;<br />
                                        &lt;div className=&quot;flex bg-cl-secondary h-24 px-5 py-1 rounded-xl overflow-hidden&quot;&gt;<br />
                                            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 128 128&quot;&gt;<br />&lt;g fill=&quot;#61DAFB&quot;&gt;<br />&lt;circle cx=&quot;64&quot; cy=&quot;64&quot; r=&quot;11.4&quot; /&gt;<br />&lt;path d=&quot;M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z&quot; /&gt;<br />&lt;/g&gt;<br />&lt;/svg&gt;<br />
                                            &lt;div className=&quot;ml-3&quot;&gt;<br />
                                                &lt;h3 className=&quot;text-xl font-bold&quot;&gt;<br />React&lt;/h3&gt;<br />
                                                &lt;h4&gt;<br />Frontend&lt;/h4&gt;<br />
                                            &lt;/div&gt;<br />
                                        &lt;/div&gt;<br />
                                        &lt;div className=&quot;flex bg-cl-secondary h-24 px-5 py-1 rounded-xl overflow-hidden&quot;&gt;<br />
                                            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 128 128&quot;&gt;<br />&lt;path d=&quot;M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z&quot; /&gt;<br />&lt;/svg&gt;<br />
                                            &lt;div className=&quot;ml-3&quot;&gt;<br />
                                                &lt;h3 className=&quot;text-xl font-bold&quot;&gt;<br />Express Js&lt;/h3&gt;<br />
                                                &lt;h4&gt;<br />Frontend&lt;/h4&gt;<br />
                                            &lt;/div&gt;<br />
                                        &lt;/div&gt;<br />
                                    &lt;/div&gt;<br />

                                &lt;/div&gt;<br />
                                &lt;div className=&quot;py-3 px-5 md:px-20 w-full sm:w-11/12 xl:w-4/5 m-auto pt-44&quot; id=&quot;projects&quot;&gt;<br />
                                    &lt;h2 className=&quot;text-3xl text-cl-secondary&quot;&gt;<br />My Projects&lt;/h2&gt;<br />
                                    &lt;div className=&quot;mt-6 mb-3 flex&quot;&gt;<br />
                                        &lt;span className=&quot;text-xl text-cl-red&quot;&gt;<br />01. TailUI&lt;/span&gt;<br />
                                        &lt;div className=&quot;h-1 rounded-2xl bg-gradient-to-r from-gr_green-1 to-gr_green-2 w-32 relative top-3 ml-5&quot;&gt;<br />&lt;/div&gt;<br />
                                    &lt;/div&gt;<br />
                                    &lt;div className=&apos;md:h-[400px] xm:mx-10 w-full md:bg-transparent bg-cl-black-carbon m-auto p-2 rounded-2xl overflow-y-hidden&apos;&gt;<br />
                                        &lt;div className=&apos;h-96 w-full md:w-[500px] rounded-[40px] overflow-hidden&apos;&gt;<br />
                                            &lt;img className=&apos;h-full object-cover object-left&apos;
                                                src=&quot;/assets/posts/bg-hero-tailui.jpg&quot; alt=&quot;Tumbnail Image&quot; /&gt;<br />

                                        &lt;/div&gt;<br />
                                        &lt;div className=&apos;md:float-right w-full md:p-0 md:w-[600px] md:relative md:bottom-96 text-white&apos;&gt;<br />
                                            &lt;h3 className=&apos;text-3xl sm:text-4xl md:float-right md:relative md:top-5 m-5 md:m-0 md:right-24 text-w md:text-white&apos;&gt;<br />TailUI&lt;/h3&gt;<br />
                                            &lt;div className=&apos;md:mt-16 lg:mt-8 py-5 md:float-right px-5 md:px-16 w-full md:w-3/4 lg:w-auto md:relative left-20 lg:left-0 bg-cl-black-carbon md:rounded-tr-[100px] md:rounded-bl-[100px] sm:shadow-xl&apos;&gt;<br />
                                                &lt;p className=&apos;text-cl-secondary text-base sm:text-xl md:text-base&apos;&gt;<br />TailUI is a Tailwind components library, It has 50+ components and many blocks available.TailUI is a Tailwind components library, It has 50+ components and many blocks available.TailUI is a Tailwind components library, It has 50+ components and many blocks available.TailUI is a Tailwind components library, It has 50+ components and many blocks available.&lt;/p&gt;<br />
                                            &lt;/div&gt;<br />
                                            &lt;div className=&apos;flex md:float-right mt-2 mx-5  md:text-white&apos;&gt;<br />
                                                &lt;Link href=&quot;https://tailui.xyz&quot; passHref&gt;<br />&lt;a target=&quot;_blank&quot;&gt;<br />
                                                    &lt;button className=&apos;mx-5&apos;&gt;<br />
                                                        &lt;svg viewBox=&quot;0 0 16 16&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;35&quot; height=&quot;35&quot; fill=&quot;currentColor&quot;&gt;<br />
                                                            &lt;path fillRule=&quot;evenodd&quot; d=&quot;M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,9.08899 7.69202,9.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z&quot; /&gt;<br />
                                                        &lt;/svg&gt;<br />
                                                    &lt;/button&gt;<br />&lt;/a&gt;<br />&lt;/Link&gt;<br />
                                                &lt;Link href=&quot;https://github.com/rohitmra/tailui&quot; passHref&gt;<br />&lt;a target=&quot;_blank&quot;&gt;<br />
                                                    &lt;button className=&apos;mx-5&apos;&gt;<br />
                                                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 496 512&quot; width=&quot;35&quot; height=&quot;35&quot; fill=&quot;currentColor&quot;&gt;<br />
                                                            &lt;path d=&quot;M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z&quot; /&gt;<br />&lt;/svg&gt;<br />

                                                    &lt;/button&gt;<br />&lt;/a&gt;<br />&lt;/Link&gt;<br />


                                            &lt;/div&gt;<br />
                                        &lt;/div&gt;<br />
                                    &lt;/div&gt;<br />

                                &lt;/div&gt;<br />
                                &lt;div className=&quot;text-center pt-60&quot; id=&quot;contact&quot;&gt;<br />
                                    &lt;h2 className=&quot;text-3xl text-cl-secondary&quot;&gt;<br />Have any Idea or Project?&lt;/h2&gt;<br />
                                    &lt;p className=&quot;text-xl my-6 text-cl-secondary&quot;&gt;<br />Or just want to say Hi!&lt;/p&gt;<br />
                                    &lt;Link href=&quot;mailto:fakemail@tailui.xyz&quot; passHref&gt;<br />&lt;a target=&quot;_blank&quot;&gt;<br />
                                        &lt;button className=&quot;py-2 px-10 border-4 border-cl-secondary text-cl-secondary text-base rounded-full hover:bg-cl-secondary hover:text-cl-blue-dark&quot;&gt;<br />Send a message&lt;/button&gt;<br />
                                    &lt;/a&gt;<br />&lt;/Link&gt;<br />
                                    &lt;h4 className=&quot;mt-40 mb-3 text-2xl text-cl-secondary flex w-max m-auto space-x-1&quot;&gt;<br />
                                        &lt;span&gt;<br />Made with&lt;/span&gt;<br />
                                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 512 512&quot; fill=&apos;#EF233C&apos; width=&quot;30&quot; height=&quot;30&quot;&gt;<br />&lt;path d=&quot;M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z&quot; /&gt;<br />&lt;/svg&gt;<br />
                                        &lt;span&gt;<br />using &lt;Link href=&quot;https://tailui.xyz&quot; passHref&gt;<br />&lt;a className=&quot;text-cl-red&quot; target=&quot;_blank&quot;&gt;<br />TailUI&lt;/a&gt;<br />&lt;/Link&gt;<br />&lt;/span&gt;<br />
                                    &lt;/h4&gt;<br />
                                &lt;/div&gt;<br />


                            &lt;/div&gt;<br />
                        &lt;/div&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>


        </div>
    )
    }
