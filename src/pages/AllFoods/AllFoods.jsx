import Banner from "../../components/Banner/Banner";
import allFoods from "../../assets/images/all-foods.jpeg";
import FoodCard from "../../components/FoodCard/FoodCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";

const AllFoods = () => {
    const axiosSecure = useAxiosSecure();
    const [foods, setFoods] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const foodsPerPage = 9;
    const totalPages = Math.ceil(count / foodsPerPage);
    const pages = [...Array(totalPages).keys()];

    useEffect(() => {
        axiosSecure.get("/count").then((res) => setCount(res.data.count));
    }, []);

    const { data, isPending, isError, error } = useQuery({
        queryKey: ["food", currentPage],
        queryFn: async () => {
            const { data } = await axiosSecure.get(
                `/foods?page=${currentPage}&size=${foodsPerPage}`
            );
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

    const handleSearch = async (e) => {
        e.preventDefault();
        const value = e.target.search.value;
        const { data } = await axiosSecure.get(`/food?search=${value}`);
        setFoods(data);
    };

    const handleReset = () => {
        axiosSecure
            .get(`/foods?page=${currentPage}&size=${foodsPerPage}`)
            .then((res) => {
                setFoods(res.data.result);
            });
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>All Foods | EATOPIA</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
                <Banner title={"All Foods"} img={allFoods}></Banner>

                <div className="wrapper my-12 grid place-items-center">
                    <form
                        onSubmit={handleSearch}
                        className="flex flex-col lg:flex-row gap-4 lg:w-1/2"
                    >
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
                        <input
                            onClick={handleReset}
                            className="btn w-max mx-auto scale-90 cursor-pointer"
                            type="reset"
                        />
                    </form>
                </div>

                <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6">
                    {foods.map((food) => (
                        <FoodCard key={food._id} food={food}></FoodCard>
                    ))}
                </div>

                <div className="flex gap-2 w-max mx-auto my-8">
                    {count > 9 && pages.map((page, idx) => (
                        <button
                            onClick={() => setCurrentPage(page)}
                            className={`btn w-8 flex justify-center items-center ${
                                currentPage === page ? "!bg-slate-600" : undefined
                            }`}
                            key={idx}
                        >
                            {idx + 1}
                        </button>
                    ))}
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AllFoods;
