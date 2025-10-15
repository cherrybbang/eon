import { apiFetch } from './client';

export async function fetchSubsidy(manufacturer: string, modelGroup: string) {
  const params = `manufacturer=${encodeURIComponent(manufacturer)}&model_group=${encodeURIComponent(modelGroup)}`;

  return apiFetch (`/subsidy?${params}`, {
    method: 'GET',
  });
}