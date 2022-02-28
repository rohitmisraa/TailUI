import Head from 'next/head'
import Nav from '../components/layouts/nav'
import Link from 'next/link'
import Footer from '../components/layouts/Footer'


export default function Home() {


  return (
    <div className="w-full xl:max-w-[1550px] m-auto overflow-x-hidden bg-skin-base">
      <Head>
        <title>TailUI - A Tailwind Component library</title>
        <meta name="description" content="TailUI a free and open source components library for Tailwind css." />
        <link rel="icon" href="/assets/favicon.ico" />
        <meta name="google-site-verification" content="smyq3-pqQ7dVbS_QyEozcAGqf5_PdVZG9RqB8BGB7JE" />
      </Head>
      <Nav />
      <div className="py-3 px-5 sm:px-20 flex justify-between pt-60 space-x-4">
        <div className="w-full lg:w-3/6">
          <h1 className="lg:text-7xl w-full text-5xl xl:w-[650px] text-skin-dark"><span className="font-bold text-gr_violet-2">TailUI </span>- Tailwind Component library and templates</h1>
          <p className="text-xl text-skin-light xl:w-[650px] mt-5">A Tailwind library with 50+ components, Make your app using our library without much effort.</p>
          <div className="flex space-x-4 mt-10">
            <Link href={'/components/buttons'} passHref><a>
              <button className="py-3 px-4 sm:px-10 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 text-white text-lg rounded-lg">Components</button>
              </a></Link>
            <Link href={'/documentation/getting-started'} passHref><a>
              <button className="py-3 px-4 sm:px-10 bg-cl-secondary text-cl-blue-dark text-lg rounded-lg">Documentation</button>
              </a></Link>
          </div>
        </div>
        <img src="/assets/undraw_product_teardown_re_m1pc.svg" alt="Fitness image" className="sm:w-3/6 lg:w-[500px] xl:w-[700px] my-5 xl:my-0 m-auto hidden md:block relative bottom-10" />
      </div>
      <div className=' w-full px-5 sm:px-20 pt-20'>
        <h1 className="lg:text-7xl w-full text-5xl lg:w-[650px] text-skin-dark">Customize your own <span className="font-bold text-gr_violet-2">Theme </span> color</h1>
        <p className="text-xl text-skin-light xl:w-[650px] mt-5">TailUI gives you easy customization to you own theme colors with already.</p>

        <div className='flex justify-between xl:px-10 py-10'>
          <div className=" p-2 pb-5 bg-white w-80 rounded-xl mx-1 sm:mx-5" id="card-with-image">
            <div className="rounded-xl w-full h-52 overflow-hidden">
              <img className="min-h-full  object-cover object-left" src="https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_960_720.jpg" alt="Tumbnail Image" />
            </div>
            <div className="px-2 my-4">
              <h2 className="my-3 font-medium text-lg">
                Headline</h2>
              <p className="my-3 text-base text-[#425466]">
                Write an amazing description in this dedicated card section. Each word counts. </p>
            </div>
          </div>
          <div className=" p-2 pb-5 bg-cl-red w-80 rounded-xl mx-1 sm:mx-5" id="card-with-image">
            <div className="rounded-xl w-full h-52 overflow-hidden">
              <img className="min-h-full object-cover object-left" src="https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_960_720.jpg" alt="Tumbnail Image" />
            </div>
            <div className="px-2 my-4">
              <h2 className="my-3 font-medium text-white text-lg">
                Headline</h2>
              <p className="my-3 text-base text-white">
                Write an amazing description in this dedicated card section. Each word counts. </p>
            </div>
          </div>
          <div className=" p-2 pb-5 bg-cl-violet hidden md:block w-80 rounded-xl sm:mx-5" id="card-with-image">
            <div className="rounded-xl w-full h-52 overflow-hidden">
              <img className="min-h-full object-cover object-left" src="https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_960_720.jpg" alt="Tumbnail Image" />
            </div>
            <div className="px-2 my-4">
              <h2 className="my-3 font-medium text-white text-lg">
                Headline</h2>
              <p className="my-3 text-base text-white">
                Write an amazing description in this dedicated card section. Each word counts. </p>
            </div>
          </div>

        </div>
      </div>


      <div className='w-full px-5 sm:px-20 pt-20'>
        <h1 className="lg:text-7xl w-full text-5xl lg:w-[650px] text-skin-dark">Adding <span className=" text-cl-cyan">light</span>/<span className=" text-cl-red">dark </span> theme made easy</h1>
        <p className="text-xl text-skin-light xl:w-[650px] mt-5">TailUI provides you ready made option to add light/dark theme, swap botton.</p>
        <div className='w-full md:flex pt-10 pb-28'>

          <div className='h-96 w-full md:w-6/12 xl:w-[650px] sm:mx-4 xl:mx-10 rounded-t-lg md:rounded-lg shadow-md bg-cl-blue-dark flex justify-center'>
            <div className=" p-2 pb-5 bg-cl-violet w-80 m-auto rounded-xl sm:mx-5" id="card-with-image">
              <div className="rounded-xl w-full h-52 overflow-hidden">
                <img className="min-h-full object-cover object-left" src="https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_960_720.jpg" alt="Tumbnail Image" />
              </div>
              <div className="px-2 my-4">
                <h2 className="my-3 font-medium text-white text-lg">
                  Headline</h2>
                <p className="my-3 text-base text-white">
                  Write an amazing description in this dedicated card section. Each word counts. </p>
              </div>
            </div>
          </div>
          <div className='h-96 w-full md:w-6/12 sm:mx-4 xl:mx-10 rounded-b-lg md:rounded-lg shadow-md bg-cl-blue-dark '>
            <pre className='px-5 block overflow-auto whitespace-pr '><code className='px-5 overflow-auto h-96 block text-white language-html p-5' id='code1'>

              &lt;div class=&quot;<span className=" text-cl-pink shadow-white">dark-theme</span> p-2 pb-5 bg-white w-80 rounded-xl&quot; id=&quot;card-with-image&quot;&gt;<br />
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
      </div>


      <div className='w-full px-5 sm:px-20 pt-20'>
        <h1 className="lg:text-7xl w-full text-5xl lg:w-[650px] text-skin-dark">Making a <span className=" text-cl-orange">web app </span>now <span className=" text-cl-green">easy</span></h1>
        <p className="text-xl text-skin-light xl:w-[650px] mt-5">TailUI provides you ready made option to add light/dark theme, swap botton.</p>
        <div className='w-full md:flex pt-10 pb-28'>

          <div className='h-96 w-full md:w-6/12 xl:w-[650px] sm:mx-4 xl:mx-10  rounded-t-lg md:rounded-lg shadow-md bg-cl-blue-dark flex justify-center'>
            <div className="grid bg-cl-blue rounded-lg py-1 w-max my-10 h-max">
              <button className="py-5 px-20 text-white rounded-lg  hover:bg-blue-700">
                Server 1</button>
              <div className='h-1 w-full bg-cl-blue-dark'></div>
              <button className="py-5 px-20 text-white rounded-lg  hover:bg-blue-700">
                Server 2</button>
              <div className='h-1 w-full bg-cl-blue-dark'></div>
              <button className="py-5 px-20 text-white rounded-lg  hover:bg-blue-700">
                Server 3</button>
              <div className='h-1 w-full bg-cl-blue-dark'></div>
              <button className="py-5 px-20 text-white rounded-lg  hover:bg-blue-700">
                Server 4</button>
            </div>
          </div>
          <div className='h-96 w-full md:w-6/12 sm:mx-4 xl:mx-10  rounded-b-lg md:rounded-lg shadow-md bg-cl-blue-dark '>
            <pre className='px-5 block overflow-auto whitespace-pr '><code className='px-5 overflow-auto h-96 block text-white language-html p-5' id='code1'>

              &lt;div className=&quot;h-96 w-full md:w-6/12 xl:w-[650px] sm:mx-4 xl:mx-10 rounded-lg shadow-md bg-cl-blue-dark flex justify-center&quot;&gt;<br />
              &lt;div className=`&quot;grid bg-cl-blue rounded-lg py-1 w-max my-10 h-max`&quot;&gt;<br />
              &lt;button className=`&quot;py-5 px-20 text-white rounded-lg  hover:bg-blue-700`&quot;&gt;<br />
              Server 1&lt;/button&gt;<br />
              &lt;div className=&quot;h-1 w-full bg-cl-blue-dark&quot;&gt;<br />&lt;/div&gt;<br />
              &lt;button className=`&quot;py-5 px-20 text-white rounded-lg  hover:bg-blue-700`&quot;&gt;<br />
              Server 2&lt;/button&gt;<br />
              &lt;div className=&quot;h-1 w-full bg-cl-blue-dark&quot;&gt;<br />&lt;/div&gt;<br />
              &lt;button className=`&quot;py-5 px-20 text-white rounded-lg  hover:bg-blue-700`&quot;&gt;<br />
              Server 3&lt;/button&gt;<br />
              &lt;div className=&quot;h-1 w-full bg-cl-blue-dark&quot;&gt;<br />&lt;/div&gt;<br />
              &lt;button className=`&quot;py-5 px-20 text-white rounded-lg  hover:bg-blue-700`&quot;&gt;<br />
              Server 4&lt;/button&gt;<br />
              &lt;/div&gt;<br />
              &lt;/div&gt;<br />

            </code>
            </pre>
          </div>

        </div>
      </div>

      <div className='w-full px-5 md:px-20 pt-20'>
        <div className='w-max m-auto flex space-x-4 pt-10 pb-28'>

          <div className="bg-skin-fill text-skin-auto w-36 sm:w-48 lg:w-60 pb-5 rounded-xl overflow-hidden" id="social-media-card">
            <div className="h-2 w-full bg-gradient-to-r from-gr_violet-1 to-gr_violet-2">
            </div>
            <h3 className="m-4 mb-2 text-2xl font-medium">
              Discord</h3>
            <span className="relative left-4 text-xl">
              For support and fun</span>
            <div className="flex">
              <Link href="https://discord.gg/KX6DnfQAuj" passHref><a target={"_blank"}>
                <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full ml-4 m-4 mr-3 lg:mr-10">
                  Join</button></a>
              </Link>
              <div className='hidden sm:block'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="60" height="60" fill="currentColor">
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
              </div>
            </div>
          </div>
          <div className=" bg-skin-fill text-skin-auto w-36 sm:w-48 lg:w-60 pb-5 rounded-xl overflow-hidden" id="social-media-card">
            <div className="h-2 w-full bg-gradient-to-r from-gr_green-1 to-gr_green-2">
            </div>
            <h3 className="m-4 mb-2 text-2xl font-medium">
              Github</h3>
            <span className="relative left-4 text-xl">
              Let&apos;s Contribute</span>
            <div className="flex">
              <Link href="https://github.com/rohitmra/tailui" passHref><a target={"_blank"}>
                <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full ml-4 m-4 mr-3 lg:mr-10">
                  Check</button></a>
              </Link>
              <div className='hidden sm:block'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="60" height="60" fill="currentColor">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                
              </div>
            </div>
          </div>
          <div className=" bg-skin-fill text-skin-auto w-36 hidden sm:block sm:w-48 lg:w-60 pb-5 rounded-xl overflow-hidden" id="social-media-card">
            <div className="h-2 w-full bg-gradient-to-r from-gr_pink-1 to-gr_red-2">
            </div>
            <h3 className="m-4 mb-2 text-2xl font-medium">
              Blog</h3>
            <span className="relative left-4 text-xl">
              For more</span>
            <div className="flex">
              <Link href="https://blog.tailui.xyz/" passHref><a target={"_blank"}>
                <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full ml-4 m-4 mr-3 lg:mr-10">
                  Blog</button></a>
              </Link>
              <div className='hidden sm:block'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  width="60" height="60" fill="currentColor">
                <path d="M35.19 171.1C-11.72 217.1-11.72 294 35.19 340.9L171.1 476.8C217.1 523.7 294 523.7 340.9 476.8L476.8 340.9C523.7 294 523.7 217.1 476.8 171.1L340.9 35.19C294-11.72 217.1-11.72 171.1 35.19L35.19 171.1zM315.5 315.5C282.6 348.3 229.4 348.3 196.6 315.5C163.7 282.6 163.7 229.4 196.6 196.6C229.4 163.7 282.6 163.7 315.5 196.6C348.3 229.4 348.3 282.6 315.5 315.5z"/></svg>
              </div>
            </div>
          </div>


        </div>
      </div>



      <Footer />
    </div>
  )
}
