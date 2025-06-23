import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {FreeMode, Pagination } from "swiper/modules";
import "./cagetory.css";

import salad from "../../../assets/category-images/salad.jpg";
import soup from "../../../assets/category-images/soup.jpg";
import pizza from "../../../assets/category-images/pizza.jpg";
import dessert from "../../../assets/category-images/dessert.jpg";
import drinks from "../../../assets/category-images/drinks.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order now"}
        subHeading={"From 9:00am to 11:00pm"}
      ></SectionTitle>

      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24 w-11/12"
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <Link to={"order/salad"}>
            <img src={salad} alt="" />
            <h3 className="text-lg md:text-2xl text-white text-center uppercase -mt-16">
              Salads
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"order/soup"}>
            <img src={soup} alt="" />
            <h3 className="text-lg md:text-2xl text-white text-center uppercase -mt-16">
              Soups
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"order/pizza"}>
            <img src={pizza} alt="" />
            <h3 className="text-lg md:text-2xl text-white text-center uppercase -mt-16">
              Pizzas
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"order/desserts"}>
            <img src={dessert} alt="" />
            <h3 className="text-lg md:text-2xl text-white text-center uppercase -mt-16">
              Desserts
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"order/drinks"}>
            <img src={drinks} alt="" />
            <h3 className="text-lg md:text-2xl text-white text-center uppercase -mt-16">
              Drinks
            </h3>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
