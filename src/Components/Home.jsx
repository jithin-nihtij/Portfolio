import React from 'react'
import './Home.css'
import image from '../Assets/Jithin.png'
import TextSpan from './TextSpan';



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
            
      </div>

    </div>
  )
}

export default Home