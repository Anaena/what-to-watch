import { createSlice } from '@reduxjs/toolkit';
import type { SiteData } from '../../types/state';
import { StoreSlice } from '../../const';
import {
  fetchComments,
  fetchFavoriteFilms,
  fetchFilm,
  fetchFilms,
  fetchPromoFilm,
  fetchSimilarFilms,
  postComment, postFavorite
} from '../action';

const initialState: SiteData = {
  films: [],
  isFilmsLoading: false,
  promoFilm: null,
  isPromoFilmLoading: false,
  film: null,
  isFilmLoading: false,
  similarFilms: [],
  favoriteFilms: [],
  isFavoriteFilmsLoading: false,
  comments: [],
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsLoading = false;
      })
      .addCase(fetchPromoFilm.pending, (state) => {
        state.isPromoFilmLoading = true;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoFilmLoading = false;
      })
      .addCase(fetchPromoFilm.rejected, (state) => {
        state.isPromoFilmLoading = false;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoading = false;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.isFilmLoading = false;
      })
      .addCase(fetchFavoriteFilms.pending, (state) => {
        state.isFavoriteFilmsLoading = true;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isFavoriteFilmsLoading = false;
      })
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.isFavoriteFilmsLoading = false;
      })
      .addCase(postFavorite.fulfilled, (state, action) => {
        const updatedFilm = action.payload;
        state.films = state.films.map((film) => film.id === updatedFilm.id ? updatedFilm : film);

        if (state.promoFilm && state.promoFilm.id === updatedFilm.id) {
          state.promoFilm = updatedFilm;
        }

        if (state.film && state.film.id === updatedFilm.id) {
          state.film = updatedFilm;
        }

        if (updatedFilm.isFavorite) {
          state.favoriteFilms = state.favoriteFilms.concat(updatedFilm);
        } else {
          state.favoriteFilms = state.favoriteFilms.filter((favoriteFilm) => favoriteFilm.id !== updatedFilm.id);
        }
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
