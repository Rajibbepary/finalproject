import servies from '../assets/home/chef-service.jpg'

const Serves = () => {
    return (
        <div
  className="relative mb-8 rounded-md lg:h-[400px]"
  style={{
    backgroundImage: `url(${servies})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '90%',
    maxWidth: '1200px',
    height: '300px',
    margin: '0 auto 2rem auto',
    borderRadius: '6px',
  }}
>
  <div
    className="
      text-center
      absolute
      bottom-10
      left-1/2
      transform
      -translate-x-1/2
      bg-slate-50
      p-6
      rounded-lg
      lg:w-8/12
    "
    style={{
      maxWidth: '90%',
    }}
  >
    <h2 className="italic text-xl lg:text-2xl text-black mb-3">BISTRO BOSS</h2>
    <p className="text-black text-sm lg:text-base">
      Bistro Boss is a vibrant restaurant offering globally inspired cuisine made from fresh, local ingredients. With a chic ambiance, exceptional service, and innovative dishes.
    </p>
  </div>
</div>
        
    );
};

export default Serves;