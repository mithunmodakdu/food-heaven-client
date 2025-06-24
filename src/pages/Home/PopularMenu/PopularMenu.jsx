import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item =>item.category === 'popular');

  return (
    <section className="mb-10">
      <SectionTitle
       heading={"Popular Items"}
       subHeading={"Our Most-Loved Dishes"}
      >
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-10 w-11/12 mx-auto">
        {
          popular.map(item =><MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;