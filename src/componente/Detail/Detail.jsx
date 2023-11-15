import { useState } from "react";
import { useEffect } from "react" ;
import { useParams } from "react-router-dom";
import CardMovie from "../CardMovie/CardMovie";

 
 const Detail = () => {
   // const [casts , setCast] = useState([]);
    const {id} = useParams();
   // const actors = casting.filter(cast => cast.original_name === "Jason Statham");
   // const imgPeli = `https://image.tmdb.org/t/p/w200${img}`;
    

    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7c22d02ca9e5aa82f0aa3f3ec21318b9`)
        .then((response) => response.json())
        .then((data) => {
        console.log(data)
    })
    },[]);
    
    return (
        <div className='container m-5'>
            <h4>Detalles</h4>
          {
           
          }
        </div>
    )
}

export default Detail





