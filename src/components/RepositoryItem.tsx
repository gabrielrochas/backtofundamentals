import React from 'react';

interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string
  }

}
export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description ?? 'oops.. no description'}</p>
      <a href={repository.html_url}>see more...</a>
    </li>
  );
}
