


import React, { useEffect, useState } from 'react';

const MoviesList = () => {
  const [datos, setDatos] = useState([]);
  /* const [loading, setLoading] = useState(true);  */

  useEffect(() => {
    // se realiza la peticion a la api
    fetch('https://api.themoviedb.org/3/movie/11?api_key=880816531571af44aa52a8138da56066') 
      .then((response) => response.json()) // Convierte la respuesta a JSON
      .then((data) => {
          console.log(data)
      })
  }, []);
  

  return (
    <div className='container my-5'>
      <h2>List movies:</h2>
      <hr/>
      <ul>
       
      </ul> 
    </div>
  )
}

export default MoviesList



  