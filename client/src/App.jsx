import React, { Component } from 'react';
import CreatePodcast from './components/CreatePodcast';
import Header from './components/Header';
import EditPodcast from './components/EditPodcast';
import PodcastIndex from './components/PodcastIndex';
import { fetchPodcasts, savePodcast, fetchReviews, updatePodcast, fetchOnePodcast } from './services/api';
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
      selectedPodcast: '',
      selectedGenre: 'All',
      searchBar: '',

    }
    this.createPodcast = this.createPodcast.bind(this)
    this.toggleCreateModal = this.toggleCreateModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.getOnePodcast = this.getOnePodcast.bind(this);
    this.fetchAllReviews = this.fetchAllReviews.bind(this);
    this.updatePodcast = this.updatePodcast.bind(this);
    this.toggleEditModal =  this.toggleEditModal.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
    this.searchBar = this.searchBar.bind(this);
  }

  componentDidMount() {
    fetchPodcasts()
      .then(data => this.setState({ podcasts: data }));
  }

  fetchAllReviews(id) {
    fetchReviews(id)
      .then(data => {this.setState({ reviews: data }) });
  }
  
  toggleEditModal() {
    this.state.editModal === 'modal'
      ?
      this.setState({
        editModal: 'modal is-active'
      })
      :
      this.setState({
        editModal: 'modal'
      })
  }

  getOnePodcast(podcast) {
    fetchOnePodcast(podcast)
      .then(data => {
        this.setState({
          selectedPodcast: data
        });
        this.toggleEditModal();
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

  toggleCreateModal() {
    this.state.createModal === 'modal'
      ?
      this.setState({
        createModal: 'modal is-active'
      })
      :
      this.setState({
        createModal: 'modal'
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

      <div className="App container-grid">
        <Header />
        <CreatePodcast onSubmit={this.createPodcast} active={this.state.createModal} toggle={this.toggleCreateModal} />
        <PodcastIndex edit={this.getOnePodcast} view={this.fetchAllReviews} podcasts={this.state.podcasts} filter={this.state.selectedGenre} filterFunction={this.genreFilter} search={this.searchBar}/>
        {this.state.selectedPodcast ?
          <EditPodcast podcast={this.state.selectedPodcast} onSubmit={this.updatePodcast} active={this.state.editModal} toggle={this.toggleEditModal}/>
          : null}

        <div class="container-grid aside-1 podcastDetails">
          <h3 class="heading-2">Podcast Details<br />
          </h3>
          <ul class="list-container">
            <li class="list-item-container"></li>
            <li class="list-item-container"></li>
            <li class="list-item-container"></li>
          </ul>
        </div>
        <div class="container-grid aside-2 reviews">
          <h3 class="heading-3">Reviews<br />
          </h3>
          <ul class="list-container">
            <li class="list-item-container"></li>
            <li class="list-item-container"></li>
            <li class="list-item-container"></li>
          </ul>
        </div>
        <Footer />

        {/* {<ReviewList reviews={this.state.reviews} handleDeleteClick={this.handleDeleteClick} /> } */}

      </div>
    );
  }
}







export default App;