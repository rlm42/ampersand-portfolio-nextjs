import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Script from "next/script";

// Import Bootstrap and MDBootstrap stuff here instead of index.tsx, because we have a global layout
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import ampersandLogo from "../../public/images/ampersandlogo2.png";
import test from "../../public/images/test.png";

import "../components/SideNav.css"; // Global styles need to be imported here
import "../components/Footer.css";
import "../pages/about.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  //   require("mdb-react-ui-kit/dist/mdb-react-ui-kit.js");
  // }, []);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// Updated code to use Layout
