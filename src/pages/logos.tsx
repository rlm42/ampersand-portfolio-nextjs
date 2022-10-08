import React from "react";
import { MDBLightbox, MDBLightboxItem, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Logos = () => {
    return ( 
        <MDBLightbox>
        <MDBRow>
          <MDBCol lg='4'>
            <MDBLightboxItem
              src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp'
              fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/1.webp'
              className='w-100 shadow-1-strong rounded'
            />
          </MDBCol>
          <MDBCol lg='4'>
            <MDBLightboxItem
              src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp'
              fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/2.webp'
              className='w-100 shadow-1-strong rounded'
            />
          </MDBCol>
          <MDBCol lg='4'>
            <MDBLightboxItem
              src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/3.webp'
              fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/3.webp'
              className='w-100 shadow-1-strong rounded'
            />
          </MDBCol>
        </MDBRow>
      </MDBLightbox>
     );
}
 
export default Logos;