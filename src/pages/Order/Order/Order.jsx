import Cover from "../../../components/Cover/Cover";
import orderCoverImg from "../../../assets/order/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu();
  
  const offered = menu.filter(item =>item.category === 'offered');
  const pizzas = menu.filter(item =>item.category === 'pizza');
  const salads = menu.filter(item =>item.category === 'salad');
  const soups = menu.filter(item =>item.category === 'soup');
  const desserts = menu.filter(item =>item.category === 'dessert');

  return (
    <div>
      <Cover
        coverImg={orderCoverImg}
        title="Order Food"
        details="Indulge in mouth-watering dishes delivered straight to your doorstep!"
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
