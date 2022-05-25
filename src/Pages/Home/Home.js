import React from "react";
import Footer from "../Shared/Footer";
import AndroidApp from "./AndroidApp";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import OtherSection from "./OtherSection";

import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <AndroidApp></AndroidApp>
      <OtherSection></OtherSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
