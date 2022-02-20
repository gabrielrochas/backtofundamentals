import React from 'react';

export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.description ?? 'description'}</p>
      <a href={props.repository?.url ?? '#'}>more...</a>
    </li>
  );
}
