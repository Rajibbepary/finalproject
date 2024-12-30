import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/salad-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bisto Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'/>
            {/* main cover */}
           <SectionTitle subHeading="Don't Miss" heading="Today's Offered"></SectionTitle>
           {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="Desert" coverImg={dessertImg}></MenuCategory>
               {/* pizza menu items */}
               <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategory>
                {/* pizza menu items */}
                <MenuCategory items={soup} title="Soup" coverImg={soupImg}></MenuCategory>
                 {/* pizza menu items */}
               <MenuCategory items={salad} title="Salad" coverImg={saladImg}></MenuCategory>
        </div>
    );
};

export default Menu;