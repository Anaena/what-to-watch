import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchComments, fetchFilm} from '../../store/action';
import {getComments, getFilm, getIsFilmLoading} from '../../store/site-data/selectors';
import Spinner from '../../components/spinner/spinner';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import Overview from '../../components/overview/overview';
import {TabsName} from '../../const';
import Details from '../../components/details/details';
import FilmTab from '../../components/film-tab/film-tab';
import Reviews from '../../components/reviews/reviews';
// import {getAuthorizationStatus} from '../../store/user-process/selectors';

function MoviePage(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  // const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const film = useAppSelector(getFilm);
  const isFilmLoading = useAppSelector(getIsFilmLoading);
  const comments = useAppSelector(getComments);
  const [activeTab, setActiveTab] = useState(TabsName.OVERVIEW);

  useEffect(() => {
    const { id } = params;
    if (id) {
      const parsedId = Number(id);
      dispatch(fetchFilm(parsedId));
      dispatch(fetchComments(parsedId));
    }
  }, [params, dispatch]);

  if (isFilmLoading) {
    return <Spinner />;
  }

  if (!film) {
    return;
  }

  const { id, name, posterImage, previewImage, backgroundImage, backgroundColor, videoLink, previewVideoLink, description, rating, scoresCount, director, starring, runTime, genre, released, isFavorite } = film;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
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
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {Object.values(TabsName).map((tabName) => (
                    <FilmTab tabName={tabName} key={tabName} isActive={tabName === activeTab} onClick={() => setActiveTab(tabName)}/>
                  ))}
                </ul>
              </nav>

              {activeTab === TabsName.OVERVIEW && (
                <Overview rating={rating} scoresCount={scoresCount} description={description} director={director} starring={starring} />
              )}
              {activeTab === TabsName.DETAILS && (
                <Details runTime={runTime} genre={genre} released={released} director={director} starring={starring} />
              )}
              {activeTab === TabsName.REVIEWS && (
                <Reviews reviews={comments}/>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175"/>
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175"/>
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Macbeth</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175"/>
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Aviator</a>
              </h3>
            </article>
          </div>
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
    </>
  );
}

export default MoviePage;
