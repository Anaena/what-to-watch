import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { fetchPromoFilm, postFavorite } from '../../store/action';
import {getIsPromoFilmLoading, getPromoFilm} from '../../store/site-data/selectors';
import Header from '../../components/header/header';
import Catalog from '../../components/catalog/catalog';
import Spinner from '../../components/spinner/spinner';
import Logo from '../../components/logo/logo';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const promoFilm = useAppSelector(getPromoFilm);
  const isPromoFilmLoading = useAppSelector(getIsPromoFilmLoading);

  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [dispatch]);

  if (isPromoFilmLoading || !promoFilm) {
    return <Spinner />;
  }

  const { name, backgroundImage, posterImage, genre, released, isFavorite, id } = promoFilm;

  const handleFavoriteButtonClick = () => {
    dispatch(postFavorite({
      id: id,
      status: isFavorite ? 0 : 1
    }));
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header page={'main'}/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={handleFavoriteButtonClick}>
                  {isFavorite ?
                    (
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list"></use>
                      </svg>
                    ) :
                    (
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                    )}
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
          <Logo page={'main'} isLight />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
