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
      reviews: [],
      createModal: 'modal'
    }
    this.createPodcast = this.createPodcast.bind(this)
    this.toggleCreateModal =  this.toggleCreateModal.bind(this)
  }

  componentDidMount() {
    fetchPodcasts()
      .then(data => this.setState({podcasts:data}));

  }

  toggleCreateModal() {
    this.state.createModal === 'modal'
    ?
      this.setState({
        createModal: 'modal is-active'
      })
    :
    this.setState({
      createModal: 'modal'
    })
  }

  createPodcast(podcast) {
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
    <CreatePodcast onSubmit={this.createPodcast} active={this.state.createModal} toggle={this.toggleCreateModal}/>
    </div>
  );
}
}




export default App;