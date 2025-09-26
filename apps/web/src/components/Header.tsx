import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import LightRays from './LightRays'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to="/">EON</Link>
      </div>
      <div>
        <nav>
          <Link to="/subsidy">보조금확인</Link>
          <Link to="/find">충전소찾기</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header