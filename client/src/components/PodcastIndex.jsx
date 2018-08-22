import React from 'react';
import SortButtons from './SortButtons';

export default (props) => {
  return (
  <div className="container-grid main podcasts">
    <h2 class="heading-1">Podcasts</h2>
    <SortButtons />
      {props.podcasts.map(podcast => (

    <div className="list-container" key={podcast.id}>
      <li key={podcast.id}>{podcast.title} {podcast.creator}</li>
      <button onClick={(e) => props.edit(podcast.id)}>Edit</button>
      <button onClick={(e) => props.view(podcast.id)}>View</button>
      </div>
      ))
      }

    </div>
    ))
    }
  </div>
  )
}

