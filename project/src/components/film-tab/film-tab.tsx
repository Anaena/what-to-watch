import {memo} from 'react';
import {TabName} from '../../types/types';

type FilmTab = {
  tabName: TabName;
  isActive: boolean;
  onClick: (tab:TabName) => void;
}

const FilmTab = ({tabName, isActive, onClick}: FilmTab): JSX.Element => {
  const handleTabClick = () => {
    onClick(tabName);
  };

  return (
    <li className={`film-nav__item${isActive ? ' film-nav__item--active' : ''}`}>
      <a className="film-nav__link" onClick={handleTabClick} style={{cursor: 'pointer'}}>{tabName}</a>
    </li>
  );
};

export default memo(FilmTab);
