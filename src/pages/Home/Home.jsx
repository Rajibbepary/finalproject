import Serves from "../../components/Serves";
import PopularMenu from "../PopularMenu";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import Recommends from "./Recommends";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Serves/>
            <PopularMenu/>
            <Recommends/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;