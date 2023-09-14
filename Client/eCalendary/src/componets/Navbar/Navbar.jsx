import React, {useContext} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { PATH_BUSINESS, PATH_CALENDAR, PATH_LOGIN, PATH_REGISTER, PATH_HOME } from "../../routers/routerPaths";
import Logo from './Logo'
import { useLocation } from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import { Link } from "react-router-dom";


export default function NavbarCustom() {
  const { logout, logged } = useContext(AuthContext)
  const location = useLocation()
  const ruta = location.pathname

  return (
    <Navbar className="bg-gray-900 text-white">
      <NavbarBrand>
        <Logo />
        <Link to={PATH_HOME}>
          <p className="font-bold text-inherit text-white">E-Caar</p>
        </Link>
        </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem>
          <Link color="foreground" to="#">
            Features
          </Link>
        </NavbarItem> */}
        <NavbarItem isActive>
          <Link to={PATH_BUSINESS} >
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to={PATH_CALENDAR}>
            Calendario
          </Link>
        </NavbarItem>
      </NavbarContent>
      {
        logged ? <button onClick={() => logout()} className="text-white">Cerrar sesion</button> :
          <NavbarContent justify="end" className="text-white">
            {
              (ruta != PATH_LOGIN ) &&
                <NavbarItem className="hidden lg:flex">
                  <Link to={PATH_LOGIN}>Iniciar sesion</Link>
                </NavbarItem>
            }
            {
              (ruta != PATH_REGISTER ) &&
                <NavbarItem>
                  <Link to={PATH_REGISTER}>Regrse</Link>
                </NavbarItem>
            }
          </NavbarContent>
      }
    </Navbar>
  );
}
