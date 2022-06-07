import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate()
  return (
    <div className="m-4 flex justify-between align-center pb-4">
      <Link to="/">
        <h1 className="mx-10 text-2xl text-bold">Movie App</h1>
      </Link>
      <input
        className="px-4 rounded-full"
        type="text"
        placeholder="Search Movie...."
        onChange={(e) => navigate(`/search/${e.target.value}`)}
      ></input>
    </div>
  );
}

export default Navigation