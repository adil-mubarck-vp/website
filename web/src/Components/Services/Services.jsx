import React from 'react'
import './Services.css'
import humble from'../../img/humble.png'
import Heart from'../../img/heartemoji.png'
import Glass from '../../img/glassesimoji.png'
import Card from '../Card/Card'

function Services() {
  return (
    <div className='services'>


        {/* left-Side */}
      <div className="awesom">
        <span>My Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            <br/> possimus eos qui minus nemo</span>
           <button className="button s-button">Download CV</button>
      </div>

      {/* Right-Side */}
      <div className="cards">
            <div>
                <Card
                emoji={Heart}
                heading={'Design'}
                detail={"Figma,Sketch,Photoshop,Adobe,Adobe xd"}
                
                />
                
                </div> 
      </div>

    </div>
  )
}

export default Services
