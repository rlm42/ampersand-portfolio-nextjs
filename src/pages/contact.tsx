import React, { useState } from "react";
import emailjs from "emailjs-com";

import {
  MDBInput,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBTextArea,
  MDBValidation,
  MDBIcon,
} from "mdb-react-ui-kit";

function Contact() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <MDBContainer className="contactcontainer">
        <MDBRow>
          <MDBCol size="md" className="col-example">
            {/* One of three columns */}
          </MDBCol>
          <MDBCol size="md" className="col-example">
            {/* <MDBValidation
              className="row g-3"
              noValidate
              needs-validation="true"
            > */}
            <form needs-validation="true" onSubmit={sendEmail}>
              <div className="has-validation">
                <MDBInput
                  className="margin-bottom bg-light"
                  label="Name"
                  name="name"
                  id="typeText"
                  type="text"
                  value={formValue.name}
                  onChange={onChange}
                  required
                  // @ts-ignore
                  validation="Please provide your name."
                  invalid
                />
                <MDBInput
                  // mt is margin top
                  className="margin-bottom bg-light mt-3"
                  label="Email"
                  name="email"
                  id="typeEmail"
                  type="email"
                  value={formValue.email}
                  onChange={onChange}
                  required
                  // @ts-ignore
                  validation="Please provide your valid email."
                  invalid
                />
                <MDBInput
                  className="margin-bottom bg-light mt-3"
                  label="Subject"
                  name="subject"
                  id="typeText"
                  type="text"
                  value={formValue.subject}
                  onChange={onChange}
                  required
                  // @ts-ignore
                  validation="Please provide a subject."
                  invalid
                />
                <MDBTextArea
                  label="Message"
                  id="textArea"
                  rows={4}
                  className="margin-bottom bg-light mt-3"
                  name="message"
                  // @ts-ignore
                  // textarea
                  rows={4}
                  value={formValue.message}
                  onChange={onChange}
                  required
                  // @ts-ignore
                  validation="Please type your enquiry/request."
                  invalid
                />
                {/* <MDBInput
                  className="margin-bottom bg-light"
                  label="Message"
                  name="message"
                  id="textAreaExample"
                  // @ts-ignore
                  // textarea
                  rows={4}
                  value={formValue.message}
                  onChange={onChange}
                  required
                  validation="Please type your enquiry/request."
                  invalid
                /> */}
              </div>
              {/* <MDBBtn className="text-center mt-3">Send Enquiry</MDBBtn> */}
              <MDBBtn tag="a" className="text-center mt-3">
              Send <MDBIcon far icon="paper-plane" />
              </MDBBtn>
            </form>
            {/* </MDBValidation> */}
          </MDBCol>
          <MDBCol size="md" className="col-example">
            {/* One of three columns */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

// @ts-ignore
function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_d3g2p4k",
      "template_v2gkwlk",
      e.target,
      "user_krfqXrYCupFzUs6XwTjHN"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Email sent!"); // I added this in
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

export default Contact;
