import {useAppSelector} from '../../hooks';
import {getIsFilmsLoading, selectFilms} from '../../store/site-data/selectors';
import Card from '../card/card';
import Spinner from '../spinner/spinner';

const CardList = (): JSX.Element => {
  const films = useAppSelector(selectFilms);
  const isFilmsLoading = useAppSelector(getIsFilmsLoading);

  if (isFilmsLoading) {
    return <Spinner />;
  }
  console.log('* LOG films', films);
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
