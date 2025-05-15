import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './AllComponents/Navbar';



const App = () => {
  return (
    <div className='top-0  relative'>
      <Navbar/>
      <Outlet />
    </div>

  );
};

export default App;
