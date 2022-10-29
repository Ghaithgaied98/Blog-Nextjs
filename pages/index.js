import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/Hero";
import { getFeaturedPosts } from "../helpers/posts-util";


export default function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts = {props.posts} />
    </Fragment>
  );
}


export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts : featuredPosts
    } 
  }
}