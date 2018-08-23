import React from 'react';

//Render reviews for a specific podcast based on podcast id
export default (props) => {
    if (props.podcast[0].id) {
        return (
            <div className="container-grid aside-1 podcastDetails">
                <h3 className="heading-3">Podcast Details<br /></h3>
                <img className="podcastThumb" src={props.podcast[0].poster_url} alt="Podcast Poster" />
                <br />
                <br />
                <button className='button' onClick={(e) => props.edit(props.podcast[0].id)}>Edit Podcast</button>
                <br />
                <h4>Podcast: <span>{props.podcast[0].title}</span></h4>
                <h4>Number of Episodes: <span>{props.podcast[0].episodes}</span></h4>
                <h4>Description: <span>{props.podcast[0].description}</span></h4>
                <br />
                <a href={props.podcast[0].trailer_url}>Click here for podcast</a>
            </div>)
    } else {
        return (
            <div className="container-grid aside-1 podcastDetails">
                <h3 className="heading-3">Podcast Details<br /></h3>
                <p>Select a podcast to view details and edit</p>
            </div>)
    }
}
