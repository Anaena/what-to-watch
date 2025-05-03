import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setGenre} from '../../store/action';
import {getGenre} from '../../store/site-process/selectors';
import {Genre} from '../../types/types';
import {genres} from '../../const';
import GenresItem from '../genres-item/genres-item';

const GenresList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getGenre);
  const handleCityClick = useCallback((name: Genre) => {
    dispatch(setGenre(name));
  }, [dispatch]);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <GenresItem key={genre} name={genre} isActive={genre === currentGenre} onClick={handleCityClick} />
      ))}
    </ul>
  );
};

export default GenresList;
