import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Nav from '../components/layouts/nav'
import Drawer from '../components/layouts/Drawer'
import Stamps from '../components/layouts/Stamps'
// import styles from '../styles/Home.module.css'
import SVG from "../svg"
import Link from 'next/link'
import Footer from '../components/layouts/Footer'


export default function Home({posts: {postdoc, postcomp}}) {
  // console.log(postdoc);
  // console.log(postcomp);
  
  
  return (
    <div className="w-screen overflow-x-hidden">
      <Head>
        {/* <title>{posts.frontmatter.title}</title> */}
        <meta name="description" content="Tailui a free and open source components library for Tailwind css." />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/solid.min.css" integrity="sha512-6/gTF62BJ06BajySRzTm7i8N2ZZ6StspU9uVWDdoBiuuNu5rs1a8VwiJ7skCz2BcvhpipLKfFerXkuzs+npeKA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"></link>
      </Head>
      <Nav/>
      <div className='w-screen lg:w-[1480px] h-full flex  m-auto'>
        <Drawer />
        <div className='w-full xl:w-3/6 h-auto bg-white'>
          
        </div>
        <Stamps />
        
      </div>
      <Footer/>
    </div>
  )
}
    
export async function getStaticProps() {
  const filesdoc = fs.readdirSync(path.join('posts/documentation'))
  const filescompo = fs.readdirSync(path.join('posts/components'))

  const postdoc = filesdoc.map((__filename) => {
    const slug = __filename.replace('.md', '')

    const MarkdownDatadoc = fs.readFileSync(
      path.join('posts/documentation', __filename),
      'utf-8'
    )
    
    
    
      
      const { data:documents } = matter(MarkdownDatadoc);
    

    return{
      slug,
      documents,
    }
  })
  const postcomp = filescompo.map((__filename) => {
    const slug2 = __filename.replace('.md', '')

    const MarkdownDatacomp = fs.readFileSync(
      path.join('posts/components', __filename),
      'utf-8'
    )
    
    
    
      
      const { data:components } = matter(MarkdownDatacomp);
    

    return{
      slug2,
      components,
    }
  })
  
  
  return {
    props: {
      posts: {
        postdoc,
        postcomp

      }
    }
  }
};