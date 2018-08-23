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
       // const options = this.parsePodcastOptions(podcasts);
        return (
            <div>
                <button onClick={this.props.toggle}>Create Review</button>
                <div className={this.props.active}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Create Review</p>
                            <button onClick={this.props.toggle} className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                            <div>
                                <form onSubmit={this.handleSubmit}>
                                    <input
                                        type="text"
                                        name="username"
                                        required="required"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        placeholder="Username"
                                    />
                                    <br />
                                    <input
                                        type="text"
                                        name="content"
                                        required="required"
                                        value={this.state.content}
                                        onChange={this.handleChange}
                                        placeholder="Review goes here"
                                    />
                                    <br />
                                    {/* <select
                                        value={this.state.podcast_id}
                                        onChange={this.handleChange}
                                        name="podcast_id"
                                    >
                                        {options.map(podcast => (
                                            <option
                                                key={podcast.value}
                                                value={podcast.value}>
                                                {podcast.display}
                                            </option>
                                        ))}
                                    </select> */}
                                    <br />
                                    <br />
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


export default CreateReview;




