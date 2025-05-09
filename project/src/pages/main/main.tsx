import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import {getIsPromoFilmLoading, getPromoFilm} from '../../store/site-data/selectors';
import Catalog from '../../components/catalog/catalog';
import Spinner from '../../components/spinner/spinner';
import Logo from '../../components/logo/logo';

function MainPage(): JSX.Element {
  const promoFilm = useAppSelector(getPromoFilm);
  const isPromoFilmLoading = useAppSelector(getIsPromoFilmLoading);

  if (isPromoFilmLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header page={'main'}/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog />

        <footer className="page-footer">
          <Logo page={'main'} isLight={true}/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
