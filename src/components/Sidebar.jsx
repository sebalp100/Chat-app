import React from 'react';
import Chats from './Chats';
import Navbar from './Navbar';
import Search from './Search';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar></Navbar>
      <Search></Search>
      <Chats></Chats>
    </div>
  );
};

export default Sidebar;
