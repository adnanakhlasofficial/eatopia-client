import Banner from "../../components/Banner/Banner";
import bgImg1 from "../../assets/images/bgimg.jpg";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllFoods = () => {
    const axiosSecure = useAxiosSecure();

    const {
        isPending,
        isError,
        data: foods,
        error,
    } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/foods");
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

    return (
        <div>
            <Banner title={"All Foods"} img={bgImg1}></Banner>

            <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6">
                {foods.map((food) => (
                    <FoodCard key={food._id} food={food}></FoodCard>
                ))}
            </div>
        </div>
    );
};

export default AllFoods;
