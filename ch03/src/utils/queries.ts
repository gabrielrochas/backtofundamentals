import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';

const client = getPrismicClient();

export const getAllPosts = async () => {
  return client.getAllByType('post');
}

export const getSinglePost = async (uid: string) => {
  return client.getByID(uid)
}