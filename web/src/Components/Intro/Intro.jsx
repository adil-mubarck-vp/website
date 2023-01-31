import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instgram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import My from '../../img/boy.png'
import Crown from '../../img/crown.png'
import Glass from '../../img/glassesimoji.png'
import Floating from '../FloatinngDiv/Floating'
import thumbup from'../../img/thumbup.png'





function Intro() {
  return (
    <div className='intro'>

        <div className="i-left">
            <div className="i-name">
                <span>Hey! I Am </span>
                <span>Adil Mubarack</span>
                <span>MERN Stack Developer with high level of expirience in web designing and development,producing the quality of work</span>
            </div>
            <button className='button i-button'>Hire me</button>

            <div className="i-icons">

                <a href=""><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/adil-mubarack-v-p-162518220"><img src={LinkedIn} alt="" /></a>
                <a href=""><img src={Instgram} alt="" /></a>


            </div>



        </div>
        <div className="i-right">
           <img src={Vector1} alt="" />
           <img src={Vector2} alt="" />
           <img src={My} alt="" />
           <img src={Glass} alt="" />

           
           <div style={{top:'-4%',left:'50%'}}>
            <Floating image={Crown} text1='Web' text2='Developer'/>
           </div>
           <div style={{top:'18rem',left:'0rem'}}>
            <Floating image={thumbup} text1='Best Design' text2='Award'/>
           </div>

           {/* {BLur Divs} */}
           <div className='blur' style={{background:"rgb(238 210 255"}}></div>
        </div>
        <div className='blur' style={{
            background:'#C1F5FF',
            top:'22rem',
            width:'21rem',
            height:'11rem',
            left:'-14rem'
        }}></div>
      
    </div>
  )
}

export default Intro
