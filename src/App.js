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
    </div>
  );
}

export default App;
