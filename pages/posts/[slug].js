import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";


export default function SinglePost({post}) {
    return <PostContent post={post} />
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData,
        },
        revalidate : 600
    }
}

export function getStaticPaths() {
    const postFilenames = getPostsFiles();
    const slugs = postFilenames.map((fileName)=> fileName.replace(/\.md$/, ''))
    return {
        paths: slugs.map(slug => ({params : {slug: slug}})),
        fallback: 'blocking'
    }
}