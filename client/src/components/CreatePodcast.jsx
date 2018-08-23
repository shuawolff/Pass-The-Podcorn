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
      poster_url: 'https://static.thenounproject.com/png/187803-200.png',
      trailer_url: '' 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    e.preventDefault();
    this.props.toggle('createModal')
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    console.log('Submitting', this.state);
    this.setState({
      title: '',
      creator: '',
      genre: '',
      episodes: '',
      description: '',
      trailer_url: '',
      poster_url: 'https://static.thenounproject.com/png/187803-200.png'
    })
    this.props.toggle('createModal');
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
        <button onClick={this.toggle}>Create Podcast</button>
        <div className={this.props.active}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Create Podcast</p>
              <button onClick={this.toggle} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <div>
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
                  <br />
                  <select 
                  name="genre"
                  onChange={this.handleChange}
                  required="required"
                  >
                    <option value="" disabled selected hidden>Select Genre</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Political">Political</option>
                    <option value="Gaming">Gaming</option>
                    <option value="True Crime">True Crime</option>
                    <option value="General">General</option>
                  </select>
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
                  <br />
                  <br />
                  <footer className="modal-card-foot">
                    <button type="submit" value="Create Podcast" className="button is-success">Create Podcast</button>
                    <button onClick={this.toggle} className="button">Cancel</button>
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