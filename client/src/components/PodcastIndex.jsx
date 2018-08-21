import React from 'react';

export default (props) => {
  return (
  <div>
    Podcast Index
      {props.podcasts.map(podcast => (
      <li key={podcast.id}>{podcast.title} {podcast.creator}</li>
      ))
      }
    </div>
  )
}

