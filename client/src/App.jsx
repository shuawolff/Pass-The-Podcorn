import React, { Component } from 'react';
import CreatePodcast from './components/CreatePodcast';
import Header from './components/Header';
import EditPodcast from './components/EditPodcast';
import PodcastIndex from './components/PodcastIndex';
import ReviewIndex from './components/ReviewIndex';
import PodcastDetails from './components/PodcastDetails';
import { fetchPodcasts, savePodcast, fetchReviews, updatePodcast, fetchOnePodcast, deletePodcast } from './services/api';

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
      selectedPodcast: '',
      createModal: 'modal',
      editModal: 'modal',
      selectedGenre: 'All',
      searchBar: '',
      podcastDetails: [{}],
    }

    this.createPodcast = this.createPodcast.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.getOnePodcast = this.getOnePodcast.bind(this);
    this.fetchAllReviews = this.fetchAllReviews.bind(this);
    this.updatePodcast = this.updatePodcast.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.deletePodcast = this.deletePodcast.bind(this);
    this.toggleModal =  this.toggleModal.bind(this);
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
      })}
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

  genreFilter(genre) {
    this.setState({
      selectedGenre: genre
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
          podcasts: data ,
          reviews: [],
          podcastDetails: [{}],
        }));
        });
      }

    searchBar(data) {
      this.setState({
        searchBar: data
      })
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

  createPodcast(podcast) {
    savePodcast(podcast)
      .then(data => {
        fetchPodcasts()
          .then(data => this.setState({ podcasts: data }));
      })
  }
  
  render() {
    return (
      <div className="App main-grid">
        <Header />
        <CreatePodcast onSubmit={this.createPodcast} active={this.state.createModal} toggle={this.toggleModal} />
        <PodcastIndex edit={this.getOnePodcast} view={this.fetchAllReviews} podcasts={this.state.podcasts} filter={this.state.selectedGenre} filterFunction={this.genreFilter} search={this.searchBar}/>
        <ReviewIndex reviews={this.state.reviews} podcastSelected={this.state.podcastDetails}/>
        <PodcastDetails podcast={this.state.podcastDetails} edit={this.getOnePodcast} />
        {this.state.selectedPodcast ?
          <EditPodcast podcast={this.state.selectedPodcast} onSubmit={this.updatePodcast} active={this.state.editModal} toggle={this.toggleModal} delete={this.deletePodcast}/>
          : null}
    <Footer />
      </div>
    );
  }
}

export default App;