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

const Flyers = () => {
  const flyersData = [
    {
      img: "https://ampersandportfolio.imgix.net/Dhanesvara%20-%20A-flyer.jpg",
      title: "Dhanesvara - A Flyer",
      id: 1,
    },
    {
      img: "https://ampersandportfolio.imgix.net/Dhanesvara%20-%20B%20-%20flyer.jpg",
      title: "Dhanesvara - B Flyer",
      id: 2,
    },
    {
      img: "https://ampersandportfolio.imgix.net/Flyer%20Citralaras%20-%20A-logo.jpg",
      title: "Flyer Citralaras - A Logo",
      id: 3,
    },
  ];

  return (
    <div
      className="fluid d-flex align-items-center justify-content-center"
      style={{ height: "100vh", overflow: "scroll"}}
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
                sx={{ width: 1000 }}
                cols={1}
                gap={15}
                // rowHeight={164}
              >
                {flyersData.map((item) => (
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

export default Flyers;
