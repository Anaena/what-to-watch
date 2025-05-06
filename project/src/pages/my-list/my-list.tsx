import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import {
  getFavoriteFilms,
  getIsFavoriteFilmsLoading,
} from '../../store/site-data/selectors';
import Spinner from '../../components/spinner/spinner';
import Card from '../../components/card/card';

function MyList(): JSX.Element {
  const films = useAppSelector(getFavoriteFilms);
  const isFilmsLoading = useAppSelector(getIsFavoriteFilmsLoading);

  if (isFilmsLoading) {
    return <Spinner />;
  }
  return (
    <div className="user-page">
      <Header title={'My list'}/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {films.map((film) => (
          <Card
            key={film.id}
            {...film}
          />
        ))}
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Logo isLight />
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
