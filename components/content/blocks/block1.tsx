import React, { useState } from 'react'
import SVG from "../../../svg"

export default function () {
    const [code1, setcode1] = useState(false)
    function codeshow1() {
        if (code1) {
            setcode1(false)
        } else {
            setcode1(true)

        }
    }
  return (
    <div className='p-10 min-h-screen'>
        <h1 className='text-4xl font-bold text-skin-dark'>Block</h1>
            <p className='my-4 text-skin-light'>Buttons allows users to perform on click activities.</p>
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Default Buttons</h2>
            <p className='my-4 text-skin-light'>The buttons have very little rounded corners.</p>
            <div className="flex justify-between my-10 space-x-3 overflow-auto pb-10 sm:pb-0">
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
                        &lt;button className=&quot;py-1 px-6 bg-cl-blue text-white text-base rounded-lg&quot;&gt;Default&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base rounded-lg&quot;&gt;Default&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-red text-white text-base rounded-lg&quot;&gt;Red&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-pink text-white text-base rounded-lg&quot;&gt;Pink&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-orange text-white text-base rounded-lg&quot;&gt;Orange&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-red text-white text-base rounded-lg&quot;&gt;Red&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-pink text-white text-base rounded-lg&quot;&gt;Pink&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-orange text-white text-base rounded-lg&quot;&gt;Orange&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-red text-white text-base rounded-lg&quot;&gt;Red&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-pink text-white text-base rounded-lg&quot;&gt;Pink&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-orange text-white text-base rounded-lg&quot;&gt;Orange&lt;/button&gt;<br />
                        &lt;button className=&quot;py-1 px-6 bg-cl-yellow text-white text-base rounded-lg&quot;&gt;Yellow&lt;/button&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>
    </div>
  )
}
