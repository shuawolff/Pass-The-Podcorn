import React from 'react';

export default (props) => {
  return (
  <div>
    Podcast Index
      {props.podcasts.map(podcast => (
      <div>
      <li key={podcast.id}>{podcast.title} {podcast.creator}</li>
      <button onClick={(e) => props.edit(podcast.id)}>Edit</button>
      </div>
      ))
      }
    </div>
  )
}

