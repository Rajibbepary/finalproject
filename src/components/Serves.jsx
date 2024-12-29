import servies from '../assets/home/chef-service.jpg'

const Serves = () => {
    return (
        <div className='w-10/12 relative mb-8 rounded-md h-[400px]' style={{
            backgroundImage: `url(${servies})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '70%',
            height: '400px',
            margin: '0 auto 2rem auto',
            borderRadius: '6px'
        }}>
            <div className='text-center lg:w-8/12 absolute lg:bottom-20 left-36
            bg-slate-50 p-9 rounded-lg
            '>
                <h2 className='italic lg:text-2xl text-black mb-3'>BISTRO BOSS</h2>
                <p className='text-black'>Bistro Boss is a vibrant restaurant offering globally inspired cuisine made from fresh, local ingredients. With a chic ambiance, exceptional service, and innovative dishes</p>
            </div>
        </div>
        
    );
};

export default Serves;