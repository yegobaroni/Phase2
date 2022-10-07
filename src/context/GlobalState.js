import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

// intitial state
const initialState = {
   watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')): [],
   watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')): [],
   
};

export const GlobalContext = createContext(initialState);

//provider componet
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);

// actions
const addMovieToWatchList = (movie) => {
    dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
};

const removeMovieFromWatchList = (id) => {
    dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
};

const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie});
};

const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id});
};
    return (
        <GlobalContext.Provider value={{watchList: state.watchList, 
        watched: state.watched, 
        addMovieToWatchList, 
        removeMovieFromWatchList, 
        addMovieToWatched,
        removeFromWatched}}>
            {props.children}
        </GlobalContext.Provider>
    );
};