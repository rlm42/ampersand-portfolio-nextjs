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
        <MDBSideNavMenu>
          <MDBSideNavItem>
            <MDBSideNavLink>
              <MDBIcon far icon="smile" className="fa-fw me-3" />
              <span className="sidenav-non-slim">Link 1</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon="angle-down"
              shouldBeExpanded={slimCollapse1}
              onClick={() => setSlimCollapse1(!slimCollapse1)}
            >
              <MDBIcon fas icon="grin" className="fa-fw me-3" />
              <span className="sidenav-non-slim">Category 1</span>
            </MDBSideNavLink>
            <MDBSideNavCollapse show={slimCollapse1}>
              <MDBSideNavLink>Link 2</MDBSideNavLink>
              <MDBSideNavLink>Link 3</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon="angle-down"
              shouldBeExpanded={slimCollapse2}
              onClick={() => setSlimCollapse2(!slimCollapse2)}
            >
              <MDBIcon fas icon="grin" className="fa-fw me-3" />
              <span className="sidenav-non-slim">Category 2</span>
            </MDBSideNavLink>
            <MDBSideNavCollapse show={slimCollapse2}>
              <MDBSideNavLink>Link 4</MDBSideNavLink>
              <MDBSideNavLink>Link 5</MDBSideNavLink>
            </MDBSideNavCollapse>
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
