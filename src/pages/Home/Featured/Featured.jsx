import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
import Button from "../../../components/Button/LinkButton";

const Featured = () => {
  return (
    <div className="hero featured-bg-img bg-fixed text-white my-20">
      <div className="hero-overlay"></div>
      <div className="">
        <SectionTitle
          heading={"Featured Items"}
          subHeading={"Explore Our Culinary Masterpieces"}
          isFeatured = {true}
        ></SectionTitle>

        <div className="md:flex justify-center items-center pb-20 px-5 lg:px-16 xl:px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="mt-5 md:ml-10">
            <p>29 June, 2025</p>
            <p className="uppercase">Our Featured Delicacies</p>
            <p className="text-justify">
              At Food Heaven, we take pride in serving dishes that not only
              satisfy your cravings but also leave a lasting impression on your
              taste buds. Our featured items are crafted with the freshest
              ingredients and a passion for perfection, bringing you an
              unforgettable dining experience. From mouthwatering appetizers to
              delightful main courses and decadent desserts, each dish is a
              masterpiece prepared with love and care. Indulge in our signature
              creations and discover why Food Heaven is the ultimate destination
              for food enthusiasts!
            </p>
            <Button buttonValue={"Order Now"} buttonPath={"order/salad"} isFeatured = {true}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
