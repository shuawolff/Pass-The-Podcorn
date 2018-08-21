import React, { Component } from 'react';
 
 class CreatePodcast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '', 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state);
     console.log('Submitting', this.state);
    
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
        <h2>Create Podcast</h2>
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
          <input type="submit" value="Create Podcast" />
        </form>
      </div>

    );
   }
 }
 
 export default CreatePodcast;