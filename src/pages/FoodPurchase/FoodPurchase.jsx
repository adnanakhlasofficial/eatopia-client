import Banner from "../../components/Banner/Banner";
import bgImg1 from "../../assets/images/bgimg.jpg";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

const FoodPurchase = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [food, setFood] = useState({});
    const [totalPurchase, setTotalPurchase] = useState(0);
    const [totaAvailable, setTotalAvailable] = useState(0);

    useEffect(() => {}, []);

    const { data, isPending, isError, error } = useQuery({
        queryKey: ["food"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/food/${id}`);
            setTotalPurchase(data?.result?.totalPurchase || 0);
            setTotalAvailable(data?.result?.quantity || 0);
            setFood(data.result);
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

    const handleQuantityChange = (e) => {
        const val = parseInt(e.target.value);
        if (val > totaAvailable) {
            toast.error("Stock limit reached.");
            e.target.value = totaAvailable;
        }
    };

    const handlePurchase = async (e) => {
        e.preventDefault();
        const purchaseDate = new Date();
        const purchaseQuantity =
            parseInt(e.target.quantity.value) + totalPurchase;
        const currentPurchase = parseInt(e.target.quantity.value);
        const remaining = totaAvailable - parseInt(e.target.quantity.value);
        const purchasedFood = {
            id,
            name: food.name,
            price: food.price,
            currentPurchase,
            owner: {
                name: food.ownerName,
                email: food.ownerEmail,
            },
            buyer: {
                name: user?.displayName,
                email: user?.email,
            },
            purchaseDate,
        };

        console.log(purchasedFood);

        const res = await axiosSecure.post("/purchase-food", purchasedFood);

        const response = await axiosSecure.patch(`/food/${id}`, {
            remaining,
            purchaseQuantity,
        });

        setTotalAvailable(remaining);
        setTotalPurchase(purchaseQuantity);

        if (res.data.result.insertedId) toast.success("Purchase Confirmed!");
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>FOOD PURCHASE | EATOPIA</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner title={"Food Purchase"} img={bgImg1}></Banner>

            <div className="bg-gray-200 dark:bg-neutral-800 max-w-2xl mx-auto p-8 rounded-lg my-12">
                <h2 className="text-3xl text-center font-semibold mb-6">
                    Food Purchase
                </h2>
                <form
                    onSubmit={handlePurchase}
                    className="grid grid-cols-1 gap-4 "
                >
                    <div className="space-y-2">
                        <label className="form-title" htmlFor="name">
                            name:
                        </label>
                        <input
                            className="form-input"
                            defaultValue={food.name}
                            disabled
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter food name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="form-title" htmlFor="price">
                            price:
                        </label>
                        <input
                            className="form-input [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            defaultValue={food.price}
                            type="number"
                            disabled
                            onWheel={(e) => e.target.blur()}
                            name="price"
                            id="price"
                            placeholder="Enter food price"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="form-title" htmlFor="quantity">
                            quantity:
                        </label>
                        <input
                            className="form-input [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            min={1}
                            max={totaAvailable}
                            onChange={handleQuantityChange}
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            name="quantity"
                            id="quantity"
                            placeholder="Enter food quantity"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="form-title" htmlFor="buyerName">
                            buyer name:
                        </label>
                        <input
                            className="form-input !text-slate-500"
                            defaultValue={user?.displayName}
                            disabled
                            type="text"
                            name="buyerName"
                            id="buyerName"
                            placeholder="Enter food buyer name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="form-title" htmlFor="buyerEmail">
                            buyer email:
                        </label>
                        <input
                            className="form-input !text-slate-500"
                            defaultValue={user?.email}
                            disabled
                            type="text"
                            name="buyerEmail"
                            id="buyerEmail"
                            placeholder="Enter food buyer email"
                        />
                    </div>

                    <div className="col-span-full mt-4">
                        <button className="btn w-full">Purchase</button>
                    </div>
                </form>
            </div>
        </HelmetProvider>
    );
};

export default FoodPurchase;
