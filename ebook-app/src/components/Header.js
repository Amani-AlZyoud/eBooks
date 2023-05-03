import React from 'react'
import logo from '../logo.png'
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg" id='nav-color'>
  <div className="container-fluid">
    <img src={logo} width={150} className="img-fluid rounded" alt=""/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" id='nav-link-color'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" id='nav-link-color'>E-Books</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" id='nav-link-color'>Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" id='nav-link-color'>About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    
    </>
  )
}

export default Header