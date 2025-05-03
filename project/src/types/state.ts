import store from '../store';
import {Film, Comment, User, Genre, GenreName} from './types';
import {AuthorizationStatus} from '../const';

export type SiteData = {
  films: Film[];
  isFilmsLoading: boolean;
  promoFilm: Film | null;
  isPromoFilmLoading: boolean;
  film: Film | null;
  isFilmLoading: boolean;
  favoriteFilms: Film[];
  isFavoriteFilmsLoading: boolean;
  comments: Comment[];
};

export type SiteProcess = {
  currentGenre: GenreName;
  filmsCount: number;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User['avatarUrl'];
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
