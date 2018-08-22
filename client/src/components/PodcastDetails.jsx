import React from 'react';

//Render reviews for a specific podcast based on podcast id

export default (props) => {
    return (
        <div className="container-grid aside-1 reviews">
            <h3 className="heading-3">Podcast Details<br />
            </h3>
            <button onClick={(e) => props.edit(props.podcast.id)}>Edit</button>
            <p>{props.podcast.title} {props.podcast.description}</p>
        </div>
    )
}
