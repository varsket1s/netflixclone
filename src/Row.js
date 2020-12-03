import React, { useEffect, useState} from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState ([]);
//
    useEffect (() => {
//
async function fetchData() {
const request = await axios.get(fetchURL);
console.log(request);
setMovies (request.data.results);
return request;
      }  
      fetchData();
    }, [fetchURL]);

    return (
        <div className="row">
           <h2> {title} </h2>

        <div className="row_posters">
{/*container >>posters*/}
{movies.map(movie => (
    <img 
    className="row_poster"
    src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
    ))}
        </div>
     </div>
    )
}

export default Row


