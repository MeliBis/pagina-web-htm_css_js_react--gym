import React, {useState} from "react";
import { Link, NavLink} from "react-router-dom";
import {links} from '../../data'

import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'


import "./navbar.css";
import Logo from "../../assets/iconos/logo.png";

const Navbar = () => {
  const [ isNavShowing, setisNavShowing] = useState(false);


  return (
    <>
      <nav>
        <div className="container nav__container">
          <Link to='/' className="logo" onClick={()=> setisNavShowing(false)}> 
            <img src={Logo} alt="nav logo" />
        {/*     <p>Force gym</p> */}
          </Link>
          <ul className={`nav__link ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
            {
              links.map(({name,path}, index) => {
                  return(
                    <li key={index}>
                      <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setisNavShowing(prev => !prev)}>{name}</NavLink>
                    </li>
                  )
              })
            }
          </ul>
          <button className="nav__toggle-btn" onClick={() => setisNavShowing(prev => !prev)}>
              {
                isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
              }
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
