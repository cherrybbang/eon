export interface CarModel {
  id: string;
  name: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  models: CarModel[];
}

export const manufacturers: Manufacturer[] = [
  {
    id: '1',
    name: '현대자동차',
    models: [
      { id: 'gv60', name: 'GV 60' },
      { id: 'gv70', name: 'GV 70' },
      { id: 'ioniq5', name: '아이오닉 5' }
    ]
  },
  {
    id: '2',
    name: '기아',
    models: [
      { id: 'ev6', name: 'EV6' },
      { id: 'niro', name: '니로' },
      { id: 'carnival', name: '카니발' }
    ]
  },
  {
    id: '3',
    name: '르노',
    models: [
      { id: 'sm6', name: 'SM6' },
      { id: 'qm6', name: 'QM6' }
    ]
  },
  {
    id: '4',
    name: 'BMW',
    models: [
      { id: 'x3', name: 'X3' },
      { id: 'x5', name: 'X5' },
      { id: 'i4', name: 'i4' }
    ]
  },
  {
    id: '5',
    name: '테슬라',
    models: [
      { id: 'model3', name: 'Model 3' },
      { id: 'modelY', name: 'Model Y' },
      { id: 'modelS', name: 'Model S' }
    ]
  },
  {
    id: '6',
    name: '메르세데스벤츠',
    models: [
      { id: 'eqc', name: 'EQC' },
      { id: 'eqs', name: 'EQS' },
      { id: 'convertible', name: '컨버터블' }
    ]
  }
];

export const getModelsByManufacturer = (manufacturerId: string): CarModel[] => {
  const manufacturer = manufacturers.find(m => m.id === manufacturerId);
  return manufacturer ? manufacturer.models : [];
};
