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
    <div className="w-full overflow-x-hidden bg-skin-base">
      <Head>
        {/* <title>{posts.frontmatter.title}</title> */}
        <meta name="description" content="Tailui a free and open source components library for Tailwind css." />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Nav/>
      <div className='w-full lg:w-[1480px] h-full flex  m-auto'>
        <div className='h-screen w-full flex justify-center'>
        <Link href={'/components/buttons'} passHref><button className="py-1 px-6 bg-cl-blue text-white text-base m-auto w-36">Components</button>
        </Link>
        </div>
        
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