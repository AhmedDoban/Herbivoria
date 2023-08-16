import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "./OurGallery.css";

function OurGallery() {
  const [Gallery, SetGallery] = useState([
    { img: require("../../../imgs/gallery/gallery-1.jpg") },
    { img: require("../../../imgs/gallery/gallery-2.jpg") },
    { img: require("../../../imgs/gallery/gallery-1.jpg") },
    { img: require("../../../imgs/gallery/gallery-3.jpg") },
    { img: require("../../../imgs/gallery/gallery-4.jpg") },
    { img: require("../../../imgs/gallery/gallery-5.jpg") },
    { img: require("../../../imgs/gallery/gallery-6.jpg") },
    { img: require("../../../imgs/gallery/gallery-7.jpg") },
    { img: require("../../../imgs/gallery/gallery-8.jpg") },
  ]);
  return (
    <React.Fragment>
      <div className="OurGallery">
        <div className="container" data-aos="fade-up">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
          >
            {Gallery.map((item, index) => (
              <SwiperSlide>
                <img src={item.img} alt="Gallery" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
}
export default OurGallery;
