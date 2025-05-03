import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors';
import Logo from '../logo/logo';

type HeaderProps = {
  page?: 'main' | 'other';
}

const Header = ({page}: HeaderProps) => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  return (
    <header className="page-header film-card__head">
      <Logo page={page} />

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={user} alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link" to={AppRoute.Login}>Sign out</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
