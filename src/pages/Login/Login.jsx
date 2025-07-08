import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import ActionButton from "../../components/Button/ActionButton";

const Login = () => {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const captchaLength = 6;
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log("state in the location page", location.state)

  useEffect(() => {
    loadCaptchaEnginge(captchaLength, "#FFF8F2", "#2C9DF4");
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (user_captcha_value.length === captchaLength) {
      if (validateCaptcha(user_captcha_value, false) === true) {
        setIsCaptchaValid(true);
      } else {
        setIsCaptchaValid(false);
      }
    } else {
      setIsCaptchaValid(false);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User login successfully.",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <Helmet>
        <title>Food Heaven | Login</title>
      </Helmet>
      <div className="min-h-screen bg-base-200">
        <div className="mx-auto py-9 flex flex-col lg:flex-row gap-0 w-11/12 md:w-4/5 ">
          <div className="lg:w-1/2">
            <img
              src="/src/assets/login_image.jpg"
              alt="Image for Login Page"
              className="w-full h-full"
            />
          </div>

          <div className="lg:w-1/2 bg-base-100 p-10 shadow-2xl mt-[-50%] lg:mt-[0%]">
            <h1 className="text-3xl font-bold text-center mb-6">
              Please login here!
            </h1>
            <form onSubmit={handleLogin} className="">
              <div className="form-control mb-4">
                
                <input
                  type="email"
                  name="email"
                  placeholder="Write here your email address"
                  className="block bg-whiteColor w-full py-2 pl-3 pr-3 shadow-sm placeholder:italic placeholder:text-mutedColor  border border-slate-300 rounded-md focus:outline-none focus:border-2 focus:border-primaryColor  focus:ring-secondaryColor focus:ring-2 sm:text-sm"
                  required
                />
              </div>
              <div className="form-control">
                
                <input
                  type="password"
                  name="password"
                  placeholder="Write here your password"
                  className="block bg-whiteColor w-full py-2 pl-3 pr-3 shadow-sm placeholder:italic placeholder:text-mutedColor  border border-slate-300 rounded-md focus:border-2  focus:outline-none focus:border-primaryColor focus:ring-secondaryColor focus:ring-2 sm:text-sm"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate reloadColor="#F47D2C" />
                </label>
                <input
                  type="text"
                  onChange={handleValidateCaptcha}
                  name="captcha"
                  placeholder="Enter captcha here"
                  className="block bg-whiteColor w-full py-2 pl-3 pr-3 shadow-sm placeholder:italic placeholder:text-mutedColor  border border-slate-300 rounded-md focus:border-2 focus:outline-none  focus:border-primaryColor focus:ring-secondaryColor focus:ring-2 sm:text-sm"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={!isCaptchaValid}
                  type="submit"
                  className="border-2 px-3 py-1 md:text-lg bg-primaryColor text-headingColor   border-primaryColor

                  hover:text-whiteColor hover:bg-primaryHoverColor

                  active:text-whiteColor active:bg-primaryHoverColor

                  disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed
                  "

                  value="Login"
                />
              </div>
            </form>
            <p className="text-center text-infoColor mt-4 mb-5 font-bold  ">
              <small>
                New here? <Link to="/signup">Create your account.</Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
