import { StoreSlice } from '../../const';
import type { State } from '../../types/state';
import type {Genre} from '../../types/types';

export const getGenre = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): Genre => SITE_PROCESS.currentGenre;
// export const getFilmsCount = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): number => SITE_PROCESS.filmsCount;
