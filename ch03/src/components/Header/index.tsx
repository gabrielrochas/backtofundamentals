import Link from 'next/link';

import { SignInButton } from '../Button';
import styles from './styles.module.scss'
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt='ailta.news' />
        <nav>
          <Link href='/' >
            <a className={styles.active}>Home</a>
          </Link>
          <Link href='/posts'>
          <a>News</a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
