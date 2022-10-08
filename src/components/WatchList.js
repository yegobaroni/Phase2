import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import MovieCard from './MovieCard';

function WatchList() {
  const {watchList} = useContext(GlobalContext);

  return (

    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>My WatchList</h1>
        </div>

        {watchList.length > 0 ? (
          <div className='movie-grid'>
          {watchList.map((movie) => (
            <MovieCard movie={movie} type="watchList" />
          )
          )}
        </div>
        ): (
          <h2 className='no-movies'>No Movies Yet</h2>
        )}
        
      </div>
    </div>
  );
};

export default WatchList;