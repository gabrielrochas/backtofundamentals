import React from 'react';
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';

const repository = {
  name: 'Gabriel',
  description: 'my repository',
  url: 'https://github.com/gabrielrochas',
};

export function RepositoryList() {
  return (
    <section className='repository-list'>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
