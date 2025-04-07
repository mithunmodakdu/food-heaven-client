import { FaGoogle } from "react-icons/fa6";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {signInWithGoogle} = useAuthInfo();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSignInWithGoogle = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result)
      const userInfo ={
        name: result.user.displayName,
        email: result.user.email
      }
      axiosPublic.post('/users', userInfo)
      .then(res =>{
        console.log(res.data)
        navigate('/');
      })
      
    })
  }

  return (
    <div className="p-8">
      <div className="divider"></div>
      <button onClick={handleSignInWithGoogle} className="btn bg-white text-black border-[#e5e5e5] ">
        <FaGoogle></FaGoogle>
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
