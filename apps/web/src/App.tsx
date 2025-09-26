import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './components/MainPage'
import SubPage from './components/SubPage'
import Header from './components/Header'
import SubPage2 from './components/SubPage2'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './styles/App.css'
import './styles/reset.css'

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
      {<Header />}
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/subsidy" element={<SubPage2 />} />
        <Route path="/find" element={<SubPage />} />
      </Routes>
    </>
  )
}

export default App
