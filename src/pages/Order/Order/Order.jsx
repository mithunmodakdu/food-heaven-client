import Cover from "../../../components/Cover/Cover";
import orderCoverImg from "../../../assets/order/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  
  

  const [menu] = useMenu();
  
  const salads = menu.filter(item =>item.category === 'salad');
  const pizzas = menu.filter(item =>item.category === 'pizza');
  const soups = menu.filter(item =>item.category === 'soup');
  const desserts = menu.filter(item =>item.category === 'dessert');
  const drinks = menu.filter(item =>item.category === 'drinks');

  return (
    <div>
      <Cover
        coverImg={orderCoverImg}
        title="Order Food"
        details="Indulge in mouth-watering dishes delivered straight to your doorstep!"
      ></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Order;
