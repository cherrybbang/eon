import React, { useState } from 'react';
import carCasper from '../assets/car_casper.avif';
import carIoniq from '../assets/car_ioniq.avif';

const images = [
  { src: carIoniq, alt: '아이오닉5자동차' },
  { src: carCasper, alt: '케스퍼자동차' }
];

const MainPage: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='main-page'>
      <h1>메인페이지</h1>
      <p>여기는 메인페이지입니다.</p>
      <div className='carousel'>
        <button className='prev-button' onClick={prevImage}>{'<'}</button>
        <img
          src={images[current].src}
          alt={images[current].alt}
          style={{ width: '100%', display: 'block' }}
        />
        <button className='next-button' onClick={nextImage}>{'>'}</button>
      </div>
      <div>
        
      </div>
    </div>
    
  );
};

export default MainPage;
