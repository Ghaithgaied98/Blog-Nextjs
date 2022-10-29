import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const foramttedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "long",
  });
  
  const path = `/posts/${slug}`;
  const imgToRender = `/${image}`;
  return (
    <li className={classes.post}>
      <Link href={path}>
        <a>
          <Image src={imgToRender} alt={slug} width={300} height={200} layout = 'responsive' />
          <div className={classes.image}></div>
          <div className={classes.content}>
            <h3> {title}</h3>
            <time>{foramttedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
