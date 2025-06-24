
const MenuItem = ({item}) => {
  const {name, recipe, image, price} = item;
  return (
    <div className="flex space-x-2">
      <img style={{borderRadius: '200px 20px 20px 20px'}} className="w-[120px]" src={image} alt="" />
      <div>
        <h3 className="uppercase text-headingColor font-heading text-base lg:text-xl">{name}</h3>
        <p className="text-sm lg:text-base">{recipe}</p>
      </div>
      <p className="text-primaryColor">${price}</p>
      
    </div>
  );
};

export default MenuItem;