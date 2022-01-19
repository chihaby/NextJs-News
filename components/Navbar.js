import { useState } from 'react';
import navbarStyles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { Button } from './Button.js';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={navbarStyles.navbarItems}>
      <h1 className={navbarStyles.navbar_logo}>
        Website Figure<i className='fab fa-react'></i>
      </h1>
      <div className={navbarStyles.menu_icon} onClick={handleClick}>
        <i className={toggle ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul
        className={
          toggle
            ? `${navbarStyles.nav_menu} ${navbarStyles.active}`
            : `${navbarStyles.nav_menu}`
        }
      >
        <li className={navbarStyles.nav_links}>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li className={navbarStyles.nav_links}>
          <Link href='/about'>
            <a>About Us</a>
          </Link>
        </li>
        <li className={navbarStyles.nav_links}>
          <Link href='/pricing'>
            <a>Blog Post</a>
          </Link>
        </li>
        <Button>Contact</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
