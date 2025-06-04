import {genreMap, genres} from '../const';

export type Token = string;

export type User = {
  avatarUrl: string,
  email: string,
  id: number,
  name: string,
  token: string,
};

export type Film = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: [string],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
};

export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    id: User['id'],
    name: User['name'],
  },
};

export type UserAuth = Pick<User, 'email'> & { password: string };
export type Genre = typeof genres[number];
export type GenreName = keyof typeof genreMap;
export type ReviewAuth = Pick<Review, 'comment' | 'rating'> & Pick<Film, 'id'>;
export type FavoriteAuth = Pick<Film, 'id'> & { status: 1 | 0 }
