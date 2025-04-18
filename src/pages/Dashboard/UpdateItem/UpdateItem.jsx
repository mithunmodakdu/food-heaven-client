import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const {_id, name, category, recipe, price} = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async(data) => {
    // Upload image to image hosting server imgbb and get image url
    const imageFile = {image: data.image[0]};
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {'content-type': 'multipart/form-data'}
      }
    )
    
    // send menu items data to server after getting image url from imgbb 
    if(res.data.success){
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price)
      }
      const menuRes = await axiosSecure.patch(`menu/${_id}`, menuItem);
      console.log(menuRes.data)
      if(menuRes.data.modifiedCount > 0){
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been updated.`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }

  };

  return (
    <div>
      <SectionTitle
        heading="Update Menu Item"
        subHeading="Let's edit info"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Item Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
          </div>
          <div className="md:flex items-center gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select a category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue={category}
                className="select input input-bordered"
              >
                <option disabled={true}>Select a category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                className="input input-bordered w-full"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Recipe*</span>
            </label>
            <textarea
              className="textarea input-bordered"
              defaultValue={recipe}
              {...register("recipe", { required: true })}
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <input
              type="file"
              className="file-input"
              {...register("image", { required: true })}
            />
          </div>

          <button className="btn btn-warning w-1/4">
            Update Item 
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
