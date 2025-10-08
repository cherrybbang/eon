import React, { useState } from 'react';
import { getModelsByManufacturer } from '../types/carModel';

const SubPage2: React.FC = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleManufacturerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const manufacturerId = e.target.value;
    setSelectedManufacturer(manufacturerId);
    setSelectedModel(''); // 모델 선택 초기화
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
  };

  // 선택된 제조사에 해당하는 모델 목록 가져오기
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
            <option value="1">현대자동차</option>
            <option value="2">기아</option>
            <option value="3">르노</option>
            <option value="4">BMW</option>
            <option value="5">테슬라</option>
            <option value="6">메르세데스벤츠</option>
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
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='result-box'>

      </div>
    </div>
  );
};

export default SubPage2;