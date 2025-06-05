import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review/add-review';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path={`${AppRoute.Film}/:id`} element={<MoviePage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Film}/:id${AppRoute.AddReview}`}
          element={
            <PrivateRoute>
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
