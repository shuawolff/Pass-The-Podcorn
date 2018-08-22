import React from 'react';

//Render reviews for a specific podcast based on podcast id

export default (props) => {
  return (
    <div className="container-grid aside-2 reviews">
      <h3 className="heading-3">Reviews<br /></h3>
      {props.reviews.map(review => (
        <li key={review.review_id}>{review.username} - {review.content}</li>
      ))}
    </div>
  )
}

