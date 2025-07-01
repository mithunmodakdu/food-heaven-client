import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaLocationPin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-[100px]">
      <div className="flex flex-col lg:flex-row  justify-center md:items-center lg:items-baseline bg-secondaryColor text-whiteColor p-10">
        <aside className="w-3/4 md:w-2/4 lg:w-1/4 mx-auto lg:mx-0 text-center lg:text-left mb-5">
          <img src="/logo.png" alt="" className="w-24 mx-auto lg:mx-0" />
          <p>
            Deliciously Delivered, Lovingly Prepared – Only at Food Heaven. Food
            Heaven helps you enjoy the best food experience.
          </p>
          <ul className="menu menu-horizontal rounded-box">
            <li>
              <a className="tooltip tooltip-bottom" data-tip="Facebook">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-bottom" data-tip="LinkedIn">
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a className="tooltip tooltip-bottom" data-tip="Twitter">
                <FaTwitter></FaTwitter>
              </a>
            </li>
          </ul>
        </aside>
        <div className="flex flex-col md:flex-row gap-5 justify-center mx-auto text-center md:text-left   ">
          <nav className="menu menu-vertical">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Order Online</a>
            <a className="link link-hover">Home Delivery</a>
            <a className="link link-hover">24/7 Customer Support</a>
            <a className="link link-hover">Catering for Events</a>
            <a className="link link-hover">Special Offers & Deals</a>
          </nav>
          <nav className="menu menu-vertical">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav className="menu menu-vertical">
            <h6 className="footer-title">Contact Info</h6>
            <a>
              <FaPhone className="inline mr-2"></FaPhone> 01919834450
            </a>
            <a>
              <FaEnvelope className="inline mr-2"></FaEnvelope>
              foodheaven@gmail.com
            </a>
          </nav>
          <nav className="menu menu-vertical">
            <h6 className="footer-title">Location</h6>
            <a>
              <FaLocationPin className="inline mr-2"></FaLocationPin>
              Police Plaza, Gulshan, <br />
              Dhaka-1212, Bangladesh
            </a>
          </nav>
        </div>
      </div>
      <hr className="text-whiteColor" />
      <div className="footer-center bg-footerColor text-whiteColor text-xs p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Food
            Heaven
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
