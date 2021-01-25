import React from 'react';
import './MainContent.scss';
import Slideshow from '../slideshow/Slideshow';
const MainContent = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=422&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
  ];
  return (
    <div className="main-content">
      <Slideshow images={images} auto showArrows />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* Grid component */}
    </div>
  );
};

export default MainContent;
