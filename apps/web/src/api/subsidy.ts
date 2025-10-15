import { apiFetch } from './client';

interface SubsidyResponse {
  subsidyAmount: number;
  region: string;
  // 필요한 타입 정의 추가
}

export async function fetchSubsidy(manufacturer: string, modelGroup: string) {
  // const params = new URLSearchParams({
  //   manufacturer: encodeURIComponent(manufacturer),
  //   model_group: encodeURIComponent(modelGroup),
  // });

  // return apiFetch<SubsidyResponse>(`/subsidy?${params.toString()}`, {
  //   method: 'GET',
  // });

  const params = `manufacturer=${encodeURIComponent(manufacturer)}&model_group=${encodeURIComponent(modelGroup)}`;

  return apiFetch<SubsidyResponse>(`/subsidy?${params}`, {
    method: 'GET',
  });
}