import React, { Component } from 'react';
import CreatePodcast from './components/CreatePodcast';

import PodcastIndex from './components/PodcastIndex';
import { fetchPodcasts, savePodcast } from './services/api';
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
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    fetchPodcasts()
      .then(data => this.setState({podcasts:data}));

  }

  onSubmit(podcast) {
    savePodcast(podcast)
    .then(data => {
      fetchPodcasts()
      .then(data => this.setState({podcasts:data}));
  })
  }

render() {
  return (
    <div className="App">
    <PodcastIndex podcasts={this.state.podcasts} />
    <CreatePodcast onSubmit={this.onSubmit}/>
    </div>
  );
}
}




export default App;