import Image from "next/image";
// import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import SideNav from "./SideNav";
import Footer from "./Footer";
import ampersandLogo from "../../public/images/ampersandlogo2.png";



import styles from "../../styles/Home.module.css";

// Global Layout

type LayoutProps = {
  children: React.ReactNode; // 👈️ type children
};

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          {/* <MDBCol md="4"></MDBCol> */}
          <div className="col-12">
            {/* <Image
              src={ampersandLogo}
              alt="Ampersand Logo"
              width="250"
              height="46"
              layout="responsive"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            /> */}
            <SideNav />
          </div>
          {/* <MDBCol md="4"></MDBCol> */}
        </div>
      </div>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
