import React, { useState, useEffect } from 'react';
import carCasper from '../assets/car_casper.avif';
import carIoniq from '../assets/car_ioniq.avif';
import carTucson from '../assets/car_tucson.avif';
import carSantafe from '../assets/car_santafe.avif';
import LightRays from './LightRays';
import ev1 from '../assets/ev1.jpg'
import { Link } from 'react-router-dom'

const images = [
  { src: carIoniq, alt: '아이오닉5자동차' },
  { src: carCasper, alt: '케스퍼자동차' },
  { src: carTucson, alt: '투싼자동차' },
  // { src: carSantafe, alt: '싼타페자동차' },
];

const MainPage: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // 자동 슬라이드 기능
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(autoSlide); // 컴포넌트 언마운트 시 정리
  }, [current]); // current가 변경될 때마다 interval 재설정

  return (
    <div className='main-page'>
      {/* <div className='light-rays'>
        <LightRays
          raysOrigin="top-center"
          raysColor="rgb(255, 255, 255)"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          fadeDistance={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
        />
      </div> */}
      <div className='intro'>
        <p>전기차 라이프 EON 하나로</p>
        <p>시작과 끝, 모든 순간</p>
        {/* <p>전기차 라이프의<br />시작과 끝을 한번에</p> */}
        {/* <p>웹 하나로 시작되는 EON 라이프</p> */}
        {/* <p>Electric On Mobility</p> */}
      </div>
      <div className='explore'>
        {/* <Link to="/find">EON 체험하기</Link> */}
        {/* <button type='button'>EON 체험하기</button> */}
      </div>
      <div className='carousel'>
        <button className='prev-button' onClick={prevImage}>{'<'}</button>
        <img
          src={images[current].src}
          alt={images[current].alt}
        />
        <button className='next-button' onClick={nextImage}>{'>'}</button>
      </div>
      <div className='about'>
        <p>About EON</p>
        <p>
          우리는 전기차 사용자들에게 지침서가 되고 싶습니다.<br/>
          전기차 보급률 증가에 따라 사용자들이 겪는 불편함은 정보의 분산에 있습니다.<br/>
          EON은 사용자들에게 전기차 구매, 관리, 운행에 필요한 정보를 한번에 제공하는 통합 플랫폼을 목표로 합니다.
        </p>
        <img src={ev1} alt="서비스소개" />
      </div>
      <div className='detail'>
        <div className='left'>
          전기차 토탈 관리 플랫폼<br/>
          <span>Electric + ON<br/>
          EON</span>
        </div>
        <div className='right'>
          <div>
            <p>보조금 정책 조회</p>
            <p>성남시 기준 정보 + 지자체 전기차 보조금 정보 제공</p>
          </div>
          <div>
            <p>충전소 위치 조회</p>
            <p>실시간 충전소 위치, 사용 가능 여부, 충전 타입, 요금</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default MainPage;
