import {memo} from 'react';

type FilmTab = {
  tabName: string;
  isActive: boolean;
  onClick: (value: string) => void;
}

const FilmTab = ({tabName, isActive, onClick}: FilmTab): JSX.Element => {
  const handleCityClick = () => {
    onClick(tabName);
  };

  return (
    <li className={`film-nav__item${isActive ? ' film-nav__item--active' : ''}`}>
      <a className="film-nav__link" onClick={handleCityClick} style={{cursor: 'pointer'}}>{tabName}</a>
    </li>
  );
};

export default memo(FilmTab);
