import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
    return (
        <div
            className="flex justify-center items-center min-h-[38rem] bg-contain"
            style={{
                background: `linear-gradient(180deg, rgba(0,0,0,0.7) 100%, rgba(0,0,0,0.7) 100%), url(${image}) no-repeat center`,
            }}
        >
            <div className="max-w-5xl text-center space-y-6">
                <h2 className="text-3xl font-bold lg:text-4xl !leading-[3rem] text-slate-100">
                    {text}
                </h2>
                <Link to={"/add-food"} className="btn !inline-block">
                    Post Your Dish
                </Link>
            </div>
        </div>
    );
};

export default Slide;
