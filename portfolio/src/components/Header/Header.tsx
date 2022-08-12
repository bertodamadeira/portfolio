import React from 'react'
import { IconButton } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Nav,
  Navbar,
} from "react-bootstrap"

import "./Header.css"
import { NavLink } from 'react-router-dom'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import {data} from '../../utils/data'


const Header = ()  => {
  return (
    <div className='menu_container'>
      <Navbar sticky='top' expand="lg" className='header'>
        <NavbarCollapse>
          <Nav>
            <Nav.Link as={NavLink} to={"/"} className='header_link'>
              Experiência
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/portfolio"} className='header_link'>
              Portfólio
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>
      <div className='icons_container'>
        {data.socials.map((obj:any) => (
          <IconButton key={obj.key} className='menu_icon' onClick={() => { window.open(obj.link, "_blank") }}>
            {obj.icon}
          </IconButton>
        ))}
      </div>
    </div>
  )
}

export default Header