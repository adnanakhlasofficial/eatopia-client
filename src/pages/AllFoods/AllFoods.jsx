import Banner from "../../components/Banner/Banner";
import bgImg1 from "../../assets/images/bgimg.jpg";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const AllFoods = () => {
    const {
        isPending,
        isError,
        data: foods,
        error,
    } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const res = await axios.get("/foods.json");
            return res.data;
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
                {foods.map((food, idx) => (
                    <FoodCard key={idx} food={food}></FoodCard>
                ))}
            </div>
        </div>
    );
};

export default AllFoods;
