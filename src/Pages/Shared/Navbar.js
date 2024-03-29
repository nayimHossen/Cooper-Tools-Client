import React from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "./../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import logo from '../../Assate/logo/tooLogo.png';

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  return (
    <div className="">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li tabIndex="0">
                <NavLink to="/about" className="justify-between">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              {
                user && <>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                </>
              }
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" style={{ height: "50px" }} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li tabIndex="0">
              <NavLink to="/about" className="justify-between">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            {
              user && <>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              </>
            }
          </ul>
        </div>

        <div className="navbar-end">
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link to="" onClick={handleSignOut} className="btn btn-sm">
              Sign Out
            </Link>
          ) : (
            <Link to="/signIn" className="btn btn-sm">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div >
  );
};

export default Navbar;
