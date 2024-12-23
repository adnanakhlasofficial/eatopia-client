import { Link, useLocation } from "react-router-dom";

const FoodCard = ({ food }) => {
    const { _id, name, image, price, origin, quantity, category } = food;
    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <div className="max-w-sm rounded-xl bg-blue-50 dark:bg-neutral-800 shadow-lg p-4">
            <div>
                <img
                    className="w-full h-48 object-cover rounded-lg"
                    src={
                        image ||
                        "https://i.ibb.co.com/JpsfcNm/louis-hansel-xx-Ic-EAh-It-J0-unsplash.webp"
                    }
                    alt={name}
                />
            </div>
            <div className="mt-6 mb-4">
                <h2 className="font-bold text-xl mb-2">{name}</h2>
                <div className="space-y-2 mt-3">
                    <p className="text-gray-600 dark:text-gray-400">
                        Category: {category}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Quantity: {quantity}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Price: ${price.toFixed(2)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Origin: {origin}
                    </p>
                </div>
            </div>
            <div>
                {pathname === "/my-foods" ? (
                    <Link
                        to={`/food/update/${_id}`}
                        className="btn w-full text-center"
                    >
                        Update Details
                    </Link>
                ) : (
                    <Link
                        to={`/food/details/${_id}`}
                        className="btn w-full text-center"
                    >
                        View Details
                    </Link>
                )}
            </div>
        </div>
    );
};

export default FoodCard;
