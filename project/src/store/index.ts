import { configureStore } from '@reduxjs/toolkit';
import history from '../history';

import {createAPI} from '../services/api';
import { rootReducer } from './reducer';
import {fetchFilms, fetchUserStatus} from './action';

const api = createAPI();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
        history
      },
    },
  }),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchFilms());

export default store;
