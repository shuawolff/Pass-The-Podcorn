import React, { Component } from 'react';

class EditPodcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.podcast.title,
      creator: this.props.podcast.creator,
      genre: this.props.podcast.genre,
      episodes: this.props.podcast.episodes,
      description: this.props.podcast.description,
      poster_url: this.props.podcast.poster_url,
      trailer_url: this.props.podcast.trailer_url,
      id: this.props.podcast.id
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Checks if the props changed and if so resets the state
    if (this.props.podcast.id !== prevProps.podcast.id) {
      this.setState({
        title: this.props.podcast.title,
        creator: this.props.podcast.creator,
        genre: this.props.podcast.genre,
        episodes: this.props.podcast.episodes,
        description: this.props.podcast.description,
        poster_url: this.props.podcast.poster_url,
        trailer_url: this.props.podcast.trailer_url,
        id: this.props.podcast.id
      })
    }
  }
  // Toggles Modal
  toggle(e) {
    e.preventDefault();
    this.props.toggle('editModal');
  }

  // Handles when edit form is submitted and resets form
  handleSubmit(evt) {
    evt.preventDefault();
    const data = {
      title: this.state.title,
      creator: this.state.creator,
      genre: this.state.genre,
      episodes: this.state.episodes,
      description: this.state.description,
      poster_url: this.state.poster_url,
      trailer_url: this.state.trailer_url,
      id: this.state.id
    }
    this.props.onSubmit(data);
    this.props.toggle('editModal');
  }

  // Handles if the delete button is clicked to delete the podcast
  delete(e) {
    e.preventDefault();
    this.props.delete(this.state.id)
    this.props.toggle('editModal');
  }

  // Changes state based on user input into form
  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  // Renders Modal to edit a podcast (using Bulma)
  render() {
    return (
      <div>
        <div className={this.props.active}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Edit Podcast</p>
              <button onClick={this.toggle} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <div>
                <form onSubmit={this.handleSubmit}>
                  <label>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Title"
                  />
                  <br />
                  <label>Creator:</label>
                  <input
                    type="text"
                    name="creator"
                    value={this.state.creator}
                    onChange={this.handleChange}
                    placeholder="Creator"
                  />
                  <br />
                  <label>Genre:</label><select
                    name="genre"
                    onChange={this.handleChange}
                    required="required">
                    <option value={this.state.genre} disabled selected hidden>{this.state.genre}</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Political">Political</option>
                    <option value="Gaming">Gaming</option>
                    <option value="True Crime">True Crime</option>
                    <option value="General">General</option>
                  </select>
                  <br />
                  <label>Episodes:</label>
                  <input
                    type="text"
                    name="episodes"
                    value={this.state.episodes}
                    onChange={this.handleChange}
                    placeholder="Number of Episodes"
                  />
                  <br />
                  <label>Description:</label>
                  <textarea
                    className='textarea'
                    id="genreText"
                    rows='2'
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="Description"
                  />
                  <br />
                  <label>Poster Url:</label>
                  <input
                    type="text"
                    name="poster_url"
                    value={this.state.poster_url}
                    onChange={this.handleChange}
                    placeholder="Poster Url"
                  />
                  <br />
                  <label>Podcast Link:</label>
                  <input
                    type="text"
                    name="trailer_url"
                    value={this.state.trailer_url}
                    onChange={this.handleChange}
                    placeholder="Podcast Link"
                  />
                  <br />
                  <br />
                  <br />
                  <footer className="modal-card-foot">
                    <button type="submit" value="Edit Podcast" className="button is-success">Save changes</button>
                    <button onClick={this.toggle} className="button">Cancel</button>
                    <button onClick={this.delete} className="button is-danger">Delete Podcast</button>
                  </footer>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div >
    );
  }
}

export default EditPodcast;