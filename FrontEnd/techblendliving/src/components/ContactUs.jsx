import React, { useState } from "react";
import "../Css/Contactus.css";
import { useNavigate } from "react-router-dom";
import { sendFeedbackData } from "../services/User";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavigationBar } from "./NavigationBar";

export function ContactUs() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({ name: "", phonenumber: "", email: "", subject: "", message: "" });

  const handleChange = (event) => {
    setFeedback({ ...feedback, [event.target.name]: event.target.value });
    console.log('feedback', feedback)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendFeedbackData(feedback);
      console.log('Response:', response); // Log the response
      if (response.data.status) {
        // Display success toast
        toast.success("Thanks for your feedback. Your feedback is valuable to us.", {
          autoClose: 5000,
          onClose: () => {
            console.log('Toast closed');
            // Navigate after toast is closed
            navigate("/");
          }
        });
      }
    } catch (error) {
      console.error('ERROR', error);
    }
  };

  return (
    <>
     <NavigationBar></NavigationBar>
    <div className="maincontactus">
     
      <ToastContainer/>
      <div className="containercontact">
        <center><h1>Connect With us</h1>
        <p className="sub-text">
          We would love to respond to your queries and help you succeed. <br />
          Feel free to get in touch with us
        </p>
        </center>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send your Request</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input type="String" name="phonenumber" placeholder="Enter your Number" maxLength={10} minLength={10} onChange={handleChange} required />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>E-mail</label>
                  <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange} required />
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" name="subject" placeholder="Enter Your Subject" onChange={handleChange} required />
                </div>
              </div>

              <label>Message</label>
              <textarea rows="2" name="message" placeholder="Text Area" onChange={handleChange} required></textarea>
              <button style={{ border: "0", borderRadius: "15px" }} className="btntag" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Reach Us</h3>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>info@pvpittssm.edu.in</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>8830565816</td>
                </tr>
                <tr>
                  <td>Fax</td>
                  <td>+1-907-555-1234 for the US and +44-20-1224-3456 for the UKDelhi</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                  PADMABHOOSHAN VASANTDADA PATIL INSTITUTE OF TECHNOLOGY (PVPIT)
S No 33/22, Pune Pirangut Road, next to Chandani Chowk, Bavdhan, Pune, Maharashtra 411021
                  </td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30269.851013311996!2d73.772434!3d18.495823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be5faaaaaaab%3A0x858e71c09987358e!2sPADMABHOOSHAN%20VASANTDADA%20PATIL%20INSTITUTE%20OF%20TECHNOLOGY%20(PVPIT)!5e0!3m2!1sen!2sin!4v1713085636161!5m2!1sen!2sin"
                      width="400rem"
                      style={{ border: "0", borderRadius: "15px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
