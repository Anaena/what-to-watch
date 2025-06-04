import { createSelector } from '@reduxjs/toolkit';
import {getGenre} from '../site-process/selectors';
import type { State } from '../../types/state';
import { StoreSlice } from '../../const';
import {Film, Review} from '../../types/types';

export const getIsFilmsLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFilmsLoading;
export const getFilms = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Film[] => SITE_DATA.films;

export const getIsFilmLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFilmLoading;
export const getFilm = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Film | null => SITE_DATA.film;

export const getIsPromoFilmLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isPromoFilmLoading;
export const getPromoFilm = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Film | null => SITE_DATA.promoFilm;

export const selectFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) => films.filter((film) => genre === 'All genres' ? films : film.genre === genre));

export const getIsFavoriteFilmsLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFavoriteFilmsLoading;
export const getFavoriteFilms = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Film[] => SITE_DATA.favoriteFilms;

export const getComments = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Review[] => SITE_DATA.comments;
