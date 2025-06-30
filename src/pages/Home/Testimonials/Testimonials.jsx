import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./customNavigation.css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating, Star} from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
const myStyles = {
  itemShapes: Star,
  activeFillColor: '#F47D2C',
  inactiveFillColor: '#fbf1a9'
}


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // console.log(reviews);

  return (
    <section className="">
      <SectionTitle
        heading="Testimonials"
        subHeading="Words That Warm Our Hearts!"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper navigationStyle w-11/12">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-20 flex flex-col items-center">
              <Rating style={{maxWidth: 180}} itemStyles={myStyles} value={review.rating} readOnly />
              
              <p className="pt-3 text-justify"><i className="fa-solid fa-quote-left text-base"></i> {review.details} <i className="fa-solid fa-quote-right text-base"></i></p>
              <h3 className="text-xl text-primaryColor">--- {review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
