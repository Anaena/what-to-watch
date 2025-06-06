import {Review} from '../../types/types';

type CommentProps = {
  review: Review;
}

const ReviewItem = ({review}: CommentProps): JSX.Element => {
  const {comment, date, rating, user} = review;
  const forDateTime = date.split('T')[0];

  const formatted = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={forDateTime}>{formatted}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

export default ReviewItem;
