import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './MainPage'
import SubPage from './SubPage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Eon</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">메인페이지</Link> | <Link to="/find">서브페이지</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/find" element={<SubPage />} />
      </Routes>
    </>
  )
}

export default App
