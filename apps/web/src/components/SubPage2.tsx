import React, { useState } from 'react';
import { getModelsByManufacturer, getImageByModel } from '../types/carModel';
import '../styles/sub2.css';
import carImage from '../assets/car_ioniq.avif';
import { fetchSubsidy } from '../api/subsidy';

const SubPage2: React.FC = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [carImageSrc, setCarImageSrc] = useState(carImage);

  const [subsidyResults, setSubsidyResults] = useState<any[]>([]);

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

    try {
      const data = await fetchSubsidy(selectedManufacturer, selectedModel);
      console.log('검색 결과:', data);
      
      setSubsidyResults(Array.isArray(data) ? data : [data]);
      // 선택 모델에 해당하는 이미지로 변경
      setCarImageSrc(getImageByModel(selectedModel));
      
    } catch (error) {
      alert('보조금 정보를 가져오는 중 오류가 발생했습니다.');
      console.error('검색 오류:', error);
    }
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
            <option value='현대자동차'>현대</option>
            <option value='기아'>기아</option>
            <option value='르노코리아'>르노</option>
            <option value='BMW'>BMW</option>
            <option value='테슬라코리아'>테슬라</option>
            <option value='메르세데스벤츠코리아'>메르세데스벤츠</option>
            <option value='폭스바겐그룹코리아'>폭스바겐</option>
            <option value='케이지모빌리티'>KGM</option>
            <option value='폴스타오토모티브코리아'>폴스타</option>
            <option value='볼보자동차코리아'>볼보</option>
            <option value='비와이디코리아'>BYD</option>
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
       {subsidyResults.length === 0 ? (
          <div>
            <p className='no-results'>검색 결과가 없습니다.</p>
          </div>
        ) : (
          subsidyResults.map((result, index) => (
            <div key={`res-${index}`} className='result-item'>
              <div>
                <img src={carImageSrc} alt='자동차모델이미지' />
                <div className='result-text'>
                  <h4>{result.model_name}</h4>
                  <p>국비: <span className='sub_national'>{result.subsidy_national}</span> (만원)</p>
                  <p>지방비: <span className='sub_local'>{result.subsidy_local}</span> (만원)</p>
                  <p>총합: <span className='sub_total'>{result.subsidy_total}</span> (만원)</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SubPage2;