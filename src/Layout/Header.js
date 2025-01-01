import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar w/ text</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
           <NavLink to="/" className="nav-link px-2" aria-current="page">Home</NavLink>
          </li>
          <li className="nav-item">
           <NavLink to="/about" className="nav-link px-2">About</NavLink>
          </li>
          <li className="nav-item">
           <NavLink to="/product" className="nav-link px-2">Product</NavLink>
          </li>
        </ul>
       <NavLink to={"cart" } className="btn btn-outline-light me-2">Cart</NavLink>
      </div>
    </div>
  </nav>
  )
}

export default Header