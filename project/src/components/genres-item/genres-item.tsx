import {memo} from 'react';
import type {Genre} from '../../types/types';

type GenresItem = {
  name: Genre;
  isActive: boolean;
  onClick: (name: Genre) => void;
}

const GenresItem = ({name, isActive, onClick}: GenresItem): JSX.Element => {
  const handleCityClick = () => {
    onClick(name);
  };

  return (
    <li className={`catalog__genres-item${isActive ? ' catalog__genres-item--active' : ''}`} onClick={handleCityClick}>
      <a href="#" className="catalog__genres-link">{name}</a>
    </li>
  );
};

export default memo(GenresItem);
