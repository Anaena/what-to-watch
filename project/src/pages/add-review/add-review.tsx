import {useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute } from '../../const';
import {ReviewAuth} from '../../types/types';
import { getFilm, getIsFilmLoading} from '../../store/site-data/selectors';
import {fetchFilm, postComment} from '../../store/action';
import Header from '../../components/header/header';
import Spinner from '../../components/spinner/spinner';
import Form from '../../components/form/form';

function AddReviewPage(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const isFilmLoading = useAppSelector(getIsFilmLoading);

  useEffect(() => {
    const { id } = params;
    if (id) {
      const parsedId = Number(id);
      dispatch(fetchFilm(parsedId));
    }
  }, [params, dispatch]);

  if (isFilmLoading || !film) {
    return <Spinner />;
  }

  const { name, backgroundImage, posterImage, id} = film;

  const onFormSubmit = (formData: Omit<ReviewAuth, 'id'>) => {
    dispatch(postComment({ id, ...formData }));
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header page={'add-review'}>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Film}/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <Form onSubmit={onFormSubmit} filmId={id} />
      </div>

    </section>
  );
}

export default AddReviewPage;
