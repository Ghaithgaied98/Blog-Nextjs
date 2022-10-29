import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
          <div className={classes.image}>
              <Image src='/images/lknd.jpg' alt='this is me :)' width={300} height={300} />
          </div>
      <h1>Hi, Im Ghaith</h1>
      <p>
        I blog about web developement - especially frontend frameworks like
        Reactjs , Nextjs
          </p>
          
    </section>
  );
}
