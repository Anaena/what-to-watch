import CardList from '../cards-list/cards-list';
import GenresList from '../genres-list/genres-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilmsCount} from '../../store/site-process/selectors';
import {selectFilms} from '../../store/site-data/selectors';
import {incFilmsCount} from '../../store/site-process/site-process';

const Catalog = (): JSX.Element => {
  const films = useAppSelector(selectFilms);
  const filmsCount = useAppSelector(getFilmsCount);
  const dispatch = useAppDispatch();

  const handleShowMoreButtonClick = () => {
    dispatch(incFilmsCount());
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />
      <CardList />
      {(films.length > filmsCount) && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleShowMoreButtonClick}>Show more</button>
        </div>
      )}
    </section>
  )
};

export default Catalog;
