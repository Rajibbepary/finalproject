import { Parallax } from 'react-parallax';
const Cover = ({img, title}) => {
    return (

        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        
        <div
  className="hero h-[700px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md bg-black bg-opacity-50 py-6 px-3 rounded-md">
      <h1 className="mb-4 text-slate-100 text-4xl italic uppercase">{title}</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
     
    </div>
  </div>
</div>
       
    </Parallax>
       
    );
};

export default Cover;