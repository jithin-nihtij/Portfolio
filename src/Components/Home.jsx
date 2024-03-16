import React from 'react'
import './Home.css'
import image from '../Assets/Jithin.png'
import TextSpan from './TextSpan';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function Home() {

  const me = `I'm Jithin`.split('')
  const dev = `WEB DEVELOPER`.split('')

  return (
    <div className='home' >
      
      <div>
          <div>
            {me.map((letter, index) => {
              return (
                  <TextSpan key={index}>
                    {letter ===" " ? "\u00A0":letter}
                  </TextSpan>
              
              );
            })}
          </div>

          <div >
            {dev.map((letter, index) => {
              return (
                  <TextSpan key={index}>
                    {letter ===" " ? "\u00A0":letter}
                  </TextSpan>
              
              );
            })}
          </div>
      </div>

      <div className='imgDiv'>
            <div className='imgFit'>
              <img src={image} alt="" />
            </div>
            <div>
              <ul>

                <li >
                  <a href="https://www.linkedin.com/in/jithinpjithin">
                  <FaLinkedin />
                  </a>
                
                </li>

                <li>
                  <a href="https://github.com/jithin-nihtij">
                  <FaGithub />
                  </a>
                
                </li>

                <li>
                  <a href="https://www.instagram.com/jithin_nihtij/">
                  <FaInstagramSquare />
                  </a>
                
                </li>
              </ul>
            </div>
            
      </div>

    </div>
  )
}

export default Home