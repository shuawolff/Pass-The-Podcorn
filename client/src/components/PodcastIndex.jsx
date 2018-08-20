import React from 'react';

export default (props) => {
  console.log(props);
  return (
  <div>
    Podcast Index
    <ul>
      {props.podcasts.map(podcast => (
      <li key={podcast.id}>{podcast.title} {podcast.creator}</li>
      ))
      }
    </ul>
    </div>
  )
}

