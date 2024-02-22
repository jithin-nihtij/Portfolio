import React from 'react'
import {motion, useAnimationControls} from 'framer-motion'
import './TextSpan.css'

const AnimatedSentence = ({ children }) => {

    const revealVariants = {
      hidden: { opacity:  0, y:  50 },
      visible: { opacity:  1, y:  0, transition: { duration:  0.5 } },
    };
  
    return (
      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        style={{ marginBottom: '1rem' }}
        className='aboutSentence'
      >
        {children}
      </motion.div>
    );
  };

export default AnimatedSentence