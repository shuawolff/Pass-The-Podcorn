import React, { Component } from 'react';

class CreateReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  // Toggles Modal
  toggle(e) {
    e.preventDefault();
    this.props.toggle('createReviewModal');
  }

  // Handles when form is submitted and resets form
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      username: '',
      content: '',
    })
    this.props.toggle('createReviewModal');
  }

  // Changes state based on user input into form
  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  // Renders Modal to create a new review (using Bulma)
  render() {
    return (
      <div>
        <div className={this.props.active}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Create Review</p>
              <button onClick={this.toggle} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <div>
                <form onSubmit={this.handleSubmit}>
                  <label>Username:</label>
                  <input
                    type="text"
                    name="username"
                    required="required"
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder="Username"
                  />
                  <br />
                  <label>Review:</label>
                  <textarea
                    className='textarea'
                    id="genreText"
                    rows='2'
                    type="text"
                    name="content"
                    required="required"
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder="Review goes here"
                  />
                  <br />
                  <footer className="modal-card-foot">
                    <button type="submit" value="Create Podcast" className="button is-success">Save changes</button>
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


export default CreateReview;




