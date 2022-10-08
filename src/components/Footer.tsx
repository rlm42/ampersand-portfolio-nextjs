import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-left fixed-bottom"
    >
      <MDBContainer className="pt-1">
        <MDBRow>
          <MDBCol>
            <div
              className="text-center p-2 font-monospace fs-6, footer-text"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              &copy; {new Date().getFullYear()} Copyright -{" "}
              <a>Ampersand Graphic Design</a>
            </div>
          </MDBCol>
          <MDBCol>
            <section className="mb-1">
              <MDBBtn
                color="none"
                rippleColor="dark"
                floating
                size="sm"
                className="text-dark m-1"
                href="https://www.facebook.com/ampersand.graphicdesign.79"
                role="button"
              >
                <MDBIcon fab className="fab fa-facebook-f" />
              </MDBBtn>

              <MDBBtn
                color="none"
                rippleColor="dark"
                floating
                size="sm"
                className="text-dark m-1"
                href="https://twitter.com/Ampersand1022"
                role="button"
              >
                <MDBIcon fab className="fa-twitter" />
              </MDBBtn>

              <MDBBtn
                color="none"
                rippleColor="dark"
                floating
                size="sm"
                className="text-dark m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab className="fa-instagram" />
              </MDBBtn>

              <MDBBtn
                color="none"
                rippleColor="dark"
                floating
                size="sm"
                className="text-dark m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab className="fa-linkedin" />
              </MDBBtn>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
