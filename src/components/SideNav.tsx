// import React, { useState, useEffect } from "react";

// import {
//   MDBSideNav,
//   MDBSideNavMenu,
//   MDBSideNavItem,
//   MDBSideNavLink,
//   MDBSideNavCollapse,
//   MDBBtn,
//   MDBIcon,
// } from "mdb-react-ui-kit";

import Link from "next/link";

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Image from "next/image";
import ampersandLogo from "../../public/images/ampersandlogo2.png";

const pages = ["Home", "About Me", "Portfolio", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const SideNav = () => {
  //   const [slimOpen, setSlimOpen] = useState(true);
  //   const [slimCollapse1, setSlimCollapse1] = useState(false);
  //   const [slimCollapse2, setSlimCollapse2] = useState(false);
  //   const [slimMode, setSlimMode] = useState(true);

  return (
    // <>
    //   <MDBSideNav
    //   className="customnav"
    //   color='light'
    //   bgColor='dark'
    //   outline
    //   backdrop={false}
    //   isOpen={slimOpen}
    //   absolute
    //   slim={slimMode}
    //   slimCollapsed={!slimCollapse1 && !slimCollapse2}
    //   getOpenState={(e: any) => setSlimOpen(e)}
    // >
    //   <MDBSideNavMenu>
    //     <MDBSideNavItem>
    //       <MDBSideNavLink href="/">
    //         <MDBIcon fas icon="home" className="fa-fw me-3" />
    //         <span className="sidenav-non-slim">Home</span>
    //       </MDBSideNavLink>
    //     </MDBSideNavItem>
    //     <MDBSideNavItem>
    //       <MDBSideNavLink href="/about">
    //         <MDBIcon fas icon="user" className="fa-fw me-3" />
    //         <span className="sidenav-non-slim">About Me</span>
    //       </MDBSideNavLink>
    //     </MDBSideNavItem>
    //     <MDBSideNavItem>
    //       <MDBSideNavLink
    //         collapse-hide="true"
    //         icon="angle-down"
    //         shouldBeExpanded={slimCollapse1}
    //         onClick={() => setSlimCollapse1(!slimCollapse1)}
    //       >
    //         <MDBIcon fas icon="pencil-alt" className="fa-fw me-3" />
    //         <span className="sidenav-non-slim">Portfolio</span>
    //       </MDBSideNavLink>
    //       <MDBSideNavCollapse show={slimCollapse1}>
    //         <MDBSideNavLink>Logo</MDBSideNavLink>
    //         <MDBSideNavLink>Flyers</MDBSideNavLink>
    //         <MDBSideNavLink>Websites</MDBSideNavLink>
    //         <MDBSideNavLink>T-Shirts</MDBSideNavLink>
    //       </MDBSideNavCollapse>
    //     </MDBSideNavItem>
    //     <MDBSideNavItem>
    //       <MDBSideNavLink tag="a" href="/contact">
    //         <MDBIcon fas icon="envelope" className="fa-fw me-3" />
    //         <span className="sidenav-non-slim">Contact</span>
    //       </MDBSideNavLink>
    //     </MDBSideNavItem>
    //   </MDBSideNavMenu>
    // </MDBSideNav>

    // <div style={{ padding: "20px" }} className="text-center">
    //   <MDBBtn
    //     onClick={() => setSlimOpen(!slimOpen)}
    //     color="dark"
    //     outline
    //     size="sm"
    //     className="mx-2"
    //   >
    //     <MDBIcon fas icon="bars" />
    //   </MDBBtn>
    //   <MDBBtn
    //     onClick={() => setSlimMode(!slimMode)}
    //     color="dark"
    //     outline
    //     size="sm"
    //     className="mx-2"
    //   >
    //     Toggle slim
    //   </MDBBtn>
    // </div>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    //   <div className="container-fluid">
    //     <img src={ampersandLogo} width="200px" />
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavDropdown"
    //       aria-controls="navbarNavDropdown"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/about">
    //             About Me
    //           </a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle"
    //             href="#"
    //             id="navbarDropdownMenuLink"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Portfolio
    //           </a>
    //           <ul
    //             className="dropdown-menu"
    //             aria-labelledby="navbarDropdownMenuLink"
    //           >
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Logos
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Flyers
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Websites
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 T-Shirts
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/contact">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <img src={ampersandLogo} width="200px" height="auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="/logos">Logos</NavDropdown.Item>
              <NavDropdown.Item href="/flyers">Flyers</NavDropdown.Item>
              <NavDropdown.Item href="/websites">Websites</NavDropdown.Item>
              <NavDropdown.Item href="/t-shirts">T-Shirts</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </>
  );
};

export default SideNav;
