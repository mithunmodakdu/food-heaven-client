const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
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
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
