import React from 'react'
import Navbar from './Navbar'
import { Outlet, Link } from 'react-router-dom'
function NavbarLayout(){

    return(
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
export default NavbarLayout;