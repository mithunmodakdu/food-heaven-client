import { FaGoogle } from "react-icons/fa6";
import useAuthInfo from "../../../hooks/useAuthInfo";

const SocialLogin = () => {
  const {signInWithGoogle} = useAuthInfo();

  const handleSignInWithGoogle = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result)
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
