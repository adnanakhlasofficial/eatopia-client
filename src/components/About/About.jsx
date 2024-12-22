import aboutImg from "../../assets/images/about.png";

const About = () => {
    return (
        <div className="wrapper flex justify-center items-center flex-col lg:flex-row-reverse gap-16 my-12">
            <div>
                <img src={aboutImg} alt="" />
            </div>
            <div className="w-1/2">
                <h2 className="text-lg font-semibold text-slate-600 dark:text-gray-400">
                    About Us
                </h2>
                <h3 className="text-3xl font-bold !leading-[3rem] text-slate-950 dark:text-slate-100">
                    Why we are the best
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-lg mt-3">
                    At Eatopia, we believe that dining is an experience that
                    goes beyond just food. Established with the passion to bring
                    people together, our restaurant offers a haven for food
                    lovers where every meal is a celebration of flavors and
                    culture. Our culinary team, led by renowned chefs, crafts
                    each dish with precision and love, using only the freshest
                    and finest ingredients.
                </p>
            </div>
        </div>
    );
};

export default About;
