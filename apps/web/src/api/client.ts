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

// extends RequestInit → fetch() 함수의 기본 옵션(RequestInit)을 상속
// RequestInit에는 method, body, mode, credentials 등 fetch에서 사용 가능한 옵션이 이미 정의되어 있음

// Record<string, string> → 키/값이 모두 문자열이라는 뜻
// 예: { 'Content-Type': 'application/json', 'X-API-KEY': 'abc' }
// 즉, headers의 key와 value 모두 string이어야 함