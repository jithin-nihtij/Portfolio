import React from 'react'
import './Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import AnimatedSentence from './AnimatedSentence';
function Skills() {
  return (

    <div className='skillsGrandParent'>
      <AnimatedSentence>
      <div className='skillsParent'>
      <div><FaHtml5  className='icons'/></div>
      <div><FaCss3Alt className='icons'/></div>
      <div><FaBootstrap className='icons'/></div>
      <div><IoLogoJavascript className='icons'/></div>
      <div><FaReact className='icons react'/></div>
      <div><SiMongodb className='icons'/></div>
      <div><SiExpress className='icons'/></div>
      <div><FaNodeJs className='icons'/></div>
      <div><FaGitAlt className='icons' /></div>
    </div>
      </AnimatedSentence>
      

    </div>
   
  )
}

export default Skills