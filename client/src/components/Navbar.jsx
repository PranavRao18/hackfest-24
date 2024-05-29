import React, { useState } from "react";
import { Link } from 'react-router-dom';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { useAuth } from '../components/AuthContext';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { isLoggedIn, logout } = useAuth(); // Ensure useAuth returns isLoggedIn and logout functions

  return (
    <nav className="p-8 sm:px-24 w-full flex items-center py-10 fixed top-0 z-20 bg-green-300 text-black">
      <div className="w-full flex justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-[22px] font-semibold cursor-pointer">EcoTracker</p>
        </Link>
        <div className="hidden sm:flex">
          {!isLoggedIn && (
            <ul className="list-none flex flex-row gap-10">
              <li className="text-secondary hover:text-white text-[22px] font-light cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="text-secondary hover:text-white text-[22px] font-light cursor-pointer">
                <Link to="/login">Login</Link>
              </li>
              <li className="text-secondary hover:text-white text-[22px] font-light cursor-pointer">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
          {isLoggedIn && (
            <ul className="list-none flex flex-row gap-10">
              <li className="text-secondary hover:text-white text-[22px] font-light cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="text-secondary hover:text-white text-[22px] font-light cursor-pointer">
                <Link to="/bank">Transactions</Link>
              </li>
              <li className="text-secondary hover:text-white text-[22px] font-light cursor-pointer">
                <Link to="/leaderboard">Leaderboards</Link>
              </li>
              <li className="text-secondary hover:text-white text-[22px] font-light cursor-pointer">
                <Link to="/education">Articles</Link>
              </li>
              <li className="text-secondary hover:text-white text-[22px] font-light cursor-pointer">
                <Link to="/incentives">Incentives</Link>
              </li>
              <li className="text-secondary hover:text-white text-[22px] font-light cursor-pointer">
                <Link to="/wearable">Wearable Data</Link>
              </li>
              <li className="text-secondary hover:text-white text-[22px] font-light cursor-pointer">
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          )}
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            {!isLoggedIn && (
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
                  <Link to="/" onClick={() => setToggle(false)}>Home</Link>
                </li>
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
                  <Link to="/login" onClick={() => setToggle(false)}>Login</Link>
                </li>
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
                  <Link to="/register" onClick={() => setToggle(false)}>Register</Link>
                </li>
              </ul>
            )}
            {isLoggedIn && (
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
                  <Link to="/" onClick={() => setToggle(false)}>Home</Link>
                </li>
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
                  <Link to="/bank" onClick={() => setToggle(false)}>Transactions</Link>
                </li>
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
                  <Link to="/leaderboard" onClick={() => setToggle(false)}>Leaderboards</Link>
                </li>
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
                  <Link to="/education" onClick={() => setToggle(false)}>Articles</Link>
                </li>
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
                  <Link to="/incentives" onClick={() => setToggle(false)}>Incentives</Link>
                </li>
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
                  <Link to="/wearable" onClick={() => setToggle(false)}>Wearable Data</Link>
                </li>
                <li className="text-secondary font-poppins font-medium cursor-pointer text-[16px]">
                  <Link to="/profile" onClick={() => setToggle(false)}>Profile</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
