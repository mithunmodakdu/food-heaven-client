import { Link } from "react-router-dom";
import Cover from "../../../components/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, details, coverImg}) => {
  return (
    <div className="my-20">
      {
        title && <Cover title={title} details={details} coverImg={coverImg}></Cover>
      }

      <div className="grid md:grid-cols-2 gap-10">
        {
          items.map(item =><MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>

      <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>

      
    </div>
  );
};

export default MenuCategory;