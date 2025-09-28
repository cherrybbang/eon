import React from 'react'
import '../styles/footer.css'
import eon from '../assets/eon.png'

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div>
        <p>@2025 EON. All rights reserved.</p>
        <p>Terms</p>
        <p>Privacy Policy</p>
        <p>Github</p>
        <p>About Team</p>
      </div>
      <div>
        <img src={eon} alt="EON Logo" />
      </div>
    </div>
  )
}

export default Footer