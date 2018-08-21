import React, { Component } from 'react';
import CreatePodcast from './components/CreatePodcast';

import PodcastIndex from './components/PodcastIndex';
import { fetchPodcasts } from './services/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'Podcasts',
      selectedReview: '',
      podcasts: [],
      reviews: []
    }
  }

  componentDidMount() {
    fetchPodcasts()
      .then(data => this.setState({podcasts:data}));

  }

render() {
  return (
    <div className="App">
    <PodcastIndex podcasts={this.state.podcasts} />
    <CreatePodcast />
    </div>
  );
}
}




export default App;