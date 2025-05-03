import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type LogoProps = {
  isLight?: boolean;
  page?: string;
}

function Logo({page = 'other', isLight = false}: LogoProps): JSX.Element {
  return (
    <div className="logo">
      {page === 'main' ? (
        <div className={`logo__link${isLight ? ' logo__link--light' : ''}`}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </div>
      ) : (
        <Link className={`logo__link${isLight ? ' logo__link--light' : ''}`} to={AppRoute.Root}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      )}
    </div>
  );
}

export default Logo;
