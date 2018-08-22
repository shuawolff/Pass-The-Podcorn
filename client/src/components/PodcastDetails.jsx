import React from 'react';

//Render reviews for a specific podcast based on podcast id
export default (props) => {
    debugger
    return (
        <div className="container-grid aside-1 reviews">
            <h3 className="heading-3">Podcast Details<br /></h3>
            <button onClick={(e) => props.edit(props.podcast[0].id)}>Edit</button>
            <li>{props.podcast[0].title} {props.podcast[0].description}</li>
        </div>
    )
}
