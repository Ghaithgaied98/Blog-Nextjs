import Link from 'next/link'
import Logo from './logo.js'
import classes from './main-navigation.module.css'


export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <Link href="/">
                <a> <Logo/> </a>
            </Link>
        <nav>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}