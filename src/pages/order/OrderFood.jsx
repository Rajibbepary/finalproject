import { useState } from 'react';
import orderCoverImg from '../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../components/foodcard/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink']
    const { category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                            <title>Bisto Boss | Order Food</title>
                        </Helmet>
            <Cover img={orderCoverImg} title={'Order Food'} subtitle={'Would you like to try a dish?'}></Cover>
           <div className='w-10/12 mx-auto mt-10 mb-10'>
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                <Tab>SALAD</Tab>
                <Tab>PIZZA</Tab>
                <Tab>SOUPS</Tab>
                <Tab>DESSERTS</Tab>
                <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                    {
                        salad.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        pizza.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        soup.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        dessert.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        offered.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
                    }
                    </div>
                </TabPanel>
                
        </Tabs>
           </div>
        </div>
    );
};

export default OrderFood;
