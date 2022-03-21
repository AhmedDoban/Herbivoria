import React from "react";
import { SwiperSlide,Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,EffectFade} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import {Card,CardGroup,Button ,Row,Col} from 'react-bootstrap';
import './cart.css';

import SwiperCore, { EffectCube } from 'swiper';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
SwiperCore.use([EffectCube,Pagination]);
const Home = (props) => {

  return ( 
    <React.Fragment>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
       spaceBetween={0}
       slidesPerView={1}  
       effect='cube'
    
       initialSlide= {1}
       speed= {1000}
       loop= 'true'
       centeredSlides= 'true'
       roundLengths= 'true'
      mousewheel= 'true'
       grabCursor= 'true' 
       
      
       pagination={{
        clickable: true,
       
     }}>
      {props.sliders.map(
        p=> <SwiperSlide key={p.id}>
         <img src={p.nameSlider} className="Swiper" alt='Menu'/>
          </SwiperSlide>
      )}
      </Swiper>


<center>
<h1 className="header">Offers</h1>
</center>

        
  <Row xs={1} md={5} className="g-1" style={{margin:'25px',padding:'25px'}}>
  {props.home.map(p => (
    <div class="wrapper">

  <div class="overviewInfo">
    <div class="productinfo">
      <div class="grouptext">
         <h3>Category</h3>
         <p>eat</p>
      </div>
      <div class="grouptext">
         <h3>Status</h3>
         <p>New</p>
      </div>
      <div class="grouptext">
         <h3>PRICE</h3>
         <p>${p.price}</p>
      </div>
      
      
      <div class="productImage">
        <img src={p.imdSrc} alt="product: ps5 controller image" />
      </div>
      
  </div>
     
</div> 

  <div class="productSpecifications">
    <h1> {p.name} </h1>
    <p> {p.Details}</p>
    

    
    <div class="checkoutButton">
      <div class="priceTag">
        <span>$</span>{p.price}
      </div>
      <Link to="/Food/3.1" style={{textDecoration:'none'}}>
      <button class="preorder">
        <p>Go to Food Part</p>
        <div class="buttonaction">
         <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
  <path
    d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
    fill="currentColor"
  />
</svg>
        </div>
      </button> 
      </Link>
    </div>
  </div>

  
</div>

  ))}
</Row>

    </React.Fragment>
   );
}
 
export default Home;
