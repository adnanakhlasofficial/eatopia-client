import { useContext } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ClipLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import allFoods from "../../assets/images/all-foods.jpeg";

const MyFood = () => {
    const { user } = useContext(AuthContext);
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
        <HelmetProvider>
            <Helmet>
                <title>My Foods | EATOPIA</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <div>
                <Banner title={"All Foods"} img={allFoods}></Banner>
                <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6">
                    {data.map((food) => (
                        <FoodCard key={food._id} food={food}></FoodCard>
                    ))}
                </div>
            </div>
        </HelmetProvider>
    );
};

export default MyFood;
