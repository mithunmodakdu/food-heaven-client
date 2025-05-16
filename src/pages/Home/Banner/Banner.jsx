import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/banner-images/banner_img1.jpg";
import img2 from "../../../assets/banner-images/banner_img2.jpg";
import img3 from "../../../assets/banner-images/banner_img3.jpg";
import img4 from "../../../assets/banner-images/banner_img4.jpg";
const Banner = () => {
  return (
    <div className="flex">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <Carousel>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
