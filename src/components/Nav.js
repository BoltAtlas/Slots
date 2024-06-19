import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import "../styles/nav.css";
// import Instructions from "./Instructions";


function Nav() {
  // Creates a click event/ function and sets it to false, and then makes a handler to make change the state of click 
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [open,setOpen] = useState(false);


  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
    setButton(true)
  }
}

  useEffect(() => {
    showButton();
  }, []);

window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="Nav">
        <div className="Nav_contain">
            <Link to ="/" className="Nav_logo" onClick={closeMobileMenu}>
              <i class="fa-solid fa-signal"></i> Slots<i class="fa-solid fa-signal fa-flip-horizontal"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click & window.innerWidth <= 960 ? 'nav-menu2' : "nav-menu"}>
              <li className='nav-item'>
                <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to = '/Instructions' className='nav-links' onClick={closeMobileMenu}>
                Instructions
                </Link>
              </li>
              <li className='nav-item'>
                <div className='nav-links' onClick={() => setOpen(!open)}>
                About Me
                </div>
                {open && <ul className='dropdown'>
                    <a href='https://www.linkedin.com/in/trishal-pandey-908b7b236/'className='drop_items'>
                      <img src='/images/Linkedin.png' alt="->"/> Linkedin
                    </a>
                    <a href='https://github.com/BoltAtlas'className='drop_items'>
                      <img src='/images/Github.png' alt="->"/> Github
                    </a>
                    <Link to='/' className='drop_items'>
                      <img src='/images/Email.png' alt="->"/> Contact Me
                    </Link>
                    <Link to='/' className='drop_items'>
                      <img src='/images/Resume.png' alt="->" /> Resume
                    </Link>
                  </ul>}
              </li>
              <li className='nav-item'>
                <Link to = '/Sign_up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
                </Link>
              </li>
            </ul>
              {button && <Button buttonStyle='btn--outline'>
              <Link to = '/Sign_up' className='nav-links1' onClick={closeMobileMenu}>
                Sign Up
              </Link>
              </Button> }

        </div>
    </nav>
    </>
  )
}

export default Nav;
