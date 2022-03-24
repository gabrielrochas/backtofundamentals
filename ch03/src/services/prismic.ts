import * as prismic from '@prismicio/client';
import sm from '../../sm.json';

const apiEndpoint = sm.apiEndpoint;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;


export function getPrismicClient() {
  const client = prismic.createClient(apiEndpoint, {
    accessToken,
  });

  return client;
}
