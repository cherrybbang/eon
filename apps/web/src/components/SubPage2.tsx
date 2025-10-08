import React, { useState } from 'react';
import { getModelsByManufacturer } from '../types/carModel';

const SubPage2: React.FC = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleManufacturerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const manufacturerId = e.target.value;
    setSelectedManufacturer(manufacturerId);
    setSelectedModel(''); // 모델명 초기화
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
  };

  const handleSearch = async () => {
    if (!selectedManufacturer || !selectedModel) {
      alert('제조사와 모델을 모두 선택해주세요.');
      return;
    }

    try {
      const params = new URLSearchParams({
        manufacturer: selectedManufacturer,
        model_group: selectedModel
      });

      const response = await fetch(`http://localhost:8000/api/v1/subsidies/search/?${params}`);

      const data = await response.json();
      console.log('검색 결과:', data);
      
    } catch (error) {
      console.error('검색 오류:', error);
    }
  };

  // 모델명 가져오기
  const availableModels = getModelsByManufacturer(selectedManufacturer);

  return (
    <div className='sub-page2'>
      <div className='request-box'>
        <div>
          <select>
            <option value="" disabled selected>시/도 선택</option>
            <option value="">경기도</option>
          </select>

          <select>
            <option value="" disabled selected>시/군/구 선택</option>
            <option value="">성남시</option>
          </select>

          <select value={selectedManufacturer} onChange={handleManufacturerChange}>
            <option value="" disabled selected>제조사 선택</option>
            <option value="현대자동차">현대자동차</option>
            <option value="기아">기아</option>
            <option value="르노">르노</option>
            <option value="BMW">BMW</option>
            <option value="테슬라">테슬라</option>
            <option value="메르세데스벤츠">메르세데스벤츠</option>
          </select>

          <select 
            value={selectedModel}
            onChange={handleModelChange}
            disabled={!selectedManufacturer}
          >
           <option value="" disabled selected>
              {!selectedManufacturer ? '제조사를 먼저 선택해주세요' : '모델명 선택'}
            </option>
            {availableModels.map(model => (
              <option key={model.id} value={model.name}>
                {model.name}
              </option>
            ))}
          </select>

          <button type='button' onClick={handleSearch}>보조금 조회</button>
        </div>
      </div>
      <div className='result-box'>

      </div>
    </div>
  );
};

export default SubPage2;