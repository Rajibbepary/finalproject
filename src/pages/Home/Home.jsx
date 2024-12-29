import Serves from "../../components/Serves";
import PopularMenu from "../PopularMenu";
import Banner from "./Banner";
import Category from "./Category";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Serves/>
            <PopularMenu/>
        </div>
    );
};

export default Home;