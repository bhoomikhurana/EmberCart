import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/ABOUT.jpg" alt="ABOUT" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="contact-heading text-center">PRIVACY POLICY</h1>
          <p className="text-justify mt-2">
            <h4>OUR STORY</h4>
            Welcome to EmberCart, where passion meets innovation! Founded in
            2015, we set out on a journey to revolutionize the e-commerce
            experience by providing a unique platform that seamlessly blends
            cutting-edge technology with an unwavering commitment to customer
            satisfaction. At EmberCart, we believe in infusing warmth into your
            shopping experience. Our core values of quality, creativity, and
            community drive us to curate a collection of products that not only
            meet your needs but also spark joy in every purchase.
            <br />
            <br />
            <br />
            <h4>What Sets Us Apart </h4>
            <br />
            <h5>Quality Products</h5>
            EmberCart takes pride in offering a diverse and carefully curated
            selection of premium items, sourced from around the globe. Our
            products are designed to elevate your lifestyle, combining style and
            functionality in every detail.
            <br />
            <br />
            <h5>Exceptional Customer Service </h5> Your satisfaction is our
            priority. The EmberCart support team is dedicated to assisting you
            at every step of your shopping journey. We value your feedback and
            are committed to continuously improving to meet and exceed your
            expectations.
            <br />
            <br />
            <h5>Innovation in Every Detail </h5>
            EmberCart is not just a marketplace; it's a hub of innovation. From
            state-of-the-art technology to unique product features, we're
            committed to pushing the boundaries of online shopping and providing
            you with a one-of-a-kind experience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
