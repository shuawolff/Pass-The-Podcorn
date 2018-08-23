import React from 'react';

function SortButtons(props) {
    return (
        <div className="sortBtnDiv">
            <input className="searchInput" onChange={props.search} value={props.searchBar} name="text-name" type="text" placeholder="Search Genre" />
            <button onClick={e => props.filterFunction('All')} type="button" className="btn podcastSortBtn">All</button>
            <button onClick={e => props.filterFunction('Gaming')} type="button" className="btn podcastSortBtn">Gaming</button>
            <button onClick={e => props.filterFunction('True Crime')} type="button" className="btn podcastSortBtn">True Crime</button>
            <button onClick={e => props.filterFunction('Horror')} type="button" className="btn podcastSortBtn">Horror</button>
            <button onClick={e => props.filterFunction('Comedy')} type="button" className="btn podcastSortBtn">Comedy</button>
            <button onClick={e => props.filterFunction('General')} type="button" className="btn podcastSortBtn">General</button>
            <button onClick={e => props.filterFunction('Political')} type="button" className="btn podcastSortBtn">Political</button>
        </div>
    )
}
export default SortButtons;