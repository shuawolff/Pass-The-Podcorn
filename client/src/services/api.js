const BASE_URL = 'http://localhost:3001';

export function fetchPodcasts() {
    return fetch(`${BASE_URL}/podcasts`)
      .then(resp => resp.json())
      .catch(err => {
        throw Error(err);
      });
  }

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
  }
  
