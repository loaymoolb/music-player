import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice';

const SongCard = ({song, isPlaying, activeSong, i, data}) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false)); 
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  
  return(
    <div className="flex flex-col w-[250px] p-4 bg-primary/20 bg-opacity-20 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:bg-primary/[0.5]">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center p-14 bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images?.coverart} className="w-full h-full rounded-lg" />
      </div>
    <div className="mt-4 flex flex-col">
      {/* <p className="font-medium text-lg text-black truncate"> */}
      <p className={`${activeSong?.title === song?.title ? 'text-red' : 'text-black'} font-medium text-lg text-black truncate`}>
        <Link to={`/songs/${song?.key}`}>
          {song.title}
        </Link>
      </p>
      <p className="text-sm text-gray-600 font-normal mt-1 truncate">
        <Link to={song.artist ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
          {song.subtitle}
        </Link>
      </p>
    </div>
  </div>
  )
};

export default SongCard;
