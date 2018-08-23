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
    // Filters podcast by Genre
    let filteredList = [];
    this.props.filter === 'All' ? filteredList = this.props.podcasts
      :
      filteredList = this.props.podcasts.filter(podcast => {
        return podcast.genre === this.props.filter
      })
    
      // Allows the updated podcast list to be searchable from the search bar
    let afterSearch = filteredList.filter(podcast => podcast.title.toLowerCase().includes(this.state.search.toLowerCase()));
    return (
      <div className="container-grid main podcasts">
        <h2 className="heading-1">Podcasts</h2>
        <SortButtons search={this.handleChange} filterFunction={this.props.filterFunction} searchBar={this.state.search} />
        {afterSearch.map(podcast => (
          <div className="list-container" key={podcast.id}>
            <a onClick={(e) => this.props.view(podcast.id, [podcast])}><img src={podcast.poster_url} alt="Podcast Poster"/><p className='podcastList' key={podcast.id}>{podcast.title}<br/>Creator: {podcast.creator}</p></a>
          </div>))}
      </div>
    )
  }
}

export default PodcastIndex;

