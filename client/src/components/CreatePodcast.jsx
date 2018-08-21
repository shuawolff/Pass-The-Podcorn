import React, { Component } from 'react';

class CreatePodcast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      creator: '',
      genre: '',
      episodes: '',
      description: '',
      poster_url: '',
      trailer_url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    console.log('Submitting', this.state);
    this.props.toggle();
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
        <button onClick={this.props.toggle}>Create Podcast</button>
        <div className={this.props.active}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Create Podcast</p>
              <button onClick={this.props.toggle} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <div>
                {/* <h2>Create Podcast</h2> */}
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="title"
                    required="required" 
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Title"
                  />
                  <br/>
                  <input
                    type="text"
                    name="creator"
                    required="required"
                    value={this.state.creator}
                    onChange={this.handleChange}
                    placeholder="Creator"
                  />
                  <br/>
                  <input
                    type="text"
                    name="genre"
                    required="required"
                    value={this.state.genre}
                    onChange={this.handleChange}
                    placeholder="Genre"
                  />
                  <br/>
                  <input
                    type="number"
                    name="episodes"
                    required="required"
                    value={this.state.episodes}
                    onChange={this.handleChange}
                    placeholder="Episodes"
                  />
                  <br/>
                  <input
                    type="text"
                    name="description"
                    required="required"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="Description"
                  />
                  <br/>
                  <input
                    type="text"
                    name="poster"
                    value={this.state.poster_url}
                    onChange={this.handleChange}
                    placeholder="Poster url"
                  />
                  <br/>
                  <input
                    type="text"
                    name="trailer"
                    value={this.state.trailer_url}
                    onChange={this.handleChange}
                    placeholder="Trailer url"
                  />
                  <br/>
                  <br/>
            <footer className="modal-card-foot">
              <button type="submit" value="Create Podcast" className="button is-success">Save changes</button>
              <button onClick={this.props.toggle} className="button">Cancel</button>
            </footer>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePodcast;