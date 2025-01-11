import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const {name, category, recipe, price, _id} = useLoaderData();
  const { register, handleSubmit} = useForm()
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit= async(data) => {
      console.log(data) 
      const imageFile ={image: data.image[0]}
      const res = await axiosPublic.post(image_hosting_api,imageFile,{
         headers:{
          'content-type' : 'multipart/form-data'
         }
      });

     if(res.data.success){
      const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: res.data.data.display_url
      }
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data)
      if(menuRes.data.modifieCount > 0){
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} is updated to the menu.`,
              showConfirmButton: false,
              timer: 1500
            });
      }
     }
     console.log('with image url', res.data)
  }; 

    return (
        <div>
            <SectionTitle heading={'Update item'} subHeading={'Refresh info'}></SectionTitle>
            <div className="w-10/12 mx-auto bg-[hsla(0,0%,95%,1)] p-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="form-control w-full mb-2">
              <div className="label">
                <span className="label-text">Recipe name*</span>
              </div>
              <input
              defaultValue={name}
              {...register("name", {required:true})}
              type="text" placeholder="Recipe name" className="input input-bordered w-full" />
              
            </label>
            <div className="lg:flex gap-4">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                    defaultValue={category}
                   {...register("category", {required:true})}
                  className="select select-bordered w-full ">
                        <option disabled value='default'>Select a category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                </select>
              
            </label>
            
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
              defaultValue={price}
              {...register("price", {required:true})}
              type="number" placeholder="Price" className="input input-bordered w-full" />
              
            </label>
            
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
               
              </div>
              <textarea
              defaultValue={recipe}
              {...register("recipe", {required:true})}
              className="textarea textarea-bordered h-20" placeholder="Recipe details"></textarea>
            </label>
            <div className="my-4">
            <input
             {...register("image", {required:true})}
            type="file" className="file-input w-full max-w-xs" />
            </div>
                <button className="btn bg-gradient-to-r from-[hsla(36,57%,33%,1)] from-10% via-[hsla(36,57%,33%,1)] via-30% to-[hsla(36,58%,45%,1)] to-90% text-white">
                    Update Menu Item <FaUtensils/>
                </button>
                </form>
                        </div>
        </div>
    );
};

export default UpdateItem;