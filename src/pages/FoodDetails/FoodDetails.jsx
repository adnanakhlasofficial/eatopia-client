import Banner from "../../components/Banner/Banner";
import bgImg1 from "../../assets/images/bgimg.jpg";

const FoodDetails = () => {
    return (
        <>
            <Banner title={"Food Details"} img={bgImg1}></Banner>

            <div className="flex flex-col md:flex-row p-8 bg-gray-200 dark:bg-neutral-800 shadow-md rounded-lg max-w-7xl mx-auto my-12 ">
                {/* Image Section */}
                <div className="md:w-1/2 w-full">
                    <img
                        src= "https://i.ibb.co.com/JpsfcNm/louis-hansel-xx-Ic-EAh-It-J0-unsplash.webp"
                        alt="Fruit Smoothie"
                        className="rounded-lg w-full"
                    />
                </div>

                {/* Product Info Section */}
                <div className="md:w-1/2 w-full md:ml-8 mt-6 md:mt-0">
                    <h1 className="text-3xl font-bold mb-2">Fruit Smoothie</h1>
                    <div className="flex items-center mb-4">
                        <span className="text-gray-600 dark:text-gray-400">Adnan Akhlas</span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">
                            (adnanakhlas@gmail.com)
                        </span>
                    </div>
                    <p className="text-xl font-semibold mb-2">
                        Price: <span className="text-neutral-800">$3.99</span>
                    </p>
                    <p className="mb-2">
                        Available:{" "}
                        <span className="text-green-500 font-bold">
                            In Stock
                        </span>
                    </p>
                    <p className="mb-4">
                        Product Code:{" "}
                        <span className="text-blue-500">#859234</span>
                    </p>
                    <p className="mb-4">
                        Tags:
                        <span className="text-blue-500 ml-1">
                            Food, BBQ, First Food
                        </span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                    </p>

                    {/* Size and Quantity */}
                    <form className="flex items-end gap-3">
                        <div className="space-y-2">
                            <label className="form-title" htmlFor="quantity">
                                quantity:
                            </label>
                            <input
                                className="form-input [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                type="number"
                                name="quantity"
                                id="quantity"
                                placeholder="Enter food quantity"
                            />
                        </div>
                        <div>
                            <button className="btn w-full">Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FoodDetails;
