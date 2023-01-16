import React from 'react';

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img
          src='https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg'
          alt=''
        />
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img
          src='https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Message;
