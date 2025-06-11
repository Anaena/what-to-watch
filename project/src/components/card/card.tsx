import {useRef, useState} from 'react';
import type {Film} from '../../types/types';
import {AppRoute} from '../../const';

const Card = ({
  id,
  name,
  posterImage,
  previewVideoLink
}: Film): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image" style={{ position: 'relative', width: 280, height: 175 }}>
        <video
          ref={videoRef}
          src={previewVideoLink}
          poster={posterImage}
          width="280"
          height="175"
          muted
          loop
          preload="metadata"
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, opacity: 0, transition: 'opacity 0.3s' }}
          onPlaying={(e) => (e.currentTarget.style.opacity = '1')}
          onPause={(e) => (e.currentTarget.style.opacity = '0')}
        />
        <img src={posterImage} alt={name} width="280" height="175" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={`${AppRoute.Film}/${id}`}>{name}</a>
      </h3>
    </article>
  );
};

export default Card;
