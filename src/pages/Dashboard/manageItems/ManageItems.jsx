import { MdDelete } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { RxUpdate } from "react-icons/rx";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
const handleDeleteItem = (item) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async (result) => {
        if (result.isConfirmed) {
         const res = await axiosSecure.delete(`/menu/${item._id}`)
         if(res.data.deletedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title:`${item.name} has been deleted` ,
                showConfirmButton: false,
                timer: 1500
              });
         }
        }
      });

}


    return (
        <div className="w-11/12 mx-auto">
            <SectionTitle subHeading={'Hurry Up!'} heading={'manage all items'}></SectionTitle>
            <div className="bg-slate-100 p-8 rounded-md shadow-2xl my-6" >
              <h1 className="text-2xl font-semibold">TOTAL ITEMS: {menu.length}</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead className="bg-[#D1A054] p-3 text-white">
      <tr>
        <th>
         #
        </th>
        <th>Items Image</th>
        <th>Items Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {

        menu.map((item, index) => <tr key={item._id}>
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
        <td>
       <Link to={`/dashboard/updateItem/${item._id}`}>
       <button className="btn btn-ghost "><RxUpdate className="text-2xl text-red-500"/></button>
       </Link>
        </td>
        <td>
        <button 
                     onClick={() => handleDeleteItem(item)}
                     className="btn btn-ghost "><MdDelete className="text-2xl text-red-500"/></button>
        </td>
      </tr>)
      }
      
    </tbody>
    
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItems;
