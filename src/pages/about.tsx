// import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="container-fluid about-text d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col-3"></div>
        <div className="col-4">
          <div>
            <p>
              Hello! My name is Restimewa, you can call me Resti. I was born and
              raised in Surabaya, Indonesia. The land of many cultures mixed
              together! I have worked for a variety of comapanies over my
              career, including Digital Printing, Advertising, creating
              Logos/Brochures, and also Website Design. Furthermore, I have
              experience with Product Labels, and countless other deliverables.
              As a passionate graphic designer who loves fine art, I know what a
              good design looks like.
            </p>
          </div>
          <div className="mt-3">
            <p>
              My interests outside of graphic design and fine arts, include
              listening to music, writing poetry, riding my scooter, hiking and
              visting many temples which my country has a lot of! I like to lean
              about history and culture. Eager to work with any brands or
              businesses.
            </p>
          </div>
          <div className="mt-3">
            <p>
              Have a question or business proposal? Fill out the contact form as
              I would love to help with your brand&apos;s needs and find a way I
              can help.
            </p>
          </div>
        </div>
        <div className="col-4">
          <Image
            src="/images/mewa2resized2.png"
            alt="Me"
            width="350"
            height="329"
            layout="intrinsic"
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </div>
    </div>
  );
};

export default About;
