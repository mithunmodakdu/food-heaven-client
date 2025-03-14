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
      
    </div>
  );
};

export default MenuCategory;