import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'


export default function docPage({
    frontmatter: {title, date, Author},
    slug,
    content
}) {
    const htmlCont = marked.parse(content);
  return (
    <>
    <div>{title}</div>
    <div dangerouslySetInnerHTML={{__html: htmlCont}}></div>
    </>
  )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts/components'))
    const paths = files.map(__filename => ({
        params: {
            slug: __filename.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({params: { slug }}) {
    const Markedwithmeta = fs.readFileSync(path.join('posts/components', slug + '.md'), 'utf-8')
    const {data: frontmatter, content} = matter(Markedwithmeta);
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}
