import Banner from "../../components/Banner/Banner";
import bgImg1 from "../../assets/images/bgimg.jpg";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

    useEffect(() => {
        axiosSecure
            .get(`/foods?page=${currentPage}&size=${foodsPerPage}`)
            .then((res) => {
                setFoods(res.data.result);
            });
    }, [axiosSecure, currentPage]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const value = e.target.search.value;
        const { data } = await axiosSecure.get(`/food?search=${value}`);
        setFoods(data);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>ALL FOOD | EATOPIA</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
                <Banner title={"All Foods"} img={bgImg1}></Banner>

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
                                currentPage === page ? "!bg-red-500" : undefined
                            }`}
                            key={idx}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AllFoods;
