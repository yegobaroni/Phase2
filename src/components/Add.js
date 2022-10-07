import React, {useState} from 'react';
import ResultsCard from './ResultsCard';

function Add() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);


  const handleChange = e =>{
    e.preventDefault();
    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      if(!data.errors){
        setResults(data.results);
      } else {
        setResults([]);
      }
    });
  };
  return (
    <div>
      <div className='input-wrapper'>
      <input type="text" 
      placeholder='Search for a Movie'
      value={query}
      onChange={handleChange}
      /></div>
      {results.length > 0 && (
        <ul className='results'>
          {results.map(movie =>(
            <li key={movie.id}>
              <ResultsCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Add;