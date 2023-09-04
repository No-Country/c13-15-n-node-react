import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { PATH_BUSINESS, PATH_CALENDAR, PATH_LOGIN, PATH_REGISTER } from "../../routers/routerPaths";

const AcmeLogo = () => (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );


export default function NavbarCustom() {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">E-Calendar</p>
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
          <Link color="foreground" href={PATH_CALENDAR}>
            Calendario
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href={PATH_LOGIN}>Iniciar sesion</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={PATH_REGISTER}>Registrarse</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}