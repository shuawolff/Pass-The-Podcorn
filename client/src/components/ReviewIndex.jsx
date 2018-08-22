import React from 'react';

//Render reviews for a specific podcast based on podcast id

  export default (props) => {
    return (
    <div className="container-grid main podcasts">
      <h2 className="heading-1">Reviews</h2>
        {props.reviews.map(review => (     
        <li key={review.review_id}>{review.username} {review.content}</li>
        ))}
      </div>
      )
      }

