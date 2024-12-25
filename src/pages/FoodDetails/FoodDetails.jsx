import Banner from "../../components/Banner/Banner";
import bgImg1 from "../../assets/images/bgimg.jpg";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ClipLoader } from "react-spinners";
import { Helmet, HelmetProvider } from "react-helmet-async";

const FoodDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    console.log(id);

    const {
        data: food,
        isPending,
        isError,
        error,
    } = useQuery({
        queryKey: ["food"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/food/${id}`);
            return data.result;
        },
    });

    if (isPending) {
        return (
            <div className="h-[calc(100vh-25rem)] flex justify-center items-center">
                <ClipLoader
                    color={"#3B82F6"}
                    loading={true}
                    size={250}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        );
    }

    if (isError) {
        return <p>{error.message}</p>;
    }

    console.log(food);

    const {
        name,
        image,
        origin,
        price,
        quantity,
        ownerEmail,
        ownerName,
        desc,
        category,
        totalPurchase,
    } = food;

    return (
        <HelmetProvider>
            <Helmet>
                <title>FOOD DETAILS | EATOPIA</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner title={"Food Details"} img={bgImg1}></Banner>

            <div className="flex flex-col md:flex-row items-center p-8 bg-gray-200 dark:bg-neutral-800 shadow-md rounded-lg max-w-7xl mx-auto my-12 ">
                {/* Image Section */}
                <div className="md:w-1/2 w-full">
                    <img
                        src={
                            image ||
                            "https://i.ibb.co.com/JpsfcNm/louis-hansel-xx-Ic-EAh-It-J0-unsplash.webp"
                        }
                        alt="Fruit Smoothie"
                        className="rounded-lg w-full"
                    />
                </div>

                {/* Product Info Section */}
                <div className="md:w-1/2 w-full md:ml-8 mt-6 md:mt-0">
                    <h1 className="text-3xl font-bold mb-2">{name}</h1>
                    <div className="flex items-center mb-4">
                        <span className="text-gray-600 dark:text-gray-400 font-medium">
                            {ownerName}
                        </span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400 font-medium">
                            ({ownerEmail})
                        </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Total Purchased:
                        <span className="text-neutral-800 dark:text-neutral-200 ml-1 font-medium">
                            {totalPurchase || 0}
                        </span>
                    </p>
                    <p className="text-xl font-semibold mb-2">
                        Price:
                        <span className="text-neutral-800 dark:text-neutral-200 ml-1 font-medium">
                            ${price}
                        </span>
                    </p>
                    <p className="mb-2 text-gray-600 dark:text-gray-400">
                        Available:
                        <span className="text-neutral-800 dark:text-neutral-200 font-medium ml-1">
                            {quantity} pcs
                        </span>
                    </p>
                    <p className="mb-2 text-gray-600 dark:text-gray-400">
                        Origin:{" "}
                        <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                            {origin}
                        </span>
                    </p>
                    <p className="mb-6 text-gray-600 dark:text-gray-400">
                        Category:
                        <span className="text-neutral-800 dark:text-neutral-200 ml-1 font-medium">
                            {category}
                        </span>
                    </p>
                    <div className="text-gray-600 dark:text-gray-400 mb-5">
                        <p className="mb-2">Ingredients: </p>
                        <ul className="flex flex-wrap gap-2 w-4/5 text-neutral-800 dark:text-neutral-200 font-medium">
                            {desc.map((item, idx) => (
                                <li key={idx}>
                                    {idx + 1}. {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <Link
                            to={`/food/purchase/${id}`}
                            className="btn w-full text-center"
                        >
                            Purchase
                        </Link>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default FoodDetails;
