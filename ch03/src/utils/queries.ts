import { getPrismicClient } from '../services/prismic';

const client = getPrismicClient();

export const getAllPosts = async () => {
  return client.getAllByType('post');
}

export const getSinglePost = async (slug: string) => {
  return client.getByUID('post', slug);
}