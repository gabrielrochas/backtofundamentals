import React from 'react';

export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository?.description ?? 'oops.. no description'}</p>
      <a href={props.repository.html_url }>see more...</a>
    </li>
  );
}
