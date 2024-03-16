import React from 'react'
import './Projects.css'
import AnimatedSentence from './AnimatedSentence'

function Projects() {
  return (
    <div>
      <AnimatedSentence>
      <div className='projectsParent'>
        <div className='firstProject '>
          <h1>Blog App</h1>
          <ul>
            <li>A basic Blog App where user can create,edit and delete post.</li>
            <li>Uploading image was made possible by using multer library</li>
          </ul>
         <a href="https://github.com/jithin-nihtij/BlogRepo" className='links'>Github Repository</a>
        </div>

        <div className='secondProject '>
        <h1>WeatherApp</h1>
        <ul>
          <li>User need to create an account and login</li>
          <li>The app detects current location of the user</li>
          <li>The user can pin their favorite cities</li>
        </ul>
        <a href="https://github.com/jithin-nihtij/weatherApplication"  className='links'>Github Repository</a>
        </div>

        <div className='thirdProject '>
        <h1>Shopping Cart</h1>
        <ul>
          <li>Fetched Dummy products from Dummyjson</li>
          <li>Displayed the products</li>
          <li>Can add the products to the cart</li>
          <li>Made using React alone</li>
        </ul>
        <a href="https://github.com/jithin-nihtij/react/tree/master/my-app/src/ShoppingCart" className='links'>Github Repository</a>
        </div>

        <div className='fourthProject '>
        <h1>MicroSoft Azure Website Clone</h1>
        <ul>
          <li>Made a clone of MicroSoft Azure Clone using HTML,CSS and JS and deployed it to Netlify </li>
        </ul>
        <a href="https://github.com/jithin-nihtij/MicrosoftAzure" className='links'>Github Repository</a><br />
        <a href="https://jithin-azure.netlify.app/" className='links'>See the deployed Site</a>
        </div>

        <div className='fifthProject '>
        <h1>DoorDash Website Clone</h1>
        <ul>
          <li>Made a clone of DoorDash Clone using HTML,CSS and JS and deployed it to Netlify </li>
        </ul>
        <a href="https://github.com/jithin-nihtij/DoorDash" className='links'>Github Repository</a><br />
        <a href="https://jithin-doordash.netlify.app/" className='links'>See the deployed Site</a>
        </div>


      </div>
      </AnimatedSentence>
      
    </div>
  )
}

export default Projects