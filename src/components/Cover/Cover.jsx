import { Parallax} from "react-parallax";

const Cover = ({ coverImg, title, details }) => {
  return (
    <div className="pb-12">
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={coverImg}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div
          className="hero h-[300px]"
          
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
              <p className="mb-5">{details}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
