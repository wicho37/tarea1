


import React, { useEffect, useState } from 'react';

const MoviesList = () => {
  const [movie, setMovie] = useState([]);
  console.log(movie)
  /* const [loading, setLoading] = useState(true);  */

  useEffect(() => {
    // se realiza la peticion a la api
    fetch('https://api.themoviedb.org/3/movie/12?api_key=7c22d02ca9e5aa82f0aa3f3ec21318b9') 
      .then((response) => response.json()) // Convierte la respuesta a JSON
      .then((data) => {
          setMovie(data)
      })
  }, []);
  

  return (
    <div>
      <h2>List movies:</h2>
      <hr/>
      {
         <ul>
        <h2>{movie.tittle}</h2>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.id}/>;
      </ul> 
      }
     
    </div>
  )
}

export default MoviesList



  