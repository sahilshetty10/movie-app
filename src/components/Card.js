import React from "react";

const Card = (props) => {
  const base_url = "https://image.tmdb.org/t/p/w500";
  return (
    <div id ={props.id} className="shadow-md rounded-3xl overflow-hidden relative group hover:scale-105 ease duration-300">
      <img className="w-full aspect-[1/1.5] object-cover" src={base_url + props.img} alt="movie poster"></img>
      <h1 className='text-black text-sm font-bold absolute bg-white -translate-y-4 px-4 right-0 rounded-t-xl '>{props.type.toUpperCase()}</h1>
      <div className="px-4 py-2">
        <h1 className="text-center text-sm font-bold truncate lg:text-lg">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default Card;
