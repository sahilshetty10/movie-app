import React from 'react'
import { useParams } from 'react-router-dom'
const Watch = () => {
    const { type,id } = useParams();

  return (
    <div>
      <iframe
        title="movie"
        className="w-full h-screen"
        src={type=='tv'?`https://www.2embed.cc/embedtv/${id}`:`https://www.2embed.cc/embed/${id}`}
      ></iframe>
    </div>
  );
}

export default Watch
