import { SignInButton } from '../Button';
import styles from './styles.module.scss'
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt='ailta.news' />
        <nav>
          <a className={styles.active}>Home</a>
          <a>News</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
