import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem";
import Cover from './../../Shared/Cover';


const MenuCategory = ({items, title, coverImg}) => {

    return (
        <div className="pt-8 w-11/12 mx-auto">
             {title && <Cover img={coverImg} title={title}/>}
            <div className="grid md:grid-cols-2 gap-12 my-16">
            {
                items.map(item => <MenuItem key={item._id} item={item}></MenuItem> )
            }
        </div>
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 text-center border-b-4 mb-4">ORDER YOUR FAVOURITE FOOD</button>
        </Link>
        </div>
    );
};

export default MenuCategory;