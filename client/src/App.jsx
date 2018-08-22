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
      selectedPodcast: ''
      
    }
    this.createPodcast = this.createPodcast.bind(this)
    this.toggleCreateModal =  this.toggleCreateModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.updatePodcast =  this.updatePodcast.bind(this);
    this.fetchAllReviews = this.fetchAllReviews.bind(this);
  }

componentDidMount() {
   fetchPodcasts()
  .then(data => this.setState({podcasts: data}));

     //fetchOnePodcast(1)
     //.then(data =>  this.setState({podcasts:data}));*/
  }

  fetchAllReviews(id) {
    fetchReviews(id) 
    .then(data => {console.log(data); this.setState({reviews: data})});
  }



  updatePodcast(podcast) {
    fetchOnePodcast(podcast)
    .then(data => {
      this.setState({
        selectedPodcast:data
      });
    })
  }

fet

  

  onSubmit(podcast) {
    debugger
    savePodcast(podcast)
    .then(data => {
      fetchPodcasts()
      .then(data => this.setState({podcasts:data}));
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
      .then(data => this.setState({podcasts:data}));
  })
  }

render() {
  return (

    <div className="App container-grid">
    <Header />
    <PodcastIndex edit={this.updatePodcast} view={this.fetchAllReviews} podcasts={this.state.podcasts} />
    <CreatePodcast onSubmit={this.createPodcast} active={this.state.createModal} toggle={this.toggleCreateModal}/>
    {this.state.selectedPodcast ?
    <EditPodcast podcast={this.state.selectedPodcast} onSubmit={this.updatePodcast}/>
    : null}

    <div class="container-grid aside-1 podcastDetails">
        <h3 class="heading-2">Podcast Details<br/>
        </h3>
        <ul class="list-container">
          <li class="list-item-container"></li>
          <li class="list-item-container"></li>
          <li class="list-item-container"></li>
        </ul>
    </div>
    <div class="container-grid aside-2 reviews">
        <h3 class="heading-3">Reviews<br/>
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