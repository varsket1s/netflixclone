import React from "react";
import "./App.css";
import Row from  "./Row";
import requests from "./requests";
import Banner from "./Banner";
import "./banner.css"
import Nav from "./Nav";
import "./Nav.css" 


function App() {
  return (
    <div className="App">
    <Nav />
    <Banner/>
    <Row title="Top rated" fetchURL={requests.fetchTopRated}
      isLargeRow
    />

    <Row title="Trending now" fetchURL={requests.fetchTrending}/>
    <Row title="Action movies" fetchURL={requests.fetchActionMovies}/>
    <Row title="Comedy movies" fetchURL={requests.fetchComedyMovies}/>
    <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies}/>
    <Row title="Romance movies" fetchURL={requests.fetchRomanceMovies}/>
    <Row title="Action movies" fetchURL={requests.fetchActionMovies}/>
    </div>
  );
}

export default App;
