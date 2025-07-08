import { FaGoogle } from "react-icons/fa6";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuthInfo();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    signInWithGoogle().then((result) => {
      console.log(result);
      const userInfo = {
        name: result.user.displayName,
        email: result.user.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="mt-9 mb-4">
      <div className="divider font-bold">OR Login with</div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={handleSignInWithGoogle}
          className="btn rounded-none text-headingColor  hover:text-whiteColor  active:text-whiteColor  border-primaryColor hover:bg-primaryColor active:bg-primaryHoverColor"
        >
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button
          onClick={handleSignInWithGoogle}
          className="btn rounded-none text-headingColor  hover:text-whiteColor  active:text-whiteColor  border-primaryColor hover:bg-primaryColor active:bg-primaryHoverColor"
        >
          <i className="fa-brands fa-facebook"></i>
          Facebook
        </button>
        <button
          onClick={handleSignInWithGoogle}
          className="btn rounded-none text-headingColor  hover:text-whiteColor  active:text-whiteColor  border-primaryColor hover:bg-primaryColor active:bg-primaryHoverColor"
        >
          <i className="fa-brands fa-square-x-twitter"></i>
          Twitter
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
