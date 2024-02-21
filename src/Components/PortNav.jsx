import React from 'react'
import { Link } from 'react-router-dom'
import './PortNav.css'

function PortNav() {
  return (
    <div className='navGrandParent'>
        <div className='navParent'>
            <div className='portNav'>
                <Link to={`/`} className='navLinks'>Home</Link>    
                <Link to={`/about`} className='navLinks'>About</Link> 
                <Link to={`/skills`} className='navLinks'>Skills</Link> 
                <Link to={`/projects`} className='navLinks'>Projects</Link>    
            </div>
        </div>
    </div>
  )
}

export default PortNav