import AllPosts from "../../components/all-posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";

export default function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
