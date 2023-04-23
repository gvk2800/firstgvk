import React from 'react'
import { Link,NavLink,useLocation } from 'react-router-dom'
import "../styles/Header.scss"
import { HashLink,NavHashLink } from 'react-router-hash-link'
import { useCallback } from "react";
const Header = () => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  return (
    <nav>
        <h1>Gvk First Project</h1>
        <main>
            <NavHashLink to={"/#home"}style={
          isActive("#home")
            ? {
                color: "red"
              }
            : {}
        }
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>Home</NavHashLink>
            <Link to={"/contact"}>Contact</Link>
            <NavHashLink to={"/#about"}style={
          isActive("#about")
            ? {
                color: "red"
              }
            : {}
        }
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>About</NavHashLink>
            <NavHashLink to={"/#brands"}style={
          isActive("#brands")
            ? {
                color: "red"
              }
            : {}
        }
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>Brands</NavHashLink>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header