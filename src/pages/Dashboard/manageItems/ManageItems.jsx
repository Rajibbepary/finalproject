import { MdDelete } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { RxUpdate } from "react-icons/rx";


const ManageItems = () => {
    const [menu] = useMenu();
const handleDeleteItem = (item) =>{
    
}


    return (
        <div>
            <SectionTitle subHeading={'Hurry Up!'} heading={'manage all items'}></SectionTitle>
            <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
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
        <button 
                    //  onClick={() => handleDelete(item._id)
                  
                     className="btn btn-ghost "><RxUpdate className="text-2xl text-red-500"/></button>
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
