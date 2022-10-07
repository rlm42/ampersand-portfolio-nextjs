import React, { useState } from "react";

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
        backdrop={false}
        isOpen={slimOpen}
        absolute
        slim={slimMode}
        slimCollapsed={!slimCollapse1 && !slimCollapse2}
        getOpenState={(e: any) => setSlimOpen(e)}
      >
        <MDBSideNavMenu className="links">
          <MDBSideNavItem>
            <MDBSideNavLink href="#">
              <MDBIcon far icon="smile" className="fa-fw me-3" />
              <span className="sidenav-non-slim">About Me</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon="angle-down"
              shouldBeExpanded={slimCollapse1}
              onClick={() => setSlimCollapse1(!slimCollapse1)}
            >
              <MDBIcon fas icon="book-open" className="fa-fw me-3" />
              <span className="sidenav-non-slim">Portfolio</span>
            </MDBSideNavLink>
            <MDBSideNavCollapse show={slimCollapse1}>
              <MDBSideNavLink  href="#">Logos</MDBSideNavLink>
              <MDBSideNavLink href="#">Flyers</MDBSideNavLink>
              <MDBSideNavLink href="#">Websites</MDBSideNavLink>
              <MDBSideNavLink href="#">T-Shirts</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink href="#">
              <MDBIcon far icon="envelope" className="fa-fw me-3" />
              <span className="sidenav-non-slim">Contact</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </MDBSideNav>

      <div style={{ padding: "20px" }} className="text-center">
        <MDBBtn
          onClick={() => setSlimOpen(!slimOpen)}
          size="sm"
          className="mx-2"
          color="dark"
        >
          <MDBIcon fas icon="bars" />
        </MDBBtn>
        <MDBBtn
          onClick={() => setSlimMode(!slimMode)}
          size="sm"
          className="mx-2"
          color="dark"
        >
          Toggle slim
        </MDBBtn>
      </div>
    </>
  );
};

export default SideNav;
