


import React, { useEffect, useState } from 'react';
import "react-bootstrap"
import CardMovie from '../componente/CardMovie/CardMovie';
import { Link } from 'react-router-dom';

const MovieApi = () => {
  const [movies, setMovie] = useState([]);
  console.log(movies)
  const [id] = useState(2)




  /* const [loading, setLoading] = useState(true);  */

  useEffect(() => {
    // se realiza la peticion a la api
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c22d02ca9e5aa82f0aa3f3ec21318b9`)
      .then((response) => response.json()) // Convierte la respuesta a JSON
      .then((data) => {
        setMovie(data.results)
      })
  },[]);


  return (
    <div>
      <h2>moviess:</h2>
      <div className='lista'>
        {
          movies.map((movie) => {
            return (
              
                <CardMovie
                  img={movie.poster_path}
                  id={movie.id}
                  title={movie.title}
                  fecha={movie.release_date}
                  actor={movie.original_name}
                />
            

            )
          })
        }

      </div>
      <div>

      </div>
    </div>
  )
}

export default MovieApi



