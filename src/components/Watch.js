import React from 'react'
import { useParams } from 'react-router-dom'
const Watch = () => {
    const { type,id } = useParams();

  return (
    <div>
      <iframe
        title="movie"
        className="w-full h-screen"
        src={`https://www.2embed.ru/embed/tmdb/${type}?id=${id}`}
      ></iframe>
    </div>
  );
}

export default Watch