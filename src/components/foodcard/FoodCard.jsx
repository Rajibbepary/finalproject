
const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item
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
      <button className="btn btn-outline border-0 bg-slate-100 border-orange-300 border-b-4">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;