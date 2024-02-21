import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './PortNav.css'

function PortNav() {
  return (
    <div className='navGrandParent'>
        <div className='navParent'>
            <div className='portNav'>
                <NavLink to={`/`} activeClassName='active' className='navLinks'>Home</NavLink>    
                <NavLink to={`/about`} className='navLinks'>About</NavLink> 
                <NavLink to={`/skills`} className='navLinks'>Skills</NavLink> 
                <NavLink to={`/projects`} className='navLinks'>Projects</NavLink>    
            </div>
        </div>
    </div>
  )
}

export default PortNav