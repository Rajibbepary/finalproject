import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20 ">
            <SectionTitle subHeading='Check it Out' heading='featured item'></SectionTitle>
           <div className="grid lg:grid-cols-2 items-center py-16 bg-slate-500 opacity-60 ">
            <div>
                <img src={featuredImg} className="w-[400px] rounded-lg lg:ml-24" alt="" />
            </div>
            <div className="">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, quos magnam, quas fugit tempora mollitia aut libero aliquam numquam, enim omnis velit quis corrupti et. Ipsum alias quas corrupti libero?</p>
                <button className="  btn btn-outline border-0 border-b-4 border-white text-white mt-4">Order Now</button>
            </div>
           </div>
        </div>
    );
};

export default Featured;