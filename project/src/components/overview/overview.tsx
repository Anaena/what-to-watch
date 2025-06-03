type OverviewProps = {
  rating: number;
  scoresCount: number;
  description: string;
  director: string;
  starring: string[];
};

const setRating = (status:number) => {
  if (status >= 0 && status < 3) {
    return 'Bad';
  } else if (status >= 3 && status < 5) {
    return 'Normal';
  } else if (status >= 5 && status < 8) {
    return 'Good';
  } else if (status >= 8 && status < 10) {
    return 'Very good';
  } else if (status === 10) {
    return 'Awesome';
  }
};

const Overview = ({rating, scoresCount, description, director, starring}:OverviewProps) => (
  <>
    <div className="film-rating">
      <div className="film-rating__score">{rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{setRating(rating)}</span>
        <span className="film-rating__count">{`${scoresCount} ratings`}</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{description}</p>

      <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

      <p className="film-card__starring">{<strong>{`Starring: ${starring.join(', ')}`}</strong>}</p>
    </div>
  </>
);

export default Overview;
