import Swal from "sweetalert2";
import useAuthInfo from "../../hooks/useAuthInfo";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  const {user} = useAuthInfo();
  const navigate = useNavigate();
  

  const handleAddToCart = food =>{
      if(user && user?.email){

        console.log(user)
      }else{
        Swal.fire({
          title: "You are not logged in.",
          text: "Please login to add to the cart.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      }
  }

  return (
    <div className="card bg-base-100 w-96 shadow-lg">
      <figure className="">
        <img src={image} alt="Food" className="rounded-lg" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-5 mr-5 px-3">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-500 text-orange-500 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
