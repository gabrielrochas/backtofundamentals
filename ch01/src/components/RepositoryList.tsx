import React, { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';

const url = 'https://api.github.com/users/gabrielrochas/repos';

interface Repository {
  name: string,
  description: string,
  html_url: string
}

export function RepositoryList() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(repos);

  return (
    <section className='repository-list'>
      <ul>
        {repos.map((repos) => (
          <RepositoryItem repository={repos} key={repos.name}/>
        ))}
      </ul>
    </section>
  );
}
