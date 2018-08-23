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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle =  this.toggle.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
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
    this.props.toggle();
  }

  toggle(e) {
    e.preventDefault();
    this.props.toggle('editModal');
  }

  delete(e) {
    debugger
    e.preventDefault();
    this.props.delete(this.state.id)
    this.props.toggle();
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  onClick(evt) {
    const id = evt.target.podcast_id
    this.props.deletePodcast(id)
  }

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
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Title"
                  />
                  <br />
                  <input
                    type="text"
                    name="creator"
                    value={this.state.creator}
                    onChange={this.handleChange}
                    placeholder="Creator"
                  />
                  <br />
                  <input
                    type="text"
                    name="genre"
                    value={this.state.genre}
                    onChange={this.handleChange}
                    placeholder="Genre"
                  />
                  <br />
                  <input
                    type="text"
                    name="episodes"
                    value={this.state.episodes}
                    onChange={this.handleChange}
                    placeholder="Episodes"
                  />
                  <br />
                  <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="Description"
                  />
                  <br />
                  <input
                    type="text"
                    name="poster_url"
                    value={this.state.poster_url}
                    onChange={this.handleChange}
                    placeholder="Poster Url"
                  />
                  <br />
                  <input
                    type="text"
                    name="trailer_url"
                    value={this.state.trailer_url}
                    onChange={this.handleChange}
                    placeholder="Trailer Url"
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