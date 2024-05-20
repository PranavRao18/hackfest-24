import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { useAuth } from '../components/AuthContext';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const isLoggedIn = useAuth();

  return (
    <nav className={`p-8 sm:px-24 w-full flex items-center py-10 fixed top-0 z-20 bg-green-600 text-white`}>
      <div className="w-full flex justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[22px] font-medium cursor-pointer">EcoTracker</p>
        </Link>
        {!isLoggedIn && 
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}>
            <Link to="/">Home </Link>
          </li>
          <li className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}>
            <Link to="/login">Login</Link>
          </li>
          <li className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        }
        {isLoggedIn && 
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}>
            <Link to="/">Home </Link>
          </li>
          <li className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className={`text-secondary hover:text-white text-[22px] font-light cursor-pointer`}>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        }
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          {!isLoggedIn && 
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
                <li
                  className={`text-secondary font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                >
                  <Link to="/">Home </Link>
                </li>
                <li
                  className={`text-secondary font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                >
                  <Link to="/login">Login </Link>
                </li>
                <li
                  className={`text-secondary font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                >
                  <Link to="/register">Register </Link>
                </li>
            </ul>
          }
          {isLoggedIn && 
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
                <li
                  className={`text-secondary font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                >
                  <Link to="/">Home </Link>
                </li>
                <li
                  className={`text-secondary font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                >
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li
                  className={`text-secondary font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                >
                  <Link to="/profile">Profile</Link>
                </li>
            </ul>
          }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;