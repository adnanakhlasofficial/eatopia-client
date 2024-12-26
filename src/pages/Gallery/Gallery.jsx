import gallery from "../../assets/images/gallery.jpeg";
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
    {
        src: "/img/foods/food_1.webp",
        alt: "food_1",
        name: "Chocolate Cake",
        desc: "A decadent chocolate layer cake with chocolate mousse filling and what appears to be a cherry or berry glaze on top",
    },
    {
        src: "/img/foods/food_2.webp",
        alt: "food_2",
        name: "Chicken Tenders",
        desc: "Breaded chicken tenders or strips served with a side salad and dipping sauce",
    },
    {
        src: "/img/foods/food_3.webp",
        alt: "food_3",
        name: "Shakshuka",
        desc: "Shakshuka - eggs poached in tomato sauce, with fresh tomatoes, basil, and pasta visible in the scene",
    },
    {
        src: "/img/foods/food_4.webp",
        alt: "food_4",
        name: "Salmon Fillet",
        desc: "Grilled salmon fillet served on lettuce with avocado slices, cherry tomatoes, dill garnish, and a lemon wedge",
    },
    {
        src: "/img/foods/food_5.webp",
        alt: "food_5",
        name: "Loaded Fries",
        desc: "Loaded sweet potato fries with various toppings including guacamole, sour cream, and fresh herbs",
    },
    {
        src: "/img/foods/food_6.webp",
        alt: "food_6",
        name: "Lo Mein",
        desc: "Stir-fried noodles with vegetables in what appears to be an Asian-style sauce",
    },
    {
        src: "/img/foods/food_7.webp",
        alt: "food_7",
        name: "Penne Salad",
        desc: "Creamy penne pasta salad with red peppers and herbs in a wooden bowl",
    },
    {
        src: "/img/foods/food_8.webp",
        alt: "food_8",
        name: "Cream Dumplings",
        desc: "Chicken or meat dumplings in a creamy sauce with fresh herbs",
    },
    {
        src: "/img/foods/food_9.webp",
        alt: "food_9",
        name: "Grilled Wings",
        desc: "Grilled chicken wings or pieces with char marks, served with fresh herbs",
    },
    {
        src: "/img/foods/food_10.webp",
        alt: "food_10",
        name: "Bulgogi Bowl",
        desc: "Korean-style stir-fry (possibly bulgogi) with cabbage and vegetables in a hot stone bowl",
    },
    {
        src: "/img/foods/food_11.webp",
        alt: "food_11",
        name: "Chicken Salad",
        desc: "Spiced chicken pieces served over greens with what appears to be a creamy dressing",
    },
    {
        src: "/img/foods/food_12.webp",
        alt: "food_12",
        name: "Prawn Soup",
        desc: "Asian-style noodle soup with prawns/shrimp, garnished with chili and herbs in a spicy broth",
    },
];

import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Gallery = () => {
    const onInit = () => {
        console.log("lightGallery has been initialized");
    };
    return (
        <HelmetProvider>
            <Helmet>
                <title>Gallery | EATOPIA</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
                <Banner title={"Eatopia Gallery"} img={gallery}></Banner>

                <div className="App wrapper my-12">
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                        {images.map((img, idx) => (
                            <Link to={img.src} key={idx} className="block">
                                <div className="relative overflow-hidden group my-4">
                                    <div className="absolute top-full left-0 bg-black/75 w-full h-full rounded-xl grid place-content-center gap-3 text-white group-hover:top-0 transition-all text-center p-4">
                                        <span className="text-lg font-medium">
                                            {img.name}
                                        </span>
                                        <span className="text-sm w-72 inline-block">
                                            {img.desc}
                                        </span>
                                    </div>
                                    <img
                                        className="max-w-full h-full w-full rounded-2xl block"
                                        src={img.src}
                                        alt={img.name}
                                    />
                                </div>
                            </Link>
                        ))}
                    </LightGallery>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Gallery;
