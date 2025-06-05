import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError, AxiosInstance} from 'axios';
import type { History } from 'history';

import {ApiRoute, AppRoute, HttpCode} from '../const';
import {dropToken, saveToken} from '../services/token';
import {ReviewAuth, Film, Genre, Review, User, UserAuth} from '../types/types';

type Extra = {
  api: AxiosInstance;
  history: History;
};

export const Action = {
  FETCH_FILMS: 'films/fetch',
  FETCH_FILM: 'film/fetch',
  FETCH_PROMO: 'promo/fetch',
  SET_GENRE: 'genre/set',
  FETCH_SIMILAR_FILMS: 'films/fetch-similar',
  FETCH_FAVORITE_FILMS: 'films/fetch-favorite',
  POST_FAVORITE: 'films/post-favorite',
  FETCH_COMMENTS: 'film/fetch-comments',
  POST_COMMENT: 'film/post-comment',
  LOGIN_USER: 'user/login',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGOUT_USER: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirect-to-route',
};

export const setGenre = createAction<Genre>(Action.SET_GENRE);
export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);

export const fetchUserStatus = createAsyncThunk<User, undefined, { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<User>(ApiRoute.Login);

    return data;
  });

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, { extra: Extra }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra }) => {
    const { api, history } = extra;
    const { data } = await api.post<User>(ApiRoute.Login, { email, password });
    const { token, avatarUrl } = data;

    saveToken(token);
    history.back();

    return avatarUrl;
  });

export const logoutUser = createAsyncThunk<void, undefined, { extra: AxiosInstance}>(
  Action.LOGOUT_USER,
  async (_, {extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
  });

export const fetchFilms = createAsyncThunk<Film[], undefined, { extra: Extra }>(
  Action.FETCH_FILMS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Film[]>(ApiRoute.Films);

    return data;
  });

export const fetchFilm = createAsyncThunk<Film, Film['id'], { extra: Extra }>(
  Action.FETCH_FILM,
  async (id, { extra }) => {
    const { api, history } = extra;

    try {
      const { data } = await api.get<Film>(`${ApiRoute.Films}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }

      return Promise.reject(error);
    }
  });

export const fetchPromoFilm = createAsyncThunk<Film, undefined, { extra: Extra }>(
  Action.FETCH_PROMO,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Film>(ApiRoute.Promo);

    return data;
  });

export const fetchFavoriteFilms = createAsyncThunk<Film[], undefined, { extra: Extra }>(
  Action.FETCH_FAVORITE_FILMS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Film[]>(ApiRoute.Favorite);

    return data;
  });

export const fetchComments = createAsyncThunk<Review[], Film['id'], { extra: Extra }>(
  Action.FETCH_COMMENTS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Review[]>(`${ApiRoute.Comments}/${id}`);

    return data;
  });

export const postComment = createAsyncThunk<Review[], ReviewAuth, { extra: Extra }>(
  Action.POST_COMMENT,
  async ({ id, comment, rating }, { extra }) => {
    const { api } = extra;
    const { data } = await api.post<Review[]>(`${ApiRoute.Comments}/${id}`, { comment, rating });

    return data;
  });

export const fetchSimilarFilms = createAsyncThunk<Film[], Film['id'], { extra: Extra }>(
  Action.FETCH_SIMILAR_FILMS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Film[]>(`${ApiRoute.Films}/${id}/similar`);

    return data;
  });
