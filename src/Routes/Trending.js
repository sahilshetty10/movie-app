import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useParams,Link } from 'react-router-dom'


const Trending = () => {
  const [shows, setShows] = useState([]);
  const api_key = "04c35731a5ee918f014970082a0088b1";
  const { search } = useParams();
  const link = search===undefined? `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`:`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${search}`


  useEffect(() => {
    fetch(link).then((response) =>
      response.json().then((data) => {
        let result = data.results;
        setShows(result.filter(x => x.poster_path != null && x.poster_path.length>0))
      })
    );
  }, [link]);
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-4">
      {shows.map((show) => (
        <Link to = {`/watch/${show.media_type}/${show.id}`} >
          <Card
            key={show.id}
            img={show.poster_path}
            desc={show.overview}
            title={show.title === undefined ? show.name : show.title}
            type={show.media_type}
          />
        </Link>
      ))}
    </div>
  );
};

export default Trending;
