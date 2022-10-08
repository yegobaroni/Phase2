import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

function MovieControls({movie, type}) {

    const {removeMovieFromWatchList, addMovieToWatched, removeFromWatched} = useContext(GlobalContext);
  return (
    // 
    <div >
        {type === 'watchList' && (
            <>
            <button onClick={() => addMovieToWatched(movie)}>Watched</button>
            <button onClick={() => removeMovieFromWatchList(movie.id)}>Remove</button>
            </>
        )}

        {type === "watched" && (
            <>
            <button onClick={() => removeFromWatched(movie.id)}>Remove</button>
            </>

        )}
    </div>
  )
}

export default MovieControls;