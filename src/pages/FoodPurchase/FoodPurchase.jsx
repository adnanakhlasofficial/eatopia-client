import Banner from "../../components/Banner/Banner";
import bgImg1 from "../../assets/images/bgimg.jpg";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const FoodPurchase = () => {
    const { user } = useContext(AuthContext);
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

    const handleQuantityChange = (e) => {
        const val = parseInt(e.target.value);
        if (val > quantity) {
            toast.error("Stock limit reached.");
            e.target.value = quantity;
        }
    };

    const handlePurchase = async (e) => {
        e.preventDefault();
        const purchaseDate = new Date();
        const total = totalPurchase || 0;
        const purchaseQuantity = parseInt(e.target.quantity.value) + total;
        const remaining = quantity - purchaseQuantity;
        const purchasedFood = {
            id,
            name,
            price,
            purchaseQuantity,
            buyer: {
                name: user?.displayName,
                email: user?.email,
            },
            purchaseDate,
        };
        // const res = await axiosSecure.post('/purchase-food', purchasedFood)
        // console.log(res);

        const response = await axiosSecure.patch(`/food/${id}`, {
            remaining,
            purchaseQuantity,
        });
        console.log("total",total);
        console.log("count", purchaseQuantity);
        console.log("reamin", remaining);
    };

    return (
        <>
            <Banner title={"Food Purchase"} img={bgImg1}></Banner>

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
                        Origin:
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
                        <span className="mb-2">Ingredients: </span>
                        <ul className="flex flex-wrap gap-2 w-4/5 text-neutral-800 dark:text-neutral-200 font-medium">
                            {desc.map((item, idx) => (
                                <li key={idx}>
                                    {idx + 1}. {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Size and Quantity */}
                    <form
                        onSubmit={handlePurchase}
                        className="flex items-end gap-3"
                    >
                        <div className="space-y-1 w-[calc(100%-7.8225rem)]">
                            <label className="form-title" htmlFor="quantity">
                                quantity:
                            </label>
                            <input
                                className="form-input [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
                                type="number"
                                min={1}
                                max={quantity}
                                onChange={handleQuantityChange}
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

export default FoodPurchase;
