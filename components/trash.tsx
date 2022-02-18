import React from 'react'

export default function trash() {
  return (
    <div>
        {/* ---Bt 1--- */}
        <h1>Buttons</h1>
        <div className="flex justify-between my-10">
            <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-lg">Default</button>
            <button className="py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base rounded-lg">Default</button>
            <button className="py-1 px-6 bg-cl-red text-white text-base rounded-lg">Red</button>
            <button className="py-1 px-6 bg-cl-pink text-white text-base rounded-lg">Pink</button>
            <button className="py-1 px-6 bg-cl-orange text-white text-base rounded-lg">Orange</button>
            <button className="py-1 px-6 bg-cl-yellow text-white text-base rounded-lg">Yellow</button>
            <button className="py-1 px-6 bg-cl-cyan text-white text-base rounded-lg">Cyan</button>
            <button className="py-1 px-6 bg-cl-green text-white text-base rounded-lg">Green</button>
            <button className="py-1 px-6 bg-cl-violet text-white text-base rounded-lg">Purple</button>

        </div>






      <h2 className='text-2xl font-medium text-skin-dark my-5'>Un-rounded Buttons</h2>
      <p className='my-4 text-skin-light'>The buttons have rounded corners.</p>

      {/* code-- */}

      <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
        <div className='h-12 flex justify-between pt-3'>
          <button className='relative bottom-1 left-4 text-white' onClick={codeshow1}>
            {code1 ? SVG.down : SVG.arrow_right}
          </button>
        </div>
        <div style={{ height: code1 ? '400px' : '0', display: code1 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
          <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>

            {/* code-- */}

          </code>
          </pre>
        </div>
      </div>


      
    </div>
  )
}
