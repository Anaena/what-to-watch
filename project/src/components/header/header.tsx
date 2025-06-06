import {memo, ReactNode} from 'react';
import { Link } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors';
import Logo from '../logo/logo';

type HeaderProps = {
  page?: 'main' | 'my-list' | 'add-review' | 'other';
  children?: ReactNode;
}

const Header = ({page, children}: HeaderProps) => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  let headerClass;
  switch (page) {
    case 'my-list':
      headerClass = 'page-header user-page__head';
      break;
    case 'add-review':
      headerClass = 'page-header';
      break;
    case 'main':
    case 'other':
    default:
      headerClass = 'page-header film-card__head';
      break;
  }

  return (
    <header className={headerClass}>
      <Logo page={page} />

      {children}

      <ul className="user-block">
        {authorizationStatus === AuthorizationStatus.Auth && (
          <li className="user-block__item">
            <Link className="user-block__avatar" to={AppRoute.Favorites}>
              <div className="user-block__avatar">
                <img src={user} alt="User avatar" width="63" height="63"/>
              </div>
            </Link>
          </li>
        )}
        <li className="user-block__item">
          <Link className="user-block__link" to={AppRoute.Login}>{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}</Link>
        </li>
      </ul>
    </header>
  );
};

export default memo(Header);
