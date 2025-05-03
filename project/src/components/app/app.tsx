import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main/main';
import {AppRoute} from '../../const';
import LoginPage from '../../pages/login/login';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
