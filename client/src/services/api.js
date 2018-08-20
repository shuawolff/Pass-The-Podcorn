const BASE_URL = 'http://localhost:3001';

export function fetchPodcasts() {
    return fetch(`${BASE_URL}/podcasts`)
      .then(resp => resp.json())
      .catch(err => {
        throw Error(err);
      });
  }
  
