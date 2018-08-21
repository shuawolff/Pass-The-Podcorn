import React, { Component } from 'react';
 
 class EditPodcast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.podcast.title,
      creator: this.props.podcast.creator,
      genre: this.props.podcast.genre,
      episodes: this.props.podcast.episodes,
      description:this.props.podcast.description,
      poster_url: this.props.podcast.poster_url,
      trailer_url: this.props.podcast.trailer_url 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  const data = {
    title: this.state.title,
    creator: this.state.creator,
    genre: this.state.genre,
    episodes: this.state.episodes,
    description: this.state.description,
    poster_url: this.state.poster_url,
    trailer_url: this.state.trailer_url
  }
   this.props.onSubmit(data);
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
     return (
      <div>
        <h2>Edit Podcast</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title} 
            onChange={this.handleChange} 
            placeholder="Title"
          />
          <input
            type="text"
            name="creator"
            value={this.state.creator} 
            onChange={this.handleChange} 
            placeholder="Creator"
          />
          <input
            type="text"
            name="genre"
            value={this.state.genre} 
            onChange={this.handleChange} 
            placeholder="Genre"
          />
          <input
            type="text"
            name="episodes"
            value={this.state.episodes} 
            onChange={this.handleChange} 
            placeholder="Episodes"
          />
          <input
            type="text"
            name="description"
            value={this.state.description} 
            onChange={this.handleChange} 
            placeholder="Description"
          />
          <input
            type="text"
            name="poster"
            value={this.state.poster_url} 
            onChange={this.handleChange} 
            placeholder="Poster url"
          />
          <input
            type="text"
            name="trailer"
            value={this.state.trailer_url} 
            onChange={this.handleChange} 
            placeholder="Trailer url"
          />
          <input type="submit" value="Edit Podcast" />
          <input type="submit" value="Delete Podcast" />
        </form>
      </div>
    );
   }
 }
 
 export default EditPodcast;