import React from 'react';

//Render reviews for a specific podcast based on podcast id
export default (props) => {
  if (props.reviews.length > 0) {
    return (
      <div className="container-grid aside-2 reviews">
        <h3 className="heading-3">Reviews<br /></h3>
        <button onClick={props.create}>Create Review</button>
        {props.reviews.map(review => (
          <div key={review.review_id}>
            <h4 className="reviews-1" key={review.review_id}>{review.username}'s <span className="reviews-2">Review:</span> <span>{review.content}</span></h4>
          </div>
        ))}
      </div>
    )
  } else if (props.podcastSelected[0].id && props.reviews.length === 0) {
    return (
      <div className="container-grid aside-2 reviews">
        <h3 className="heading-3">Reviews<br /></h3>
        <button onClick={props.create}>Create Review</button>
        <p>Be the first to review this podcast</p>
      </div>
    )
  } else {
    return (
      <div className="container-grid aside-2 reviews">
        <h3 className="heading-3">Reviews<br /></h3>
        <p>Select a podcast to view its reviews</p>
      </div>)
  }
}
