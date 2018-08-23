import React from 'react';

//Render reviews for a specific podcast based on podcast id
export default (props) => {
    if (props.podcast[0].id) {
        return (
            <div className="container-grid aside-1 podcastDetails">
                <h3 className="heading-3">Podcast Details<br /></h3>
                <button className='button' onClick={(e) => props.edit(props.podcast[0].id)}>Edit Podcast</button>
                <li>{props.podcast[0].title} {props.podcast[0].description}</li>
            </div>)
    } else {
        return (
            <div className="container-grid aside-1 podcastDetails">
                <h3 className="heading-3">Podcast Details<br /></h3>
                <p>Select a podcast to view details and edit</p>
            </div>)
    }
}
