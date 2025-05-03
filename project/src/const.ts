export const FILMS_COUNT = 8;
export const MAX_GENRES_COUNT = 9;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Films = '/films',
  Favorites = '/mylist',
  Player = '/player',
  NotFound = '/404'
}

export enum ApiRoute {
  Login = '/login',
  Logout = '/logout',
  Films = '/films',
  Promo = '/promo',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum HttpCode {
  NotFound = 404,
  NoAuth = 401
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export enum StoreSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
  UserProcess = 'USER_PROCESS',
}

export const genres = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'] as const;

export const genreMap: Record<string, string> = {
  'All genres': 'All genres',
  'Comedies': 'Comedy',
  'Crime': 'Crime',
  'Documentary': 'Documentary',
  'Dramas': 'Drama',
  'Horror': 'Horror',
  'Kids & Family': 'Kids & Family',
  'Romance': 'Romance',
  'Sci-Fi': 'Sci-Fi',
  'Thrillers': 'Thriller',
};
