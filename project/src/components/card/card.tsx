import type {Film} from '../../types/types';
import {AppRoute} from '../../const';

const Card = ({
  id,
  name,
  posterImage,
  previewImage,
  backgroundImage,
  backgroundColor,
  videoLink,
  previewVideoLink,
  description,
  rating,
  scoresCount,
  director,
  starring,
  runTime,
  genre,
  released,
  isFavorite,
}: Film): JSX.Element => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={posterImage} alt={name} width="280" height="175"/>
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href={`${AppRoute.Film}/${id}`}>{name}</a>
    </h3>
  </article>
);

export default Card;
