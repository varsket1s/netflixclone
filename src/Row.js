import React, { useEffect, useState} from 'react';
import axios from './axios';
import './Row.css';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState ([]);
    const [trailerUrl, setTrailerUrl] = useState("");
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

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

const handleClick = (movie) => {
  if (trailerUrl)  {
      setTrailerUrl('');
  } else {
      movieTrailer (movie?.name || "")
      .then(url => {
          const urlParams = new URLSearchParams (new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log(error));
  }
}

    return (
        <div className="row">
           <h2> {title} </h2>

        <div className="row_posters">
{/*container >>posters*/}
{movies.map(movie => (
    <img 
    key={movie.id}
    className={`row_poster ${isLargeRow && "row__posterLarge"}`}
    src={`${base_url}${
        isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
    ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
     </div>
    )
}

export default Row


