import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBLightbox,
//   MDBLightboxItem,
// } from "mdb-react-ui-kit";

import { ImageList, ImageListItem, Grid } from "@mui/material";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import ampersandLogo from "../../public/images/ampersandlogo2.png";
import test from "../../public/images/test.png";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home: NextPage = () => {
  const itemData = [
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A0527.jpg",
      title: "Mount Mtatsminda, Tbilisi",
      id: 1,
    },
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A0547.jpg",
      title: "Panda the Dog",
      id: 2,
    },
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A0589.jpg",
      title: "Lake Lisi, Tbilisi",
      id: 3,
    },
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A0451.jpg",
      title: "Waterfall, Tbilisi National Botanical Garden",
      id: 4,
    },
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A0482.jpg",
      title: "Holy Mother of God Church of Bethlehem, Tbilisi",
      id: 5,
    },
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A0487.jpg",
      title: "Kartlis Deda Statue, Tbilisi",
      id: 6,
    },
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A0672.jpg",
      title: "Borjomi-Kharagauli National Park",
      id: 7,
    },
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A0965.jpg",
      title: "",
      id: 8,
    },
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A0968.jpg",
      title: "",
      id: 9,
    },
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A1011.jpg",
      title: "",
      id: 10,
    },
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A1050.jpg",
      title: "Sabaduri Forest",
      id: 11,
    },
    {
      img: "https://photographyportfolio.imgix.net/Georgia/049A1068.jpg",
      title: "Sabaduri Forest",
      id: 12,
    },
  ];

  return (
    <div
      // className={styles.container}
      style={{ height: "100vh" }}
      className="d-flex align-items-center justify-content-center mt-3 mb-3"
    >
      <Head>
        <title>Ampersand Graphic Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Row>
          <Col className="fluid d-flex justify-content-center align-items-center">
            {/* <Image
              src="/images/asthetic2.png"
              alt="Me"
              width="200"
              height="126"
              layout="intrinsic"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            /> */}
            <img
              className="d-block h-400 w-550"
              // We can resize the image on the fly using ?h=600
              src="https://ampersandportfolio.imgix.net/asthetic2.png"
              alt="Sense of Creativity"
            />
          </Col>
        </Row>
        <Row>
          <Col className="fluid d-flex justify-content-center align-items-center">
            <Carousel fade interval={5000}>
              <Carousel.Item className="fluid d-flex justify-content-center align-items-center">
                <img
                  className="d-block h-400 w-550"
                  // We can resize the image on the fly using ?h=600
                  src="https://ampersandportfolio.imgix.net/Dhanesvara%20-%20B%20-%20flyer%20resized2.jpg?&auto=compress,format"
                  alt="Dhanesvara - B Flyer"
                  // height="600px"
                  // max-width="1034px"
                  style={{
                    borderRadius: 15,
                  }}
                />

                <Carousel.Caption>
                  <h3>Flyer Design</h3>
                  {/* <p>Dhanesvara</p> */}
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="fluid d-flex justify-content-center align-items-center">
                <img
                  className="d-block h-400 w-689"
                  src="https://ampersandportfolio.imgix.net/Fisto%20-%20Phootography-logo%20resized2.jpg?&auto=compress,format"
                  alt="Fisto Photography Logo"
                  // height="600px"
                  // max-width="1034px"
                  style={{
                    borderRadius: 15,
                  }}
                />

                <Carousel.Caption>
                  <h3>Logo Design</h3>
                  {/* <p>Fisto Photography</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="fluid d-flex justify-content-center align-items-center">
                <img
                  className="d-block h-400 w-533"
                  src="https://ampersandportfolio.imgix.net/Moville_website%20_1%20resized2.jpg?&auto=compress,format"
                  alt="Movile Website - 1"
                  // height="600px"
                  // max-width="1034px"
                  style={{
                    borderRadius: 15,
                  }}
                />
                <Carousel.Caption>
                  <h3>Website Design</h3>
                  {/* <p>Moville</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="fluid d-flex justify-content-center align-items-center">
                <img
                  className="d-block h-400 w-399"
                  src="https://ampersandportfolio.imgix.net/T-shirt%20Black%20resized2.jpg?&auto=compress,format"
                  alt="Cafe Latte T-Shirt - Black"
                  // height="600px"
                  // max-width="1034px"
                  style={{
                    borderRadius: 15,
                  }}
                />

                <Carousel.Caption>
                  <h3>T-Shirt Design</h3>
                  {/* <p>Cafe Latte</p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>

    // <Carousel fade>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://ampersandportfolio.imgix.net/Moville_website%20_1.jpg?h=600&auto=compress,format"
    //       alt="First slide"
    //       height="600"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://ampersandportfolio.imgix.net/Dhanesvara%20-%20B%20-%20flyer.jpg?h=600&auto=compress,format"
    //       alt="Second slide"
    //       height="600"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://ampersandportfolio.imgix.net/Fisto%20-%20Phootography-logo.jpg?h=600&auto=compress,format"
    //       alt="Third slide"
    //       height="600"
    //     />

    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
};

export default Home;
