import React from 'react';

//Render reviews for a specific podcast based on podcast id
export default (props) => {
  if (props.reviews.length > 0) {
    return (
      <div className="container-grid aside-2 reviews">
        <h3 className="heading-3">Reviews<br /></h3>
        {props.reviews.map(review => (
          <li key={review.review_id}>{review.username} - {review.content}</li>
        ))}
      </div>
    )
  } else if (props.podcastSelected[0].id && props.reviews.length === 0) {
    return (
      <div className="container-grid aside-2 reviews">
        <h3 className="heading-3">Reviews<br /></h3>
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