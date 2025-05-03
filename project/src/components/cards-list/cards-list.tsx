import {useAppSelector} from '../../hooks';
import {getIsFilmsLoading, selectFilms} from '../../store/site-data/selectors';
import Card from '../card/card';
import Spinner from '../spinner/spinner';
import {getFilmsCount} from '../../store/site-process/selectors';

const CardList = (): JSX.Element => {
  const filmsCount = useAppSelector(getFilmsCount);
  const films = useAppSelector(selectFilms).slice(0, filmsCount);
  const isFilmsLoading = useAppSelector(getIsFilmsLoading);

  if (isFilmsLoading) {
    return <Spinner />;
  }

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

export default CardList;
