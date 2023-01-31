import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='n-main'>
        <div className='n-left'>
            <div className="n-name">ADIL</div>
            <span>toggle</span>
        </div>
        <div className='n-right'>
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Expirience</li>
                    <li>Portfolio</li>
                    <li>Testimonias</li>
                </ul>
            </div>
            <button className='button n-button'>Contact</button>
        </div>
        
      
    </div>
  )
}

export default Navbar
