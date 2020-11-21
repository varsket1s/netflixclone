import React, { useEffect, useState} from 'react';
import axios from './axios';
import requests from './requests';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState ([]);

    useEffect (() => {

      async function fetchData() {
const request = await axios.get(fetchUrl);
console.log(request);
return Request;
      }  
      fetchData();
    }, []);




    return (
        <div>
           <h2> {title} </h2>



        </div>
    )
}

export default Row
