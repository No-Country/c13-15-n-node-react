import React, {useContext, useEffect, useMemo, useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { PATH_BUSINESS, PATH_CALENDAR, PATH_LOGIN, PATH_REGISTER, PATH_HOME } from "../../routers/routerPaths";
import Logo from './Logo'
import { useLocation } from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'



export default function NavbarCustom() {
  const { logout, logged } = useContext(AuthContext)
  const location = useLocation()
  const ruta = location.pathname

  return (
    <Navbar className="bg-gray-900">
      <NavbarBrand>
        <Logo />
        <Link href={PATH_HOME}>
          <p className="font-bold text-inherit text-white">E-Calendar</p>
        </Link>
        </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem> */}
        <NavbarItem isActive>
          <Link href={PATH_BUSINESS} aria-current="page">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="text-white" href={PATH_CALENDAR} aria-current="page">
            Calendario
          </Link>
        </NavbarItem>
      </NavbarContent>
      {
        logged ? <button onClick={() => logout()} className="text-white">Cerrar sesion</button> :
          <NavbarContent justify="end">
            {
              (ruta == '/registro') &&
                <NavbarItem className="hidden lg:flex">
                  <Link href={PATH_LOGIN}>Iniciar sesion</Link>
                </NavbarItem>
            }
            {
              (ruta == '/acceso') &&
                <NavbarItem>
                  <Link href={PATH_REGISTER}>Registrarse</Link>
                </NavbarItem>
            }
          </NavbarContent>
      }
    </Navbar>
  );
}
