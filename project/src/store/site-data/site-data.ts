import { createSlice } from '@reduxjs/toolkit';
import type { SiteData } from '../../types/state';
import { StoreSlice } from '../../const';
import {fetchFavoriteFilms, fetchFilm, fetchFilms, fetchPromoFilm} from '../action';

const initialState: SiteData = {
  films: [],
  isFilmsLoading: false,
  promoFilm: null,
  isPromoFilmLoading: false,
  film: null,
  isFilmLoading: false,
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
      });
  }
});
