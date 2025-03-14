import { Helmet} from 'react-helmet-async';
import Cover from '../../../components/Cover/Cover';
import menuImg from '../../../assets/menu/food-menu-bg.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>FoodHeaven | Menu</title>
      </Helmet>

      <Cover img={menuImg} title={"Our Menu"} details={"Our menu features a blend of classic favorites and innovative creations, made from the freshest ingredients to deliver unforgettable dining experiences."}></Cover>
      
    </div>
  );
};

export default Menu;