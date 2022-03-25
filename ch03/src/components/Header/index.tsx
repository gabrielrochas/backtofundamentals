import { ActiveLink } from '../ActiveLink';

import { SignInButton } from '../Button';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt='ailta.news' />
        <nav>
          <ActiveLink href='/' activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href='/posts' activeClassName={styles.active}>
            <a>News</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
