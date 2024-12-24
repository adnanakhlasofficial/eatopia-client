import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ClipLoader } from "react-spinners";
import FoodCard from "../FoodCard/FoodCard";
import { Link } from "react-router-dom";

const TopFoods = () => {
    const axiosSecure = useAxiosSecure();
    const { isPending, isError, error, data } = useQuery({
        queryKey: ["topFoods"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/limit-food");
            console.log(data);
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

    return (
        <div className="my-20 wrapper">
            <h2 className="text-3xl font-bold !leading-[3rem] text-slate-950 dark:text-slate-100 text-center">Our Top Food Picks for You</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-6">
                {data.map((food) => (
                    <FoodCard key={food._id} food={food}></FoodCard>
                ))}
            </div>
            <div>
                <Link className="btn text-center w-max mx-auto" to={"/all-foods"}>View All</Link>
            </div>
        </div>
    );
};

export default TopFoods;
