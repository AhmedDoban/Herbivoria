import React from "react";
import OpenDetails from "./Open Details/OpenDetails";
import Footer from "./../../Components/Footer/Footer";
import OurResturant from "./Our Resturant/OurResturant";
import Delivery from "./../Home/Delivery/Delivery";

function AboutUs() {
  return (
    <React.Fragment>
      <div className="AboutUs">
        {/************************** Start Our Resturant*****************************/}
        <OurResturant />
        {/************************** End Our Resturant *****************************/}
        {/************************** Start Open Details *****************************/}
        <OpenDetails />
        {/************************** End Open Details *****************************/}
        {/************************** Start Delivery*****************************/}
        <Delivery />
        {/************************** End Delivery *****************************/}
        {/************************** Start Footer *****************************/}
        <Footer />
        {/************************** End Footer*****************************/}
      </div>
    </React.Fragment>
  );
}
export default AboutUs;
