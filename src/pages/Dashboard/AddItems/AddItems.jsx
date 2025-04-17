import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";

const AddItems = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle
        heading="Add New Item"
        subHeading="Enter details to add a new product."
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Item Name*</span>
            </label>
            <input
              type="text"
              placeholder="Type here item name"
              className="input input-bordered w-full"
              {...register("name", {required: true})}
            />
          </div>
          <div className="md:flex items-center gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select a category*</span>
              </label>
              <select
                {...register("category", {required: true})}
                defaultValue="Select a category"
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
                type="num"
                placeholder="Type here price"
                className="input input-bordered w-full"
                {...register("price", {required: true})}
              />
            </div>
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Recipe*</span>
            </label>
            <textarea
              className="textarea input-bordered"
              placeholder="Type here recipe details"
              {...register("recipe", {required: true})}
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <input type="file" className="file-input" {...register("image", {required: true})} />
          </div>

          <button className="btn btn-warning w-1/4">Add Item <FaUtensils></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
