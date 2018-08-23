import React, { Component } from 'react';
import Header from './components/Header';
import CreatePodcast from './components/CreatePodcast';
import EditPodcast from './components/EditPodcast';
import PodcastIndex from './components/PodcastIndex';
import ReviewIndex from './components/ReviewIndex';
import PodcastDetails from './components/PodcastDetails';
import CreateReview from './components/CreateReview';
import { fetchPodcasts, savePodcast, fetchReviews, updatePodcast, fetchOnePodcast, saveReview, deletePodcast } from './services/api';
import './App.css';
import Footer from './components/Footer';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'Podcasts',
      selectedReview: '',
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
    this.searchBar = this.searchBar.bind(this);
    this.updatePodcast = this.updatePodcast.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleCreateReviewModal = this.toggleCreateReviewModal.bind(this);
    this.deletePodcast = this.deletePodcast.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }


  componentDidMount() {
    fetchPodcasts()
      .then(data => this.setState({ podcasts: data }));
  }

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

  rerenderReviews(id) {
    fetchReviews(id)
      .then(data => {
        this.setState({
          reviews: data,
        })
      }
      );
  }

  getOnePodcast(podcast) {
    fetchOnePodcast(podcast)
      .then(data => {
        this.setState({
          selectedPodcast: data
        });
        this.toggleModal('editModal');
      })
  }

  createPodcast(podcast) {
    savePodcast(podcast)
      .then(data => {
        fetchPodcasts()
          .then(data => this.setState({ podcasts: data }));
      })
  }

  createReview(review) {
    const id = this.state.podcastDetails[0].id
    saveReview(review, id)
      .then(data => {
        this.rerenderReviews(id);
      }
      );
  }

  genreFilter(genre) {
    this.setState({
      selectedGenre: genre
    })
  }

  searchBar(data) {
    this.setState({
      searchBar: data
    })
  }

  updatePodcast(podcast) {
    updatePodcast(podcast)
      .then(data => {
        fetchPodcasts()
          .then(data => this.setState({ podcasts: data }));
      });
  }

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

  onSubmit(podcast) {
    savePodcast(podcast)
      .then(data => {
        fetchPodcasts()
          .then(data => this.setState({ podcasts: data }));
      })
  }

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

  toggleCreateReviewModal() {
    this.state.createReviewModal === 'modal'
      ?
      this.setState({
        createReviewModal: 'modal is-active'
      })
      :
      this.setState({
        createReviewModal: 'modal'
      })
  }


  render() {
    return (
      <div className="App main-grid">
        <Header />
        <CreatePodcast onSubmit={this.createPodcast} active={this.state.createModal} toggle={this.toggleModal} />
        <CreateReview onSubmit={this.createReview} active={this.state.createReviewModal} toggle={this.toggleCreateReviewModal} />
        <PodcastIndex edit={this.getOnePodcast} view={this.fetchAllReviews} podcasts={this.state.podcasts} filter={this.state.selectedGenre} filterFunction={this.genreFilter} search={this.searchBar} />
        <ReviewIndex reviews={this.state.reviews} create={this.toggleCreateReviewModal} podcastSelected={this.state.podcastDetails} />
        <PodcastDetails podcast={this.state.podcastDetails} edit={this.getOnePodcast} /> {this.state.selectedPodcast ?
        <EditPodcast podcast={this.state.selectedPodcast} onSubmit={this.updatePodcast} active={this.state.editModal} toggle={this.toggleModal} delete={this.deletePodcast} />
          : null}
        <Footer />
      </div>
    );
  }
}
export default App;