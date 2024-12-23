import { useContext, useEffect } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ClipLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation } from "react-router-dom";

const MyFood = () => {
    const { user } = useContext(AuthContext);
    const {pathname} = useLocation();
    const axiosSecure = useAxiosSecure();

    const { isPending, isError, data, error } = useQuery({
        queryKey: ["my-foods"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(
                `/my-foods?email=${user.email}`
            );
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

    console.log(data);

    return (
        <div>
            <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6">
                {data.map((food) => (
                    <FoodCard key={food._id} food={food}></FoodCard>
                ))}
            </div>
        </div>
    );
};

export default MyFood;
