import React from "react";
import OpenDetails from "./Open Details/OpenDetails";
import Footer from "./../../Components/Footer/Footer";
import OurResturant from "./Our Resturant/OurResturant";
import Status from "./Status/Status";
import Events from "./Events/Events";
import OurChefs from "./Our Chefs/OurChefs";

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
        {/************************** Start Status*****************************/}
        <Status />
        {/************************** End Status *****************************/}
        {/************************** Start Events*****************************/}
        <Events />
        {/************************** End Events *****************************/}
        {/************************** Start Chefs*****************************/}
        <OurChefs />
        {/************************** End Chefs *****************************/}
        {/************************** Start Footer *****************************/}
        <Footer />
        {/************************** End Footer*****************************/}
      </div>
    </React.Fragment>
  );
}
export default AboutUs;
