import Banner from "../../components/Banner/Banner";
import bgImg1 from "../../assets/images/bgimg.jpg";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const AllFoods = () => {
    const axiosSecure = useAxiosSecure();
    const [foods, setFoods] = useState([]);

    const { isPending, isError, data, error } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/foods");
            setFoods(data.result);
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

    console.log(foods);

    const handleSearch = async (e) => {
        e.preventDefault();
        const value = e.target.search.value;
        const { data } = await axiosSecure.get(`/food?search=${value}`);
        setFoods(data);
    };

    return (
        <div>
            <Banner title={"All Foods"} img={bgImg1}></Banner>

            <div className="wrapper my-12 grid place-items-center">
                <form onSubmit={handleSearch} className="flex gap-4 w-1/2">
                    <label htmlFor="search" className="relative w-full">
                        <input
                            className="form-input w-full block !pr-28 !bg-blue-100 shadow-lg"
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search your favorite food..."
                        />
                        <button className="btn absolute top-1/2 -translate-y-1/2 right-0 scale-90">
                            Search
                        </button>
                    </label>
                    <input className="btn scale-90 cursor-pointer" type="reset" />
                </form>
            </div>

            <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6">
                {foods.map((food) => (
                    <FoodCard key={food._id} food={food}></FoodCard>
                ))}
            </div>
        </div>
    );
};

export default AllFoods;
