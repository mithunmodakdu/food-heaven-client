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

const Login = () => {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const captchaLength = 6;
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log("state in the location page", location.state)

  useEffect(() => {
    loadCaptchaEnginge(captchaLength);
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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col lg:flex-row gap-0 w-4/5">
          <div className="lg:w-1/2 lg:h-[90vh]">
            <img
              src="/src/assets/login_image.jpg"
              alt="Image for Login Page"
              className="h-full"
            />
          </div>

          <div className="lg:w-1/2 lg:h-[90vh] shadow-2xl bg-base-100 p-10">
            <h1 className="text-3xl font-bold text-center">
              Please login here!
            </h1>
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
                
                <input
                  type="email"
                  name="email"
                  placeholder="Write here your email address"
                  className="placeholder:italic placeholder:text-mutedColor block bg-whiteColor w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-primaryColor focus:border-2 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Your Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Write here your password"
                  className="input input-bordered"
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
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onChange={handleValidateCaptcha}
                  name="captcha"
                  placeholder="Enter captcha here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={!isCaptchaValid}
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center text-orange-500 mt-5 font-bold mb-5 ">
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
