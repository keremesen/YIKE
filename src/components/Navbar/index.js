import React from 'react';

import {Nav, NavLink, NavIcon, Bars, } from './NavbarElements'

const Navbar = ({toggle}) => {
    
    return (
    <>
            <Nav>
                <NavLink to="/">YIKE ELECTRONICS</NavLink>              
                <NavIcon >
                <p>Click</p>
                    <Bars onClick={toggle}  />
                </NavIcon>
                
            </Nav>
      </>
    )
}

export default Navbar
