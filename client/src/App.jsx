import React, { Component } from 'react';
import logo from './logo.svg';
import PodcastIndex from './PodcastIndex';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts = []
    }
  }

  render() {
    return (
      <div className="App">
      <PodcastIndex />
      </div>
    );
  }
}

export default App;
