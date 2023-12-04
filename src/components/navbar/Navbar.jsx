import React, { useContext } from 'react'
import {  Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { RecipeContext } from '../../App';
const Navbar = () => {

  const[open,setOpen]=useState(false)
const {logout}=useContext(RecipeContext)
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<esra yalcin/>"} </i>
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={()=>setOpen(!open)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu muhammed={open} onClick={()=>setOpen(false)}>
        <MenuLink to="/about"> about</MenuLink>
        <a href="https://github.com/" target='blank'>github</a>
        <MenuLink to="/" onClick={logout}>logout</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar