import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured-bg-img text-white pt-8 my-20">
      <SectionTitle
        heading={"Featured Items"}
        subHeading={"Explore Our Culinary Masterpieces"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>11 March, 2025</p>
          <p className="uppercase">Our Featured Delicacies</p>
          <p>At Food Heaven, we take pride in serving dishes that not only satisfy your cravings but also leave a lasting impression on your taste buds. Our featured items are crafted with the freshest ingredients and a passion for perfection, bringing you an unforgettable dining experience. From mouthwatering appetizers to delightful main courses and decadent desserts, each dish is a masterpiece prepared with love and care. Indulge in our signature creations and discover why Food Heaven is the ultimate destination for food enthusiasts!</p>
          <button className="btn btn-outline text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
