import React from "react";
import Landing from "./Landing/Landing";
import OurFeatures from "./Our Features/OurFeatures";
import Footer from "./../../Components/Footer/Footer";
import Delivery from "./Delivery/Delivery";

function Home() {
  return (
    <React.Fragment>
      {/*=========================================================
        # Landing 
       =========================================================*/}
      <Landing />
      {/*=========================================================
        # Our features 
       =========================================================*/}
      <OurFeatures />
      {/*=========================================================
        # Delivery
       =========================================================*/}
      <Delivery />
      {/*=========================================================
        # Footer
      =========================================================*/}
      <Footer />
    </React.Fragment>
  );
}
export default Home;
