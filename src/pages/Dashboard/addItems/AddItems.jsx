import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic();
    const onSubmit= async(data) => {
        console.log(data) 
        const imageFile ={image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
           headers:{
            'content-type' : 'multipart/form-data'
           }
        })
        console.log(res.data);
    }; 

    return (
        <div>
            <SectionTitle heading={'add an item'} subHeading={"What's new?"}></SectionTitle>

            <div className="w-10/12 mx-auto bg-[hsla(0,0%,95%,1)] p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
      <label className="form-control w-full mb-2">
  <div className="label">
    <span className="label-text">Recipe name*</span>
  </div>
  <input
  {...register("name", {required:true})}
  type="text" placeholder="Recipe name" className="input input-bordered w-full" />
  
</label>
<div className="lg:flex gap-4">
<label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Category*</span>
  </div>
  <select
        defaultValue='default'
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
  {...register("price", {required:true})}
  type="number" placeholder="Price" className="input input-bordered w-full" />
  
</label>

</div>
<label className="form-control">
  <div className="label">
    <span className="label-text">Recipe Details</span>
   
  </div>
  <textarea
  {...register("recipe", {required:true})}
  className="textarea textarea-bordered h-20" placeholder="Recipe details"></textarea>
</label>
<div className="my-4">
<input
 {...register("image", {required:true})}
type="file" className="file-input w-full max-w-xs" />
</div>
    <button className="btn bg-gradient-to-r from-[hsla(36,57%,33%,1)] from-10% via-[hsla(36,57%,33%,1)] via-30% to-[hsla(36,58%,45%,1)] to-90% text-white">
        Add Item <FaUtensils/>
    </button>
    </form>
            </div>
        </div>
    );
};

export default AddItems;