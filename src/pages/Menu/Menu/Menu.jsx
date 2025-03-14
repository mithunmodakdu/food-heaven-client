import { Helmet} from 'react-helmet-async';
import Cover from '../../../components/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import menuCoverImg from '../../../assets/menu/food-menu-bg.jpg'
import pizzaCoverImg from '../../../assets/menu/pizza-cover-img.jpg'
import soupCoverImg from '../../../assets/menu/soup-cover-img.jpg'
import saladCoverImg from '../../../assets/menu/salad-cover-img.jpg'
import dessertCoverImg from '../../../assets/menu/desserts-cover-img.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  
  const offered = menu.filter(item =>item.category === 'offered');
  const pizzas = menu.filter(item =>item.category === 'pizza');
  const salads = menu.filter(item =>item.category === 'salad');
  const soups = menu.filter(item =>item.category === 'soup');
  const desserts = menu.filter(item =>item.category === 'dessert');
  
  
  return (
    <div>
      <Helmet>
        <title>FoodHeaven | Menu</title>
      </Helmet>

      {/* menu page cover */}
      <Cover coverImg={menuCoverImg} title={"Our Menu"} details={"Our menu features a blend of classic favorites and innovative creations, made from the freshest ingredients to deliver unforgettable dining experiences."}></Cover>

      {/* offered items */}
      <SectionTitle heading={'Today’s Exclusive Offers'} subHeading={'Don’t Miss Out!'}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* pizza items */}
      <MenuCategory 
        title=" Perfect Pizzas"
        details="Get ready to experience pizza like never before! Our freshly baked pizzas are crafted with love, using the finest ingredients and loaded with mouthwatering toppings. From classic favorites to bold, unique flavors, every slice is a delicious journey."
        coverImg={pizzaCoverImg} 
        items={pizzas}>
      </MenuCategory>

      {/* soups items */}
      <MenuCategory 
        title="Soul-Warming Soups"
        details="Our soups are crafted to warm your heart and soul! From creamy classics to hearty broths, each bowl is brimming with rich flavors and wholesome ingredients. Whether you’re craving a comforting cup or a filling bowl, our soups are the perfect way to savor coziness and taste."
        coverImg={soupCoverImg} 
        items={soups}>
      </MenuCategory>

      {/* salads items */}
      <MenuCategory 
        title=" Fresh & Flavorful Salads"
        details="Our salads are a celebration of freshness and flavor! Made with crisp greens, vibrant veggies, and zesty dressings, each bowl is packed with nutritious ingredients and bold tastes. Whether you’re looking for a light bite or a hearty meal, our salads are crafted to delight your palate and nourish your body."
        coverImg={saladCoverImg} 
        items={salads}>
      </MenuCategory>

       {/* desserts items */}
       <MenuCategory 
        title={"Delicious Desserts"} 
        details={"Indulge in our mouthwatering selection of desserts crafted to satisfy your sweet cravings. From rich, velvety cakes to creamy cheesecakes and decadent pastries, each dessert is a little slice of heaven."} 
        coverImg={dessertCoverImg} 
        items={desserts}>
      </MenuCategory>
      
    </div>
  );
};

export default Menu;