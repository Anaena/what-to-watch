import {useAppSelector} from '../../hooks';
import { getSimilarFilms } from '../../store/site-data/selectors';
import Card from '../card/card';

const SimilarFilms = (): JSX.Element => {
  const films = useAppSelector(getSimilarFilms).slice(0, 4);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <Card
          key={film.id}
          {...film}
        />
      ))}
    </div>
  );
};

export default SimilarFilms;
