import React from 'react';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user' />
      </div>
      <div className='userChat'>
        <img
          src='https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg'
          alt=''
        />
        <div className='userChatInfo'>
          <span>Other</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
