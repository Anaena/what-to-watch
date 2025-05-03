import { StoreSlice } from '../../const';
import type { State } from '../../types/state';
import {GenreName} from '../../types/types';

export const getGenre = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): GenreName => SITE_PROCESS.currentGenre;
// export const getFilmsCount = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): number => SITE_PROCESS.filmsCount;
