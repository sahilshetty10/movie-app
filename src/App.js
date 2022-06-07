import React from "react";
import Trending from "./Routes/Trending";
import Navigation from "./components/Navigation";
import Watch from "./components/Watch";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return(
  <div className='font-mono'>
    <Navigation />
    <Routes>
      <Route path='/' element={<Trending />} />
      <Route path='/search/:search' element={<Trending />} />
      <Route path='/watch/:type/:id' element={<Watch />} />
    </Routes>
  </div>
  ) 
}

export default App;
