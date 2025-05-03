import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SiteProcess } from '../../types/state';

import {FILMS_COUNT, genreMap, genres, StoreSlice} from '../../const';
import {Genre} from '../../types/types';

const initialState: SiteProcess = {
  currentGenre: genreMap[genres[0]],
  filmsCount: FILMS_COUNT,
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<Genre>) => {
      state.currentGenre = genreMap[action.payload];
    },
    incFilmsCount: (state) => {
      state.filmsCount = state.filmsCount + FILMS_COUNT;
    },
    resetFilmsCount: (state) => {
      state.filmsCount = FILMS_COUNT;
    }
  },
});

export const { setGenre, incFilmsCount, resetFilmsCount } = siteProcess.actions;
