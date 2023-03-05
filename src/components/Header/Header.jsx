import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
            <header className='header'>
                <NavLink className='navlink' to='/' >Home</NavLink>
            </header>
            <Outlet />
        </>
    )
}

export default Header