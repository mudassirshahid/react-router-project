import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
            <NavLink to="/" className={({isActive}) => `${isActive ? 'text-orange-600' : 'text-gray-600'}`}>
                Home
            </NavLink>
            
        </li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li>
        <NavLink to="/about" className={({isActive}) => `${isActive ? 'text-orange-600' : 'text-gray-600'}`}>
                About
            </NavLink>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
      <NavLink to="/" className={({isActive}) => `${isActive ? 'text-orange-600' : 'text-gray-600'}`}>
                Home
            </NavLink>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
      <NavLink to="/about" className={({isActive}) => `${isActive ? 'text-orange-600' : 'text-gray-600'}`}>
                About
            </NavLink>
      </li>
      <li>
      <NavLink to="/user" className={({isActive}) => `${isActive ? 'text-orange-600' : 'text-gray-600'}`}>
                User
            </NavLink>
      </li>
      <li>
      <NavLink to="/github" className={({isActive}) => `${isActive ? 'text-orange-600' : 'text-gray-600'}`}>
                Github
            </NavLink>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </>
  )
}

export default Header
