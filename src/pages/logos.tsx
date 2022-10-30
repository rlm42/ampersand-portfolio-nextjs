import React from "react";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBLightbox,
//   MDBLightboxItem,
// } from "mdb-react-ui-kit";

import { ImageList, ImageListItem, Grid } from "@mui/material";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Logos = () => {
  const logosData = [
    {
      img: "https://ampersandportfolio.imgix.net/dehidrasi%20logo.jpg",
      title: "Dehidrasi Coffee Logo",
      id: 1,
    },
    {
      img: "https://ampersandportfolio.imgix.net/SariBhoga%20-%20Seafood%20Resto-logo.jpg",
      title: "Seafood Resto Logo",
      id: 2,
    },
    {
      img: "https://ampersandportfolio.imgix.net/Fisto%20-%20Phootography-logo.jpg",
      title: "Fisto Photography Logo",
      id: 3,
    },
    {
      img: "https://ampersandportfolio.imgix.net/Vihayana%20logo.jpg",
      title: "Vihayana Logo",
      id: 4,
    },
  ];

  return (
    <div
      className="fluid d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Grid
        container
        spacing={2}
        minHeight={160}
        justifyContent="center"
        alignItems="center"
        className="mt-3 mb-3"
      >
        <Grid display="flex" justifyContent="center" alignItems="center">
          <SimpleReactLightbox>
            <SRLWrapper>
              <ImageList
                // sx={{ width: 500, height: 450 }}
                sx={{ width: 800 }}
                cols={4}
                gap={15}
                // rowHeight={164}
              >
                {logosData.map((item) => (
                  <ImageListItem
                    key={item.img}
                    sx={{
                      opacity: ".8",
                      transition: "opacity .3s linear",
                      cursor: "pointer",
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        borderRadius: 15,
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </SRLWrapper>
          </SimpleReactLightbox>
        </Grid>
      </Grid>
    </div>
  );
};

export default Logos;
