


import React, { useEffect } from 'react';

const MoviesList = () => {
  /* const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true); */

  useEffect(() => {
    // se realiza la peticion a la api
    fetch('https://api.themoviedb.org/3/account') 
      .then((response) => response.json()) // Convierte la respuesta a JSON
      .then((data) => {
          console.log(data)
      })
  }, []);
  }

  return (
    <div className='container my-5'>
      <h2>List movies:</h2>
      <hr/>
      {/* <ul>
        {datos.map((dato) => (
          <li key={dato.id}>{dato.nombre}</li>
        ))}
      </ul> */}
    </div>
  )


export default MoviesList



  