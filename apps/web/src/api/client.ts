// api 공통 로직
const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export interface ApiOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function apiFetch<T> (
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const url = `${baseURL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Accept': 'application/json',
      'X-API-KEY': apiKey,
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

