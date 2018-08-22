import React, { Component } from 'react';
import SortButtons from './SortButtons';

class PodcastIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(evt) {
    this.setState({
      search: evt.target.value,
    });
  }

  render() {
    let filteredList = [];
    this.props.filter === 'All' ? filteredList = this.props.podcasts
      :
      filteredList = this.props.podcasts.filter(podcast => {
        return podcast.genre === this.props.filter
      })
    
    let afterSearch = filteredList.filter(podcast => podcast.title.toLowerCase().includes(this.state.search.toLowerCase()));

    return (
      <div className="container-grid main podcasts">
        <h2 className="heading-1">Podcasts</h2>
        <SortButtons search={this.handleChange} filterFunction={this.props.filterFunction} searchBar={this.state.search} />
        {afterSearch.map(podcast => (
          <div className="list-container" key={podcast.id}>
            <img src={podcast.poster_url} alt="Podcast Poster"/><a onClick={(e) => this.props.view(podcast.id, [podcast])}><p className='podcastList' key={podcast.id}>{podcast.title} {podcast.creator}</p></a>
            <button onClick={(e) => this.props.edit(podcast.id)}>Edit</button>
          </div>))}
      </div>
    )
  }
}

export default PodcastIndex;

