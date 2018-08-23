import React, { Component } from 'react';
import Header from './components/Header';
import CreatePodcast from './components/CreatePodcast';
import EditPodcast from './components/EditPodcast';
import PodcastIndex from './components/PodcastIndex';
import ReviewIndex from './components/ReviewIndex';
import PodcastDetails from './components/PodcastDetails';
import CreateReview from './components/CreateReview';
import { fetchPodcasts, savePodcast, fetchReviews, updatePodcast, fetchOnePodcast, saveReview, deletePodcast} from './services/api';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
      reviews: [],
      createModal: 'modal',
      editModal: 'modal',
      createReviewModal: 'modal',
      selectedGenre: 'All',
      searchBar: '',
      podcastDetails: [{}],
    }
    this.fetchAllReviews = this.fetchAllReviews.bind(this);
    this.getOnePodcast = this.getOnePodcast.bind(this);
    this.createPodcast = this.createPodcast.bind(this);
    this.createReview = this.createReview.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
    this.updatePodcast = this.updatePodcast.bind(this);
    this.deletePodcast = this.deletePodcast.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    fetchPodcasts()
      .then(data => this.setState({ podcasts: data }));
  }

  // Fetches all reviews for a specific podcast
  fetchAllReviews(id, title) {
    fetchReviews(id)
      .then(data => {
        this.setState({
          reviews: data,
          podcastDetails: title
        })
      }
      );
  }

  // Rerenders the reviews after one is created
  rerenderReviews(id) {
    fetchReviews(id)
      .then(data => {
        this.setState({
          reviews: data,
        })
      }
      );
  }

  // Used to prepopulate the Edit form
  getOnePodcast(podcast) {
    fetchOnePodcast(podcast)
      .then(data => {
        this.setState({
          selectedPodcast: data
        });
        this.toggleModal('editModal');
      })
  }

  // Creates a new podcast
  createPodcast(podcast) {
    savePodcast(podcast)
      .then(data => {
        fetchPodcasts()
          .then(data => this.setState({ podcasts: data }));
      })
  }

  // Creates a new review
  createReview(review) {
    const id = this.state.podcastDetails[0].id
    saveReview(review, id)
      .then(data => {
        this.rerenderReviews(id);
      }
      );
  }

  // Used to identify the correct genre to filter by
  genreFilter(genre) {
    this.setState({
      selectedGenre: genre
    })
  }

  // Sets the content of the search bar to state
  searchBar(data) {
    this.setState({
      searchBar: data
    })
  }

  // Updates podcast and rerenders the index and details
  updatePodcast(podcast) {
    updatePodcast(podcast)
      .then(data => {
        this.setState({
          podcastDetails: [data]
        })
        fetchPodcasts()
          .then(data => this.setState({ 
            podcasts: data 
          }));
      });
  }

  // Deletes a podcast and rerenders the index
  deletePodcast(id) {
    deletePodcast(id)
      .then(data => {
        fetchPodcasts()
          .then(data => this.setState({
            podcasts: data,
            reviews: [],
            podcastDetails: [{}],
          }));
      });
  }

  // Toggles the modals on and off, takes a argument to determine which modal to toggle
  toggleModal(modal) {
    this.state[modal] === 'modal'
      ?
      this.setState({
        [modal]: 'modal is-active'
      })
      :
      this.setState({
        [modal]: 'modal'
      })
  }

  render() {
    return (
      <div className="App main-grid">
        <Header />
        <CreatePodcast onSubmit={this.createPodcast} active={this.state.createModal} toggle={this.toggleModal} />
        <CreateReview onSubmit={this.createReview} active={this.state.createReviewModal} toggle={this.toggleModal} delete={this.deleteReview} />
        <PodcastIndex view={this.fetchAllReviews} podcasts={this.state.podcasts} filter={this.state.selectedGenre} filterFunction={this.genreFilter} search={this.searchBar} />
        <ReviewIndex reviews={this.state.reviews} create={this.toggleModal} podcastSelected={this.state.podcastDetails} />
        <PodcastDetails podcast={this.state.podcastDetails} edit={this.getOnePodcast} />
         {/* Conditionally Renders the edit component if there is a podcast to edit  */}
        {this.state.selectedPodcast ?
          <EditPodcast podcast={this.state.selectedPodcast} onSubmit={this.updatePodcast} active={this.state.editModal} toggle={this.toggleModal} delete={this.deletePodcast} />
          : null}
        <Footer />
      </div>
    );
  }
}
export default App;