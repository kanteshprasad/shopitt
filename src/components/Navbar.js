import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <>
     <div className='userAuthenticationBtn'>
     <Link className='navlogo small' to='/'>
          Shopitt
        </Link>
       <div>
        <button type='button' className='loginbtn mx-1  '>
          <Link to='/login'>Login</Link>
        </button>
        <span className="dash" style={{ color: "black" }}>/</span>
        <button type='button' className='signupBtn mx-1  '>
          <Link to='/signup'>Signup</Link>
        </button>

        
        </div>
      </div>

      <div className="navbar">
        <ul className="navList">
          <li>
            <Link className='nav-link' to='/smartphones'>
              SMARTPHONES
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/laptops'>
              LAPTOPS
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/personalcare'>
              PERSONAL CARE
            </Link>
          </li>
        </ul>

        <Link className='navlogo large' to='/'>
          Shopitt
        </Link>

        <ul className="navList">
          <li>
            <Link className='nav-link' to='/homedecor'>
              HOME DECOR
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/fashion'>
              FASHION
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/automotive'>
              AUTOMOTIVE
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
