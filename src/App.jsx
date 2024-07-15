import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <Link to="/" className="text-red-300 absolute left-[17%] top-[3%]">
        Home
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
