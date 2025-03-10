import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    fetch('menu.json')
    .then(response =>response.json())
    .then(data =>{
      const popularItems = data.filter(item =>item.category === 'popular')
      setMenu(popularItems)
    })
  }, []);

  return (
    <section className="mb-10">
      <SectionTitle
       subHeading={"Popular Items"}
       heading={"From our menu"}
      >
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {
          menu.map(item =><MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>


      
    </section>
  );
};

export default PopularMenu;