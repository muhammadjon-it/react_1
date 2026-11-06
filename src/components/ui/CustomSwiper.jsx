import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function CustomSwiper({ children }) {
  const slides = React.Children.toArray(children);

  return (
    <SwiperComponent
      modules={[ Pagination]}
      slidesPerView={1}
      spaceBetween={20}
      navigation ={false}
      pagination={{ clickable: true }}
      loop={true}
      className="overflow-hidden rounded-xl"
    >
      {slides.map((child, index) => (
        <SwiperSlide 
          key={index} 
          className="flex items-center justify-center bg-gray-100"
        >
          {child}
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
}

export default CustomSwiper;
