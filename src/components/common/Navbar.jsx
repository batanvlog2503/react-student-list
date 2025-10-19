import React from "react"
import { Link, Outlet } from "react-router-dom"
import "../common/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <ul className="navbar-nav d-flex flex-row w-100">
          <li className="nav-item mx-3">
            <Link
              to={"/view-student"}
              className="nav-link-custom"
            >
              View Student
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              to={"/add-student"}
              className="nav-link-custom"
            >
              Add New Student
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              to={"/"}
              className="nav-link-custom"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
