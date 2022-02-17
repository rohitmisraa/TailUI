import React, { useState } from 'react'
import SVG from "../svg"

export default function headr() {
  const [code1, setcode1] = useState(true)

  function codeshow1() {
    if (code1) {
      setcode1(false)
    } else {
      setcode1(true)

    }
  }
  function copycode1() {
    const code = document.getElementById('code1');
    console.log(code);
    navigator.clipboard.writeText(code.innerHTML.replaceAll('&lt;', '<').replaceAll('&gt;', '>'));
    alert('Copied')
  }
  return (
    
    <div className='p-10'>
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
          <button className='relative top-1 left-4 text-white' onClick={codeshow1}>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 320 512" fill='currentColor'>
              <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
            </svg>
          </button>
          <button className='relative bottom-2 right-4 text-white' onClick={copycode1}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='currentColor' width="25" height="25">
              <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 
              26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 
              1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 
              24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z" />
              </svg>
          </button>
        </div>
        <div style={{ height: code1 ? '400px' : '0', display: code1 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
          <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>
            &lt;div className="flex justify-between my-10 space-x-3"&gt;<br />
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
            &lt;/div&gt;<br />
          </code>
          </pre>
        </div>
      </div>

    </div>
  )
}
