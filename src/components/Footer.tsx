import React from "react";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn,
// } from "mdb-react-ui-kit";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    // <MDBFooter
    //   bgColor="light"
    //   className="text-center text-lg-left fixed-bottom"
    // >
    //   <MDBContainer className="pt-1">
    //     <MDBRow>
    //       <MDBCol>
    //         <div
    //           className="text-center p-2 font-monospace fs-6, footer-text"
    //           style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
    //         >
    //           &copy; {new Date().getFullYear()} Copyright -{" "}
    //           <a>Ampersand Graphic Design</a>
    //         </div>
    //       </MDBCol>
    //       <MDBCol>
    //         <section className="mb-1">
    //           <MDBBtn
    //             color="none"
    //             rippleColor="dark"
    //             floating
    //             size="sm"
    //             className="text-dark m-1"
    //             href="https://www.facebook.com/ampersand.graphicdesign.79"
    //             role="button"
    //           >
    //             <MDBIcon fab className="fab fa-facebook-f" />
    //           </MDBBtn>

    //           <MDBBtn
    //             color="none"
    //             rippleColor="dark"
    //             floating
    //             size="sm"
    //             className="text-dark m-1"
    //             href="https://twitter.com/Ampersand1022"
    //             role="button"
    //           >
    //             <MDBIcon fab className="fa-twitter" />
    //           </MDBBtn>

    //           <MDBBtn
    //             color="none"
    //             rippleColor="dark"
    //             floating
    //             size="sm"
    //             className="text-dark m-1"
    //             href="#!"
    //             role="button"
    //           >
    //             <MDBIcon fab className="fa-instagram" />
    //           </MDBBtn>

    //           <MDBBtn
    //             color="none"
    //             rippleColor="dark"
    //             floating
    //             size="sm"
    //             className="text-dark m-1"
    //             href="#!"
    //             role="button"
    //           >
    //             <MDBIcon fab className="fa-linkedin" />
    //           </MDBBtn>
    //         </section>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    // </MDBFooter>

    <Box
      // px={{ xs: 3, sm: 10 }}
      // py={{ xs: 1, sm: 1 }}
      bgcolor="text.secondary"
      color="white"
      position="fixed"
      left={0}
      bottom={0}
      right={0}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Box textAlign="left">
              &copy; {new Date().getFullYear()} Copyright -{" "}
              <a>Ampersand Graphic Design</a>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box textAlign="right">
              <Link href="https://www.facebook.com/ampersand.graphicdesign.79" color="inherit" sx={{ m: 2 }} >
                <FacebookIcon />
              </Link>
              <Link href="/" color="inherit" sx={{ m: 2 }} >
                <InstagramIcon />
              </Link>
              <Link href="https://twitter.com/Ampersand1022" color="inherit" sx={{ m: 2 }} >
                <TwitterIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
