const BASE_URL = 'http://localhost:3001';

export function fetchPodcasts() {
    return fetch(`${BASE_URL}/podcasts`)
      .then(resp => resp.json())
      .catch(err => {
        throw Error(err);
      });
  };

export function fetchOnePodcast(id){
  return fetch(`${BASE_URL}/podcasts/${id}`)
  .then(resp => resp.json())
  .catch(err => {
    console.log(err);
    throw Error(err);
    
  });
};

  export function savePodcast(podcast) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(podcast),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    return fetch(`${BASE_URL}/podcasts`, opts)
      .then(resp => resp.json());
  };


  export function updatePodcast(podcast) {
    const opts ={
      method: 'PUT',
      body: JSON.stringify(podcast),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${BASE_URL}/podcasts/${podcast.id}`, opts)
    .then(resp => resp.json());
  };

  export function fetchReviews(podcast_id) {
    return fetch(`${BASE_URL}/reviews/podcast/${podcast_id}`)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    })
  };


  export function deletePodcast(podcast_id) {
    const opts ={
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${BASE_URL}/podcasts/${podcast_id}`, opts)
    .then(resp => "deleted")
    .catch(err => {
      throw Error(err);
    })
  };
