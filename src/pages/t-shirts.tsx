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

const TShirts = () => {
  const tshirtsData = [
    {
      img: "https://ampersandportfolio.imgix.net/T-shirt%20-%20White.jpg",
      title: "Cafe Latte T-Shirt - White",
      id: 1,
    },
    {
      img: "https://ampersandportfolio.imgix.net/T-shirt%20Black.jpg",
      title: "Cafe Latte T-Shirt - Black",
      id: 2,
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
                sx={{ width: 500, height: 450 }}
                gap={15}
                // cols={3}
                // rowHeight={164}
              >
                {tshirtsData.map((item) => (
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

export default TShirts;
