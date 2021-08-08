import React from 'react';
import './App.css';
import Row from './Row';
import request from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      {/*Nav Bar*/}
      <Banner />
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={request.fetchNetflixOriginals} 
      isLargeRow/>
      <Row title="Top Rated" fetchUrl={request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
