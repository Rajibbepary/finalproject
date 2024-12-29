import SectionTitle from "../../components/SectionTitle/SectionTitle";
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'

const Recommends = () => {
    return (
        <div className="w-9/12 mx-auto">
            <div className="text-center mt-10">
            <button className="btn btn-outline border-0 text-2xl border-b-4">View Full  Menu</button>
            <div className="text-white bg-black text-3xl py-14 rounded-md mt-10">
            Call Us: +88 0192345678910
            </div>
            </div>
            <section>
                <SectionTitle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'}>

                </SectionTitle>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="card bg-base-100  shadow-xl">
            <figure>
                 <img
                 src={slide1} className="w-full h-[250px] object-cover"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                 <h2 className="card-title">Salad</h2>
                 <p>Sautéed breaded veal escalope with watercress</p>
                 <div className="card-actions justify-center">
                 <button className="btn btn-outline border-0 border-b-4">ADD TO CARD</button>
                </div>
             </div>
                </div>
                <div className="card bg-base-100  shadow-xl">
            <figure>
                 <img
                 src={slide2} className="w-full h-[250px] object-cover"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                 <h2 className="card-title">Pizza</h2>
                 <p>Sautéed breaded veal escalope with watercress</p>
                 <div className="card-actions justify-center">
                 <button className="btn btn-outline border-0 border-b-4">ADD TO CARD</button>
                </div>
             </div>
                </div>
                <div className="card bg-base-100  shadow-xl">
            <figure>
                 <img
                 src={slide3} className="w-full h-[250px] object-cover"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                 <h2 className="card-title">Soup</h2>
                 <p>Chargrilled fresh tuna steak</p>
                 <div className="card-actions justify-center">
                 <button className="btn btn-outline border-0 border-b-4">ADD TO CARD</button>
                </div>
             </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Recommends;