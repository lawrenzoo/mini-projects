import React from 'react';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {
  const [click,setClick] = useState(false);
   const handleClick = () => setClick(!click)
   

  return (
    <>
    <div className='navbar'>
      <div className='logo'>
          <Link to='/'>Mini-Projects</Link>
      </div>

      <div className={click ?('projects active'): ('projects')}>
        <ul>
          <Link to='/'><li>Project 1</li></Link>
          <Link to='/project2'><li>Project 2</li></Link>
          {/* <Link to='/project3'><li>Project 3</li></Link> */}
          <Link to='/project4'><li>Project 3</li></Link>
        </ul>
      </div>
      <div className="harmburger" onClick={handleClick} >
          {click? (<FaTimes size={20} style={{color: "black"}} />):
           (<FaBars size={20} style={{color: "black"}} />)
           }
        </div>
    </div>
   
    </>
  )
}
export default NavBar