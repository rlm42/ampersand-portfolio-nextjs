import React, { useState, useEffect } from "react";

import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavCollapse,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

const SideNav = () => {
  const [slimOpen, setSlimOpen] = useState(true);
  const [slimCollapse1, setSlimCollapse1] = useState(false);
  const [slimCollapse2, setSlimCollapse2] = useState(false);
  const [slimMode, setSlimMode] = useState(true);

  return (
    <>
      <MDBSideNav
        className="customnav"
        color='light'
        bgColor='dark'
        outline
        backdrop={false}
        isOpen={slimOpen}
        absolute
        slim={slimMode}
        slimCollapsed={!slimCollapse1 && !slimCollapse2}
        getOpenState={(e: any) => setSlimOpen(e)}
      >
        <MDBSideNavMenu>
          <MDBSideNavItem>
            <MDBSideNavLink href="/">
              <MDBIcon fas icon="home" className="fa-fw me-3" />
              <span className="sidenav-non-slim">Home</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink href="/about">
              <MDBIcon fas icon="user" className="fa-fw me-3" />
              <span className="sidenav-non-slim">About Me</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              collapse-hide="true"
              icon="angle-down"
              shouldBeExpanded={slimCollapse1}
              onClick={() => setSlimCollapse1(!slimCollapse1)}
            >
              <MDBIcon fas icon="pencil-alt" className="fa-fw me-3" />
              <span className="sidenav-non-slim">Portfolio</span>
            </MDBSideNavLink>
            <MDBSideNavCollapse show={slimCollapse1}>
              <MDBSideNavLink>Logo</MDBSideNavLink>
              <MDBSideNavLink>Flyers</MDBSideNavLink>
              <MDBSideNavLink>Websites</MDBSideNavLink>
              <MDBSideNavLink>T-Shirts</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink tag="a" href="/contact">
              <MDBIcon fas icon="envelope" className="fa-fw me-3" />
              <span className="sidenav-non-slim">Contact</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </MDBSideNav>

      <div style={{ padding: "20px" }} className="text-center">
        <MDBBtn
          onClick={() => setSlimOpen(!slimOpen)}
          color="dark"
          outline
          size="sm"
          className="mx-2"
        >
          <MDBIcon fas icon="bars" />
        </MDBBtn>
        <MDBBtn
          onClick={() => setSlimMode(!slimMode)}
          color="dark"
          outline
          size="sm"
          className="mx-2"
        >
          Toggle slim
        </MDBBtn>
      </div>
    </>
  );
};

export default SideNav;
