import React from 'react';

function SortButtons(props) {
    return (
        <div>
            <input value="" name="text-name" type="text" />
            <button type="button" className="btn podcastSortBtn">Name</button>
            <button type="button" className="btn podcastSortBtn">Genre</button>
            <button type="button" className="btn podcastSortBtn">Episodes</button>
            <button type="button" className="btn podcastSortBtn">Likes</button>
            <button type="button" className="btn podcastSortBtn">Dislikes<br/></button>
        </div>
    )
}
export default SortButtons;