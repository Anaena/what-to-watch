import {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useElementListener} from '../../hooks/use-element-listener';
import {getFilm, getIsFilmLoading, getPromoFilm} from '../../store/site-data/selectors';
import {fetchFilm} from '../../store/action';
import Spinner from '../../components/spinner/spinner';
import {Spin} from 'antd';

function formatTimeLeft(time: number): string {
  const totalSeconds = Math.floor(time);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hms = [
    hours > 0 ? String(hours).padStart(2, '0') : null,
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0')
  ].filter(Boolean);

  return `-${hms.join(':')}`;
}

function PlayerPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm) ?? useAppSelector(getPromoFilm);
  const isFilmLoading = useAppSelector(getIsFilmLoading);
  const navigate = useNavigate();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLProgressElement | null>(null);
  const toggleRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState('00:00');
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(Number(id)));
    }
  }, [id, dispatch]);

  const onLoaded = () => {
    setIsVideoReady(true);
  };

  const onTimeUpdate = () => {
    const current = videoRef?.current?.currentTime;
    const duration = runTime;

    if (current) {
      setProgress((current / duration) * 100);
      setTimeLeft(formatTimeLeft(duration - current));
    }
  };
  useElementListener('loadeddata', videoRef, onLoaded);
  useElementListener('timeupdate', videoRef, onTimeUpdate);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleFullScreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const handleExit = () => {
    videoRef.current?.pause();
    navigate(`/films/${currentID}`);
  };

  if (isFilmLoading || !film) {
    return <Spin />;
  }
  const currentID = film.id;
  const { name, posterImage, videoLink, runTime } = film;

  return (
    <div className="player">
      {!isVideoReady && <Spinner />}
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={posterImage}
      />

      <button onClick={handleExit} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress ref={progressRef} className="player__progress" value={progress} max="100"></progress>
            <div ref={toggleRef} className="player__toggler" style={{left: `${progress}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={togglePlay} type="button" className="player__play">
            {isPlaying ? (
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
            ) : (
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
            )}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">{name}</div>

          <button onClick={handleFullScreen} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
