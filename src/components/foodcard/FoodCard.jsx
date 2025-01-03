import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    //const from = location.state?.from?.pathname || "/";
const handleAddToCart = food => {
  console.log(user.email, food)
  if(user && user.email){
    const cartItem = {
        menuId: _id,
        email:user.email,
        name,
        image, 
        price
    }
  axiosSecure.post('/carts', cartItem)
  .then(res => {
    console.log(res.data)
    if(res.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} added  to your card`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  })  
  
  }else {
    Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
    }).then((result) => {
        if (result.isConfirmed) {
            //   send the user to the login page
            //navigate('/login')
            navigate('/login', { state: { from: location } })
        }
    });
}


}

    return (
        <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src={image} className="hover:scale-110 transition"
      alt="Food Image" />
  </figure>
  <p className="absolute right-0 mr-4 bg-slate-900 px-2 py-1 rounded-md top-3 text-white">$ {price}</p>
  <div className="card-body text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button 
      onClick={() => handleAddToCart(item)}
      className="btn btn-outline border-0 bg-slate-100 border-orange-300 border-b-4">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;