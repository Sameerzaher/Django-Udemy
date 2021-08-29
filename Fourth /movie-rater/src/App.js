import React ,{ useState,useEffect } from 'react';

import './App.css';
function App() {
  const [movies,setMovie] = useState([]);
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/movies/",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 56e23f29c7e8fe55412f71447346992f42ae13c1'
      }
    }).then(resp => resp.json())
    .then(resp => setMovie(resp))
    .catch(error=>console.log(error))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>movie rater</h1>
        <div className="layout">
          <div>{movies.map(movie => {
            return <h2>{movie.title}</h2>
          })}</div>
          <div>Movie details</div>
        </div>
      </header>
    </div>
  );
}
export default App;
