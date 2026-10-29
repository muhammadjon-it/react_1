
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MySwiper({ children }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className=" overflow-hidden rounded-xl"
    >
      {children.map((child, index) => (
        <SwiperSlide
          key={index}
          className="flex items-center justify-center bg-gray-100"
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
