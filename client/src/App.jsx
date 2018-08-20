import React, { Component } from 'react';
import PodcastIndex from './components/PodcastIndex';
import './App.css';
import { fetchPodcasts } from './services/api';
 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: []
    }
  }

componentDidMount() {
   fetchPodcasts()
  .then(data => this.setState({podcasts: data}));
}

  render() {
    return (
      <div className="App">
      <PodcastIndex podcasts={this.state.podcasts}/>
      </div>
    );
  }
}

export default App;
