### EON — 전기차 토탈 관리 플랫폼

소개
- EON은 전기차 사용자에게 구매·관리·운행 정보를 통합 제공하는 웹 프로젝트입니다.
- 프론트엔드는 React + TypeScript + Vite로 구성되어 있습니다.

주요 기능
- 차량별 보조금 검색 및 비교
- 지역별 보조금(국비, 지방비) 정보 필터링
- 실시간 API 연동하여 최신 데이터 제공
- VIte 기반 빠른 빌드

기술 스택
| 구분                     | 기술         |
| ---------------------- | ---------- |
| **Frontend Framework** | React      |
| **Language**           | TypeScript |
| **Bundler**            | Vite       |
| **Deploy**             | Vercel     |

개발 환경 설정
1. Node.js (권장 LTS) 설치
2. 의존성 설치
  ```js
   npm install
   ```
3. 환경 변수 설정
  ```js
    루트 디렉토리에 .env 파일 생성 후 값 입력

    VITE_API_BASE_URL=https://api.example.com
    VITE_API_KEY=your_api_key_here
  ```
4. 개발 서버 실행
  ```js
   npm run dev
  ```

폴더 구조
```js
/
└─ apps/
   └─ web/
      ├─ public/
      └─ src/
         ├─ api/
         ├─ assets/
         ├─ components/
         ├─ data/
         ├─ styles/
         └─ types/
```

| 폴더                  | 설명                                                                            |
| ------------------- | ----------------------------------------------------------------------------- |
| **apps/**           | 모노레포 구조의 루트 디렉토리                    |
| **apps/web/**       | 프론트엔드 React 웹 애플리케이션                                              |
| **public/**         | 정적 리소스(이미지, 아이콘 등)                                 |
| **src/**            | 실제 애플리케이션의 소스 코드                                                  |
| **src/api/**        | 백엔드와 통신하는 API 요청 코드 관리 |
| **src/assets/**     | 프로젝트에서 사용하는 이미지, 리소스 등을 저장                                        |
| **src/components/** | 재사용 가능한 UI 컴포넌트                         |
| **src/data/**       | 참고 데이터(JSON 등)                                            |
| **src/styles/**     | 전역 스타일, CSS 등 스타일 관련                           |
| **src/types/**      | 전역 타입 정의 파일                                         |



배포 정보
https://get-your-eon.vercel.app/
