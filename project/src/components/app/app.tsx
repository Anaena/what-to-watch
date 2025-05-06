import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main/main';
import {AppRoute} from '../../const';
import LoginPage from '../../pages/login/login';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../pages/my-list/my-list';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
