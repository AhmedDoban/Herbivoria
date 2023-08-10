import React from "react";
import Landing from "./Landing/Landing";
import OurFeatures from "./Our Features/OurFeatures";
import Footer from "./../../Components/Footer/Footer";
import Delivery from "./Delivery/Delivery";
import Dishes from "./Dishes/Dishes";
import Reservation from "./Reservation/Reservation";
import Testimonios from "./Testimonios/Testimonios";

function Home(props) {
  return (
    <React.Fragment>
      {/*=========================================================
        # Landing 
       =========================================================*/}
      <Landing />
      {/*=========================================================
        # Dishes
       =========================================================*/}
      <Dishes />
      {/*=========================================================
        # Our features 
       =========================================================*/}
      <OurFeatures />
      {/*=========================================================
        # Delivery
       =========================================================*/}
      <Delivery />
      {/*=========================================================
        # Reservation
       =========================================================*/}
      <Reservation />
      {/*=========================================================
        # Testimonio
       =========================================================*/}
      <Testimonios />
      {/*=========================================================
        # Footer
      =========================================================*/}
      <Footer />
    </React.Fragment>
  );
}
export default Home;
