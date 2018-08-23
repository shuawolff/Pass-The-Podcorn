# Pass-The-Podcorn
Pass the Podcorn is a podcast review app where users can listen to trailers for podcasts and if they’ve already seen the podcast, they can leave a review! They will have full CRUD abilities with whatever reviews they’ve created and can also add new podcasts.  Users can also leave likes or ratings on different reviews.


## Motivation

We wanted a resource to share podcasts. We thought this would be a cool project to work on for our group project considering that all of us really love listening to them. 

## General Approach

For this project, we decided that starting out with a basic ERD would be the easiest way to approach it. After drawing out an ERD and stating the relationships between the two tables, we broke our app into two components: An app directory with files to control the back-end and a client directory with files to control the front end. For our backend, we set up a seed file and schema file, where we hard-coded data into to build our database for testing. 

From there we set about building up the app where we would define our models, controllers and routes for CRUD on both podcasts and reviews.

For the client side, which will be our front-end we used create-react-app to create our Pass The Podcorn app. 

After creating both a functional front-end and back-end, we used CSS and Bulma to style and format our app.


## App Link


## MVP
1. CRUD functionality for podcasts
1. CRUD functionality for reviews

## ICE-Box

1. User/Authentication
1. Reccomended Podcasts
1. Trailer/Podcast synopsis


## Code Example
```javascript

const db =  require('../models/podcasts');

function showAll(req, res) {
    db.allPodcasts()
    .then(podcasts => {
        res.json({
            message: 'ok',
            data: { podcasts },
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
    });
};


```


## Appshots & Wireframes
![Wireframe](/wireframes/ERD.png)
![Wireframe](/wireframes/ShowAllShowOne.png)
![Wireframe](/wireframes/CreatePodcast.png)
![Wireframe](/wireframes/PodcastVotes.png)
![Wireframe](/wireframes/SortByGenre.png)
![Wireframe](/wireframes/PodcastReview.png)




More can be found in the Wireframes folder.


## User Stories
1. As a person who doesn't like to read stories, I would like to find and listen to people tell stories on podcasts.. 
1. As a user I want to see a list of reviews for a certain podcast of my choosing. 
1. As a person with a long commute to work I would like to find new podcasts to listen to on the subway.
1. As an avid podcast listener I would like to share my love for podcasts by writing reviews and sharing favorite moments from my favorite podcasts.

1. As a user I want to see a collection of podcasts.
1. As a user I want to sort the podcasts by genre.
1. As a user I want to see a description of each podcast.
1. As a user I want to see reviews of a podcast.
1. As a user I want to add / edit / delete a podcast.
1. As a user I want to review a podcast.


## Built with

* Visual Studio Code
* EJS
* Express
* Morgan
* Heroku
* React
* React-dom
* React-scripts
* Cors
* Nodemon
* PG-Promise
* Body-Parser

 

## How to Use:
To test it out yourself, feel free to fork and clone this repo.

## Unsolved Problems:
1. User Authentication


### Things to be added later:
1. User Authentication
1. Thumbs up and down for reviews
1. Delete and edit reviews with user authentication



## Credits

* https://www.buzzfeed.com/scottybryan/27-podcasts-you-need-to-start-listening-to-in-2018?utm_term=.jaD2oaJDnV#.jibXyAB40p

* 


## License

GA © Ashley Thompson, Daylan Seid, William Wilson, Samatha Persad, Shua Wolff
