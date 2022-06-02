import React, { Component ,useState} from 'react';
import './navbarCSS.css';
import { Link } from 'react-router-dom';
import Cart from './cart';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import {Button} from 'react-bootstrap';
import { Navigation, Pagination, Scrollbar, A11y ,EffectFade ,Autoplay} from 'swiper';
import { SwiperSlide,Swiper } from 'swiper/react';
import './vendor/bootstrap-icons/bootstrap-icons.css';
import './vendor/boxicons/css/boxicons.min.css';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import Food from './food';
import Drinks from './drinks';
import Dessert from './Dessert';

AOS.init();

const Home = (props) => {
  let cout =props.count1+props.count2
  const [swiperRef, setSwiperRef] = useState(null);

  function openSlider (){
    var x = document.getElementById("mylinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return ( 
    <React.Fragment>
           <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center justify-content-between">
              <h1 class="logo">
                <a href="#"><i class="bi bi-list mobile-nav-toggle" onClick={openSlider}>GrillHouse</i></a>
                </h1>
              <nav id="navbar" class="navbar">
                <ul id="mylinks">
                  <li><a class="nav-link scrollto " href="#contact">اتصل بنا </a></li>
                  <li><a class="nav-link scrollto" href="#about">من نحن</a></li> 
                  <li><a class="nav-link scrollto" href="#place">فروعنا</a></li>
                  <li><a class="nav-link scrollto " href="#DesertBack">المشروبات</a></li>
                  <li><a class="nav-link scrollto"  href="#FoodBAck">قائمه الطعام</a></li>
                  <li><Link class="nav-link scrollto" to="/CART">العربة<i className='fas fa-cart-plus'>{cout}</i></Link></li>
                  <li><a class="nav-link scrollto active" href="#">الرئيسية</a></li>
                </ul>
                
              </nav>
            </div>
            </header>


    <div id="dataHomeSlider">
        <h1>Welcome to GrillHouse</h1>
        <p>we want to be haapy with us and we hope to Provide the best service</p>

        <button type='button'>Lets see</button>
    </div>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
       spaceBetween={0}
       autoplay={{ delay: 1000 }}
       loop= 'true'
       centeredSlides= 'true'
       roundLengths= 'true'
       mousewheel= 'true'
       grabCursor= 'true'               
       pagination={{clickable: true, }}
       className="Swiper"
       >
      {props.Slider.map(
        p=> <SwiperSlide key={p.id} className="swipderslide">
          <div className='DataSlider'>
           <img src={p.url} className="Swiper" alt='Menu'/>
          </div>
          </SwiperSlide>
      )}
      </Swiper>
    

<Food 
  Food={props.Food}
  handle={props.handle}
  id="Food"
/>

<Drinks 
Drinks={props.Drinks}
handle={props.handleDrinks}
/>
<Dessert
Dessert={props.Dessert}
/>

     <section id="contact" class="contact" data-aos="fade-up">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
        </div>
      </div>
      <div class="row mt-1">

        <div class="col-lg-4">
          <div class="info">
            <div class="address">
                <a href="https://goo.gl/maps/sroomfEm3k15dAhG7">
                    <i class="bi bi-geo-alt"></i>
                </a>
              <h4>Location</h4>
              <p>El salam first ,Cairo</p>
            </div>

            <div class="email">
              <a href="mailto:ahmedzoro323@gmail.com">
                  <i class="bi bi-envelope"></i>
              </a>
            <h4>Email</h4>
            <p>ahmedzoro323@gmail.com</p>
          </div>

          <div class="phone">
            <a href="tel:+201555894860">
                <i class="bi bi-phone"></i>
            </a>
            <h4>Call</h4>
            <p>01555894860</p>
          </div>

          </div>

        </div>

        <div class="col-lg-8 mt-5 mt-lg-0">

          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message" id="textaria"  required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>

                <div class="text-center"><button type="submit">Send Message</button></div>
        
          </form>

        </div>

      </div>

    </section>
    <br></br>

    <footer id="footer">
      <div class="container">
        <h3>Ahmed Hesham Sad Doban</h3>
      </div>
      <p>you can follow me in this sites</p>   
      <div class="social-links">
            <a href="https://twitter.com/ahmed_doban" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com/ahmed.doban.56" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/ahmeddoban/" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="https://api.whatsapp.com/send/?phone=201555894860&text&app_absent=0" class="google-plus"><i class="bx bxl-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/ahmeddoban" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            <a href="https://github.com/AhmedDoban" class="linkedin"><i class="bx bxl-github"></i></a>
      </div>


    </footer>

    </React.Fragment>
   );
}
 
export default Home;