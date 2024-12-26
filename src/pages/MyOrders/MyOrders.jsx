import Banner from "../../components/Banner/Banner";
import bgImg1 from "../../assets/images/bgimg.jpg";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ClipLoader } from "react-spinners";
import { format } from "date-fns";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [purchasedFood, setPurchasedFood] = useState([]);
    const { isPending, isError, error, data } = useQuery({
        queryKey: ["purchasedFood"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(
                `/orders?email=${user.email}`
            );
            setPurchasedFood(data);
            return data;
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

    const handleDelete = async (id) => {
        const { data } = await axiosSecure.delete(`/purchase-delete/${id}`);
        if (data.deletedCount) toast.success("Food Removed!");
        const remaining = purchasedFood.filter((item) => item._id !== id);
        setPurchasedFood(remaining);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>My Orders | EATOPIA</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
                <Banner title={"My Orders"} img={bgImg1}></Banner>

                <div className="wrapper my-12">
                    <table className="text-gray-600 dark:text-gray-400 mx-auto text-sm bg bg-gray-100 dark:bg-zinc-900 rounded-md text-left">
                        <thead>
                            <tr className="dark:border-slate-600 text-gray-600 dark:text-gray-400 *:px-4 *:py-2 *:font-semibold">
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Purchased Date</th>
                                <th>Food Owner</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchasedFood.length < 1 ? (
                                <tr>
                                    <td
                                        className="text-center text-2xl font-semibold px-4 py-2"
                                        colSpan={6}
                                    >
                                        No food has been ordered yet.
                                    </td>
                                </tr>
                            ) : (
                                purchasedFood.map((item, idx) => (
                                    <tr
                                        className="border-y border-gray-400 dark:border-slate-600 text-gray-600 dark:text-gray-200 *:px-4 *:py-2"
                                        key={item._id}
                                    >
                                        <td className="text-right">
                                            {idx + 1}
                                        </td>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            {format(item.purchaseDate, "PP")} (
                                            {format(item.purchaseDate, "p")})
                                        </td>
                                        <td>{item.owner.name}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleDelete(item._id)
                                                }
                                                className="grid place-items-center"
                                            >
                                                <FaTrash className="text-red-500 dark:text-red-400" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default MyOrders;
