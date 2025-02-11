import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (

    <div className='bg-dark'>
      <footer className='container p-2'>
        <div className='c-div'>
          <h1><i className="fa-solid fa-music me-2"></i>Media player</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae dolore quaerat fugiat tenetur i</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
          <p>Currently v5-3-2.0</p>
        </div>
        <div className='c-div'>
          <h1>Links</h1>
          <Link to={'/'}>Landing page</Link>
          <Link to={'/content'}>Home page</Link>
          <Link to={'/history'}>History page</Link>
        </div>
        <div className='c-div'>
          <h1>Guides</h1>
          <Link>React</Link>
          <Link>React Router</Link>
          <Link>React Bootstrap</Link>
        </div>
        <div className='c-div'>
          <h1>Contact</h1>
          <div className='inp-div'>
            <input type="text" className='form-control'/>
            <button className='btn btn-primary'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='i-div'>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </footer>
    </div>
  
  )
}

export default Footer