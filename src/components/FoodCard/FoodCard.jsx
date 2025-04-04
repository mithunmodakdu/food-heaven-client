import Swal from "sweetalert2";
import useAuthInfo from "../../hooks/useAuthInfo";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const {user} = useAuthInfo();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  

  const handleAddToCart = () =>{
      if(user && user?.email){
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image, 
          price
        };

        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} has been added to your cart.`,
              showConfirmButton: false,
              timer: 1500
            });

            // refetch the cart
            refetch();
          }
        })
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
            navigate("/login", {state: {from: location}});
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
          <button onClick={handleAddToCart} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-500 text-orange-500 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
