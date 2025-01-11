
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
const [cart, refetch] = useCart();
const totalPrice = cart.reduce( (total, item) => total + item.price, 0)
const axiosSecure = useAxiosSecure();
const handleDelete = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
        .then(res =>{
            if(res.data.deletedCount > 0){
                refetch();
                  Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
        })
        }
      });
}

    return (
        <>
        <SectionTitle subHeading={'My Cart'} heading={'WANNA ADD MORE?'}></SectionTitle>
            <div className="bg-slate-50 p-8 rounded-xl">
                <div className="flex justify-evenly items-center">
                    <h2 className="text-3xl">Items: {cart.length}</h2>
                    <h2 className="text-3xl">Total Price: {totalPrice}</h2>
                  {cart.length ? <Link to='/dashboard/payment'>
                   <button className="btn  bg-[hsla(36,57%,57%,1)]">Pay</button>
                   </Link> : <button disabled className="btn  bg-[hsla(36,57%,57%,1)]">Pay</button>}
                </div>

                <div className="overflow-x-auto ">
  <table className="table mt-5 w-full">
    {/* head */}
    <thead >
      <tr className="bg-[hsla(36,57%,57%,1)] text-white p-6  ">
        <th>
          #
        </th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
     {
        cart.map((item, index)=> <tr key={item._id}>
            <th>
              {index + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
             {item.name}
            </td>
            <td>$ {item.price}</td>
            <th>
              <button 
              onClick={() => handleDelete(item._id)}
              className="btn btn-ghost "><MdDelete className="text-2xl text-red-500"/></button>
            </th>
          </tr>)
     }
      
    </tbody>

  </table>
</div>
            </div>
        </>
    );
};

export default Cart;