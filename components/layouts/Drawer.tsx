import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import SVG from '../../svg'


export default function Drawer({data}) {
  const [docs, setdocs] = useState(false)
    const [docs1, setdocs1] = useState(false)
    const [docs2, setdocs2] = useState(false)
    const [docs3, setdocs3] = useState(false)
    const [docs4, setdocs4] = useState(false)
  const [comp, setcomp] = useState(false)
    const [comp1, setcomp1] = useState(false)
    const [comp2, setcomp2] = useState(false)
    const [comp3, setcomp3] = useState(false)
    const [comp4, setcomp4] = useState(false)
    const [comp5, setcomp5] = useState(false)
    const [comp6, setcomp6] = useState(false)
  const [block, setblock] = useState(false)
    const [block1, setblock1] = useState(false)
    const [block2, setblock2] = useState(false)
    const [block3, setblock3] = useState(false)
    const [block4, setblock4] = useState(false)
    

    useEffect(() => {
      if (data == 1) {
        setdocs1(true)
        setdocs(true)
      }else
      if (data == 2) {
        setdocs2(true)
        setdocs(true)
      }else
      if (data == 3) {
        setdocs3(true)
        setdocs(true)
      }else
      if (data == 4) {
        setdocs4(true)
        setdocs(true)
      }else
      if (data == 5) {
        setcomp1(true)
        setcomp(true)
      }else
      if (data == 6) {
        setcomp2(true)
        setcomp(true)
      }else
      if (data == 7) {
        setcomp3(true)
        setcomp(true)
      }else
      if (data == 8) {
        setcomp4(true)
        setcomp(true)
      }
      if (data == 9) {
        setcomp5(true)
        setcomp(true)
      }else
      if (data == 10) {
        setcomp6(true)
        setcomp(true)
      }else
      if (data == 11) {
        setblock1(true)
        setblock(true)
      }else
      if (data == 12) {
        setblock2(true)
        setblock(true)
      }else
      if (data == 13) {
        setblock3(true)
        setblock(true)
      }else
      if (data == 14) {
        setblock4(true)
        setblock(true)
      }
  })
  return (
    <div className='text-skin-dark'>
          <div className='my-2'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 mr-4 relative top-1 rounded-md p-[2px]'>
                {SVG.docs}
              </div>
              <span className={`font-Rubik text-xl ${docs? 'text-skin-dark font-medium': 'text-skin-light'}`}>Documentation</span>
              {/* <div className='relative top-2 ml-4 fill-text-skin-dark'>{SVG.down_arrow}</div> */}
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-skin-light'>
                  <li className={`my-3 ${docs1? 'text-skin-dark font-medium': ''}`}><Link href={'/documentation/getting-started'}>Getting Started</Link></li>
                  <li className={`my-3 ${docs2? 'text-skin-dark font-medium': ''}`}><Link href={'/documentation/theme-guide'} passHref>Theme Guide</Link></li>
                <li className={`my-3 ${docs3? 'text-skin-dark font-medium': ''}`}><Link href={'/documentation/about-tailui'} passHref>About TailUI</Link></li>
                <li className={`my-3 ${docs4? 'text-skin-dark font-medium': ''}`}><Link href={'/documentation/how-to-contribute'} passHref>How to contribute?</Link></li>
              </ul>
            </div>
          </div>
          <div className='my-5'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5  bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 mr-4 relative top-1 rounded-md p-[2px]'>
              {SVG.block}
              </div>
              <span className={`font-Rubik text-xl ${comp? 'text-skin-dark font-medium': 'text-skin-light'}`}>Components</span>
              {/* <div className='relative top-2 ml-4'>{SVG.down_arrow}</div> */}
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-skin-light'>
              
                <li className={`my-3 ${comp1? 'text-skin-dark font-medium': ''}`}><Link href={'/components/buttons'} passHref>Buttons</Link></li>
                <li className={`my-3 ${comp2? 'text-skin-dark font-medium': ''}`}><Link href={'/components/button-groups'} passHref>Button Groups</Link></li>
                <li className={`my-3 ${comp3? 'text-skin-dark font-medium': ''}`}><Link href={'/components/cards'} passHref>Cards</Link></li>
                <li className={`my-3 ${comp4? 'text-skin-dark font-medium': ''}`}><Link href={'/components/footers'} passHref>Footer</Link></li>
                <li className={`my-3 ${comp5? 'text-skin-dark font-medium': ''}`}><Link href={'/components/input-fields'} passHref>Input</Link></li>
                <li className={`my-3 ${comp6? 'text-skin-dark font-medium': ''}`}><Link href={'/components/navbars'} passHref>Navbar</Link></li>
              </ul>
            </div>
          </div>

          <div className='my-5 pb-10'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 mr-4 relative top-1 rounded-md p-[2px]'>
              {SVG.table}
              </div>
              <span className={`font-Rubik text-xl ${block? 'text-skin-dark font-medium': 'text-skin-light'}`}>Web Blocks</span>
              {/* <div className='relative top-2 ml-4'>{SVG.down_arrow}</div> */}
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-skin-light'>
                <li className={`my-3 ${block1? 'text-skin-dark font-medium': ''}`}><Link href={'/blocks/hero'} passHref>Hero</Link></li>
                <li className={`my-3 ${block2? 'text-skin-dark font-medium': ''}`}><Link href={'/blocks/portfolios'} passHref>Portfolios</Link></li>
                <li className={`my-3 ${block3? 'text-skin-dark font-medium': ''}`}><Link href={'/blocks/coming-soon'} passHref>Error Pages</Link></li> 
                <li className={`my-3 ${block4? 'text-skin-dark font-medium': ''}`}><Link href={'/blocks/coming-soon'} passHref>Success Pages</Link></li>
              </ul>
            </div>
          </div>
        </div>
  )
}
