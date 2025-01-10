import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";



const AllUsers = () => {
 const axiosSecure = useAxiosSecure(); 
 const {data: users = [ ], refetch } = useQuery({
    queryKey:['users'],
    queryFn: async () =>{
        const res = await axiosSecure.get('/users');
        return res.data;
    }
})

const handleMakeAdmin = user =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}


const handleDeleteuUser = user =>{
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
            axiosSecure.delete(`/users/${user._id}`)
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
        <div>
                <SectionTitle subHeading={'How Many?'}heading={'MANAGE ALL USERS'}></SectionTitle>
                <div className=" my-4">

                    <h2 className="text-3xl">Total Users{users.length}</h2>
                    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        users.map((user, index) => <tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                       { user.role === 'admin' ? 'Admin' : <button 
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-[#D1A054] "><FaUser className="text-2xl text-white"/></button>}
                      </td>
            
                <td>
                    <button 
                        onClick={() => handleDeleteuUser(user)}
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

export default AllUsers;