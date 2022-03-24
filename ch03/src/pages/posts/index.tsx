import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import { getAllPosts } from '../../utils/queries';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ailta News</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>22 de março de 2022</time>
            <strong>This a new post</strong>
            <p>
              lorem ipsum dolor sit amet lorem, consectetur lorem, sed diam
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem,
              consectetur lorem, sed diam lorem ipsum dolor sit amet
            </p>
          </a>
          <a href='#'>
            <time>22 de março de 2022</time>
            <strong>This a new post</strong>
            <p>
              lorem ipsum dolor sit amet lorem, consectetur lorem, sed diam
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem,
              consectetur lorem, sed diam lorem ipsum dolor sit amet
            </p>
          </a>
          <a href='#'>
            <time>22 de março de 2022</time>
            <strong>This a new post</strong>
            <p>
              lorem ipsum dolor sit amet lorem, consectetur lorem, sed diam
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem,
              consectetur lorem, sed diam lorem ipsum dolor sit amet
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()
  console.log(posts)

  return {
    props: {
      posts: posts
    }
  }
}