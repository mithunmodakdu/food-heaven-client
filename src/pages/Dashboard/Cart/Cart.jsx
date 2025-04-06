import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [carts, refetch] = useCart();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = id =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
          axiosSecure.delete(`/carts/${id}`)
           .then(res =>{
            console.log(res)
            if(res.data.deletedCount > 0){
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
           })



        
      }
    });
  }

  return (
    <div>
      <div className="flex justify-evenly my-10">
        <h1 className="text-3xl">Total Items: {carts.length}</h1>
        <h1 className="text-3xl">Total Price: ${totalPrice}</h1>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    #
                  </label>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* body */}
            <tbody>
              {
                carts.map((item, index)=><tr key={item._id}>
                  <th>
                    <label>
                      {index + 1}
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Food Image"
                          />
                        </div>
                      </div>
                      
                    </div>
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg">
                      <FaTrash className="text-3xl text-red-600"></FaTrash>
                    </button>
                  </th>
                </tr>)
              }
              
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
