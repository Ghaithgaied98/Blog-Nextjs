import PostHeader from "./post-header";
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';



 


export default function PostContent({post}) {
  const imgPath = `/${post.image}`
    return <article className={classes.content}>
        <PostHeader title={post.title
        } image={imgPath} />
        <ReactMarkdown>
        {post.content}
        </ReactMarkdown>
    </article>
}