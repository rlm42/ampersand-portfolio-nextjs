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

const Websites = () => {
  const websitesData = [
    {
      img: "https://ampersandportfolio.imgix.net/Moville_website%20_1.jpg",
      title: "Moville Website - 1",
      id: 1,
    },
    {
      img: "https://ampersandportfolio.imgix.net/Moville_website%20_2.jpg",
      title: "Moville Website - 1",
      id: 2,
    },
    {
      img: "https://ampersandportfolio.imgix.net/Revel-product-website%201.jpg",
      title: "Revel Website - 1",
      id: 3,
    },
    {
      img: "https://ampersandportfolio.imgix.net/Revel-product-website-2.jpg",
      title: "Revel Website - 2",
      id: 4,
    },
    {
      img: "https://ampersandportfolio.imgix.net/Revel-product-website%203.jpg",
      title: "Revel Website - 3",
      id: 4,
    },
    {
      img: "https://ampersandportfolio.imgix.net/Website%20karina.jpg",
      title: "Karina Osman Website",
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
                sx={{ width: 800 }}
                cols={3}
                gap={15}
                // rowHeight={164}
              >
                {websitesData.map((item) => (
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

export default Websites;
