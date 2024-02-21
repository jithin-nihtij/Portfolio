import React from 'react'
import './TextSpan.css'
import {motion} from 'framer-motion'

function TextSpan({children}) {
  return (
    
        <motion.span whileHover={{scale:1.4,color:'#155'}}>
            {children}
        </motion.span>
        
   
  )
}

export default TextSpan