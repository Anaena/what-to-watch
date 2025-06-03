type DetailsProps = {
  runTime: number;
  released: number;
  genre: string;
  director: string;
  starring: string[];
};

const calcRunTime = (runTime: number): string => {
  const hours = Math.floor(runTime / 60);
  const minutes = runTime - hours * 60;
  return `${hours}h ${minutes}m`;
};

const Details = ({runTime, genre, released, director, starring}: DetailsProps) => (
  <div className="film-card__text film-card__row">
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Director</strong>
        <span className="film-card__details-value">{director}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Starring</strong>
        <span className="film-card__details-value">
          {starring.map((person) => (
            <>
              {person} <br />
            </>
          ))}
        </span>
      </p>
    </div>

    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Run Time</strong>
        <span className="film-card__details-value">{calcRunTime(runTime)}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Genre</strong>
        <span className="film-card__details-value">{genre}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Released</strong>
        <span className="film-card__details-value">{released}</span>
      </p>
    </div>
  </div>
);

export default Details;
