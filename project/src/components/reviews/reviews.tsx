import { Review } from '../../types/types';
import ReviewItem from '../review/review';

type ReviewsProps = {
  reviews: Review[];
};

const Reviews = ({reviews}: ReviewsProps): JSX.Element => {
  const firstCol = reviews.slice(0, reviews.length / 2);
  const secondCol = reviews.slice(reviews.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstCol.map((review) => (<ReviewItem review={review} key={review.id}/>))}
      </div>
      <div className="film-card__reviews-col">
        {secondCol.map((review) => (<ReviewItem review={review} key={review.id}/>))}
      </div>
    </div>
  );
};

export default Reviews;
