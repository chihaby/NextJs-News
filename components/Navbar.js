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
        <i className='fa fa-globe'> Website Figure</i>
      </h1>
      <div className={navbarStyles.menu_icon} onClick={handleClick}>
        <i className={toggle ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul
        className={
          toggle
            ? `${navbarStyles.nav_menu} ${navbarStyles.nav_active}`
            : `${navbarStyles.nav_menu}`
        }
      >
        <li className={navbarStyles.nav_links}>
          <Link href='/'>
            <a onClick={handleClick}>Home</a>
          </Link>
        </li>
        <li className={navbarStyles.nav_links}>
          <Link href='/about'>
            <a onClick={handleClick}>About</a>
          </Link>
        </li>
        <li className={navbarStyles.nav_links}>
          <Link href='/articles'>
            <a onClick={handleClick}>Articles</a>
          </Link>
        </li>
        <Button onClick={handleClick}>Contact Us</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
