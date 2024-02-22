import React from 'react'
import './TextSpan.css'
import {motion, useAnimationControls} from 'framer-motion'

function TextSpan({children}) {

  const controls = useAnimationControls()


  const rubberband = (()=>{
    controls.start({
      transform:[
        "scale3d(1,1,1)",
        "scale3d(1.2,1.5,1)",
        "scale3d(1.1,0.8,1)",
        "scale3d(0.5,0.9,1)",
        "scale3d(1,1,1)",
      ],
      color:[
        "white",
      ],
      transition:{
        times:[0,0.5,0.7,0.9]
      }
     
    })
  })

  return (
    
        <motion.span 
   
        animate={controls} 
        onMouseOver={()=>rubberband()}>
            {children}
        </motion.span>
        
   
  )
}







export  default TextSpan