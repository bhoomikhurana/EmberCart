import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="contact-heading text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            <h6> We're Here to Help!</h6>
            Our dedicated team is ready to assist you. Whether you have
            questions about our products, need help with an order, or simply
            want to provide feedback, we're here for you.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@embercart.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
