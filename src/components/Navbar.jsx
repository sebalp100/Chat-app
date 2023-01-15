import React from 'react';

const Navbar = () => {
  return (
    <div className='navBar'>
      <span className='logo'>Simple Chat</span>
      <div className='user'>
        <img
          src='https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg'
          alt=''
        ></img>
        <span>Name</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
