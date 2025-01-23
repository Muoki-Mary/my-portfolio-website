import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Prince Jay",
    review:
      "Delivered excellent results on time with great attention to detail. Highly recommend!",
  },
  {
    avatar: AVTR2,
    name: "Alex Kim",
    review:
      "Exceptional work on our website design—efficient, professional, and exceeded expectations!",
  },
  {
    avatar: AVTR3,
    name: "Lee Tyldesley",
    review:
      "A pleasure to collaborate with—great problem-solving skills and clean, effective code!",
  },
  {
    avatar: AVTR4,
    name: "Marie Slinchez",
    review:
      "Amazing creativity and strong technical skills. The project was completed seamlessly and with great quality!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review your clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        //install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client__review">{review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
