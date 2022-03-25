import { GetStaticProps } from 'next';
import Head from 'next/head';
import { asText } from '@prismicio/helpers';
import { getAllPosts } from '../../utils/queries';
import styles from './styles.module.scss';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};
interface Posts {
  posts: Post[];
}

export default function Posts({ posts }: Posts) {
  return (
    <>
      <Head>
        <title>Posts | Ailta News</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <a href='#' key={post.title}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllPosts();

  const posts = data.map((post) => {
    return {
      slug: post.uid,
      title: asText(post.data.title),
      excerpt:
        post.data.content.find((content) => content.type === 'paragraph')
          ?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleString('en', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
