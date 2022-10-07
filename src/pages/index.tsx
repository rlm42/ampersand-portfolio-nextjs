import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import ampersandLogo from "../../public/images/ampersandlogo.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ampersand Graphic Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Footer />

      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <SideNav />
          </MDBCol>
          <MDBCol md="4">
            <Image
              src="../../public/images/ampersandlogo.png"
              alt="Ampersand Logo"
              width={486}
              height={112}
              layout="responsive"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </MDBCol>
          <MDBCol md="4"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Home;
