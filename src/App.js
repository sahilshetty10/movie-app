import React, { useState, useEffect } from "react";
import Card from "./components/Card";


function App() {
  const [shows,setShows] = useState([])
  const api_key = '04c35731a5ee918f014970082a0088b1'
  const trending_url = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
  
  useEffect(()=>{
    fetch(trending_url).then((response) => response.json().then((data) => {
      setShows(data.results);
    }));
  },[trending_url])
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-4">
      {shows.map(show => <Card key={show.id} img={show.poster_path} title={show.title === undefined? show.name : show.title} />)}
    </div>
  );
}

export default App;
