import { AuthorizationStatus, StoreSlice } from '../../const';
import type { State } from '../../types/state';
import type { User } from '../../types/types';

export const getAuthorizationStatus = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): AuthorizationStatus => USER_PROCESS.authorizationStatus;
export const getUser = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): User['avatarUrl'] => USER_PROCESS.user;
