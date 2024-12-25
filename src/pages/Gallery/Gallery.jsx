import bgImg1 from "../../assets/images/bgimg.jpg";
import Banner from "../../components/Banner/Banner";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const images = [
    { src: "/img/foods/food_1.webp", alt: "food_1" },
    { src: "/img/foods/food_2.webp", alt: "food_2" },
    { src: "/img/foods/food_3.webp", alt: "food_3" },
    { src: "/img/foods/food_4.webp", alt: "food_4" },
    { src: "/img/foods/food_5.webp", alt: "food_5" },
    { src: "/img/foods/food_6.webp", alt: "food_6" },
    { src: "/img/foods/food_7.webp", alt: "food_7" },
    { src: "/img/foods/food_8.webp", alt: "food_8" },
    { src: "/img/foods/food_9.webp", alt: "food_9" },
    { src: "/img/foods/food_10.webp", alt: "food_10" },
    { src: "/img/foods/food_11.webp", alt: "food_11" },
    { src: "/img/foods/food_12.webp", alt: "food_12" },
];

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Gallery = () => {
    const { user } = useContext(AuthContext);

    const onInit = () => {
        console.log("lightGallery has been initialized");
    };
    return (
        <div>
            <Banner title={"Eatopia Gallery"} img={bgImg1}></Banner>

            <div className="App wrapper my-12">
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {images.map((img, idx) => (
                        <Link to={img.src} key={idx} className="block">
                            <div className="relative overflow-hidden group my-4">
                                <span className="absolute top-full left-0 bg-black/75 w-full h-full rounded-xl grid place-items-center text-white group-hover:top-0 transition-all text-center">
                                    Hi, <br /> {user?.displayName}
                                </span>
                                <img
                                    className="max-w-full h-full w-full rounded-2xl block"
                                    src={img.src}
                                    alt=""
                                />
                            </div>
                        </Link>
                    ))}
                </LightGallery>
            </div>
        </div>
    );
};

export default Gallery;
