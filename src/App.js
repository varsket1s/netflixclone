import React from 'react';
import './App.css';
import Row from  './Row';
import requests from './requests';



function App() {
  return (
    <div className="App">
    <h1> Rytis NETFLIX </h1>
    <Row title="Top rated" fetchURL={requests.fetchTopRated}/>
    <Row title="Trending now" fetchURL={requests.fetchTrending}/>
    <Row title="Action movies" fetchURL={requests.fetchActionMovies}/>
    <Row title="Comedy movies" fetchURL={requests.fetchComedyMovies}/>
    <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies}/>
    <Row title="Romance movies" fetchURL={requests.fetchRomanceMovies}/>
    <Row title="Sci-Fi" fetchURL={requests.fetchTrefetchSciFinding}/>

    </div>
  );
}

export default App;
