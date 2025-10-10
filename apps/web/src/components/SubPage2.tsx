import React, { useState } from 'react';
import { getModelsByManufacturer, getImageByModel } from '../types/carModel';
import '../styles/sub2.css';
import carImage from '../assets/car_ioniq.avif';

const SubPage2: React.FC = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [carImageSrc, setCarImageSrc] = useState(carImage);

  const handleManufacturerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const manufacturerId = e.target.value;
    setSelectedManufacturer(manufacturerId);
    setSelectedModel(''); // 모델명 초기화
    setCarImageSrc(carImage); // 제조사 변경하면 default 이미지로 초기화
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
  };

  const handleSearch = async () => {
    if (!selectedManufacturer || !selectedModel) {
      alert('제조사와 모델 모두 선택해주세요.');
      return;
    }

    setCarImageSrc(getImageByModel(selectedModel));

    // try {
    //   const params = new URLSearchParams({
    //     manufacturer: selectedManufacturer,
    //     model_group: selectedModel
    //   });

    //   const response = await fetch(`http://localhost:8000/api/v1/subsidies/search/?${params}`);

    //   const data = await response.json();
    //   console.log('검색 결과:', data);

    //   // 선택 모델에 해당하는 이미지로 변경
    //   // setCarImageSrc(getImageByModel(selectedModel));
      
    // } catch (error) {
    //   console.error('검색 오류:', error);
    // }
  };

  // 모델명 가져오기
  const availableModels = getModelsByManufacturer(selectedManufacturer);

  return (
    <div className='sub-page2'>
      <div className='request-box'>
        <div>
          <p>내 차 보조금 조회하기</p>
          <select className='sido-select' defaultValue='default'>
            <option value='default' disabled>시/도 선택</option>
            <option value=''>경기도</option>
          </select>

          <select className='sigungu-select' defaultValue='default'>
            <option value='default' disabled>시/군/구 선택</option>
            <option value=''>성남시</option>
          </select>

          <select 
            className='manufacturer-select'
            value={selectedManufacturer}
            onChange={handleManufacturerChange}
          >
            <option value='' disabled>제조사 선택</option>
            <option value='현대자동차'>현대자동차</option>
            <option value='기아'>기아</option>
            <option value='르노'>르노</option>
            <option value='BMW'>BMW</option>
            <option value='테슬라'>테슬라</option>
            <option value='메르세데스벤츠'>메르세데스벤츠</option>
          </select>

          <select 
            className='model-select'
            value={selectedModel}
            onChange={handleModelChange}
            disabled={!selectedManufacturer}
          >
           <option value="" disabled>
              {!selectedManufacturer ? '제조사를 먼저 선택해주세요' : '모델명 선택'}
            </option>
            {availableModels.map(model => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>

          <button type='button' onClick={handleSearch}>보조금 조회</button>
        </div>
      </div>
      <div className='result-box'>
        <div>
          <img src={carImageSrc} alt='자동차모델이미지'></img>
          <p>국비 <span>100</span></p>
          <p>지방비 <span>50</span></p>
          <p>보조금 총합 <span>150</span></p>
        </div>
      </div>
    </div>
  );
};

export default SubPage2;