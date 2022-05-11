import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Contact from "./Contact";
import Detail from "./Detail";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Detail></Detail>
      <Services></Services>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
