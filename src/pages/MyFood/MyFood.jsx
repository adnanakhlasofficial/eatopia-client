import { useContext } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ClipLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import allFoods from "../../assets/images/all-foods.jpeg";
import { Link } from "react-router-dom";

const MyFood = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["my-foods"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-foods?email=${user.email}`);
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
        <Banner title={"My Foods"} img={allFoods}></Banner>
        {data.length === 0 && (
          <h2 className="text-center text-2xl font-semibold my-20 bg-gray-100 dark:bg-zinc-900 p-3 w-max mx-auto rounded-lg">
            You haven’t added any food yet!
          </h2>
        )}
        <div className="wrapper my-12 w-full overflow-x-auto">
          <table className="text-gray-600 dark:text-gray-400 mx-auto text-sm bg bg-gray-100 dark:bg-zinc-900 rounded-md text-left">
            <thead>
              <tr className="dark:border-slate-600 text-gray-600 dark:text-gray-400 *:px-4 *:py-2 *:font-semibold">
                <th></th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.length < 1 ? (
                <tr>
                  <td
                    className="text-center text-2xl font-semibold px-4 py-2"
                    colSpan={6}
                  >
                    No food has been ordered yet.
                  </td>
                </tr>
              ) : (
                data.map((item, idx) => (
                  <tr
                    className="border-y border-gray-400 dark:border-slate-600 text-gray-600 dark:text-gray-200 *:px-4 *:py-2"
                    key={item._id}
                  >
                    <td className="text-right">{idx + 1}</td>
                    <td>{item.name}</td>
                    <td className="text-right">${item.price}</td>
                    <td className="text-right">{item.quantity}</td>
                    <td>
                      <Link
                        className="text-blue-600 font-semibold hover:underline underline-offset-2"
                        to={`/food/update/${item._id}`}
                      >
                        Update
                      </Link>
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

export default MyFood;
