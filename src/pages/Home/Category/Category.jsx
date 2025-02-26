import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./cagetory.css";

import salad from "../../../assets/category-images/salad.jpg";
import soup from "../../../assets/category-images/soup.jpg";
import pizza from "../../../assets/category-images/pizza.jpg";
import dessert from "../../../assets/category-images/dessert.jpg";
import drinks from "../../../assets/category-images/drinks.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order now"}
        subHeading={"From 9:00am to 11:00pm"}
      >
      </SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={salad} alt="" />
          <h3 className="text-4xl text-white text-center uppercase -mt-16">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={soup} alt="" />
          <h3 className="text-4xl text-white text-center uppercase -mt-16">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} alt="" />
          <h3 className="text-4xl text-white text-center uppercase -mt-16">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={dessert} alt="" />
          <h3 className="text-4xl text-white text-center uppercase -mt-16">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={drinks} alt="" />
          <h3 className="text-4xl text-white text-center uppercase -mt-16">
            Drinks
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
