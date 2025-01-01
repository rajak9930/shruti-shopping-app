import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className=" bg-black text-white">
    <div className=" flex-row ">
      <a className="navbar-brand" href="#">Sopping Cart </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="" id="navbarText">
        <ul className="navbar-nav me-auto mb-2">
          <li className="">
           <NavLink to="/" className="text-white" aria-current="page">Home</NavLink>
          </li>
          <li className="">
           <NavLink to="/about" className="">About</NavLink>
          </li>
          <li className="">
           <NavLink to="/product" className="">Product</NavLink>
          </li>
        </ul>
       <NavLink to={"cart" } className="">Cart</NavLink>
      </div>
    </div>
  </nav>
  )
}

export default Header