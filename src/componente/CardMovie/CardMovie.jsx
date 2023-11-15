import React from 'react'
import "./CardMovie.css"
import { Link } from 'react-router-dom'


const CardMovie = (props) => {
    const { img, id, title, fecha} = props
    return (
        <Link to={`/detail/${id}`}>
        <div key={id} className='card'>
            <h3>{title}</h3>
            <img src={`https://image.tmdb.org/t/p/w200${img}`} alt="imaagen de pelicula" />
            <p>{fecha}</p>
        </div>
        </Link>
    )
}

export default CardMovie
