import React from 'react';

export default function Navbar() {
    const [isActive, setisActive] = React.useState(false)
  
    return (
      <div className='container'>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a href='/' className='navbar-item'>
            <img src='logo.png'
              alt='Logo'
              width='32'
              height='32'
            />&nbsp;<strong>React App</strong> 
          </a>
  
          <button
            onClick={() => {
              setisActive(!isActive)
            }}            
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>
        <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <a href='/' className='navbar-item'>
                Home
              </a>
              <a href='/dashboard' className='navbar-item'>
                Dashboard
              </a>
              <a href='/about' className='navbar-item'>
                About
              </a>
              <a href='/contact' className='navbar-item'>
                Contact
              </a>
              <a href='/reports' className='navbar-item'>
                Reports
              </a>
              <a href='/docs' className='navbar-item'>
                Docs
              </a>
            </div>
          </div>
        </div>
      </nav>
      <hr className="hr" style={{marginBottom: 0 + 'em'}}></hr>
      </div>
    )
  }