import React, { useState } from "react";
import emailjs from "emailjs-com";

// import {
//   MDBInput,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
//   MDBTextArea,
//   MDBValidation,
// } from "mdb-react-ui-kit";

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
      style={{ height: "100vh" }}
    >
      <div className="container contactcontainer">
        <div className="row">
          <div className="col-4">{/* One of three columns */}</div>
          <div className="col-4">
            {/* <MDBValidation
              className="row g-3"
              noValidate
              needs-validation="true"
            > */}
            <div>Send a message and we will get back to you shortly.</div>
            <form needs-validation="true" onSubmit={sendEmail}>
              <div className="has-validation mt-3">
                <div>
                  <input
                    className="margin-bottom bg-light form-control"
                    // label="Name"
                    placeholder="Name"
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
                </div>
                <div>
                  <input
                    // mt is margin top
                    className="margin-bottom bg-light mt-3 form-control"
                    // label="Email"
                    placeholder="Email"
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
                </div>
                <div>
                  <input
                    className="margin-bottom bg-light mt-3 form-control"
                    // label="Subject"
                    placeholder="Subject"
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
                </div>
                <div>
                  <textarea
                    // label="Message"
                    placeholder="Message"
                    id="textArea"
                    rows={8}
                    className="margin-bottom bg-light mt-3 form-control"
                    name="message"
                    // @ts-ignore
                    // textarea
                    value={formValue.message}
                    onChange={onChange}
                    required
                    // @ts-ignore
                    validation="Please type your enquiry/request."
                    invalid
                  />
                </div>
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
              <button className="text-center mt-3 btn btn-dark">Send</button>
            </form>
            {/* </MDBValidation> */}
          </div>
          <div className="col-4">{/* One of three columns */}</div>
        </div>
      </div>
    </div>
  );
}

// @ts-ignore
function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_ampersand",
      "template_ovbbv1c",
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
