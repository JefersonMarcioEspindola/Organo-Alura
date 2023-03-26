import React from 'react';
import './Banner.css';
import bannerImg from '../../img/banner.png';

function Banner() {
  return (
    <header className="banner">
      <img src={bannerImg} alt="Banner principal da página" />
    </header>
  );
}

export default Banner;