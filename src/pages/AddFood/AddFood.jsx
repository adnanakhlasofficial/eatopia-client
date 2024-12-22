import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const [foodCategory, setFoodCategory] = useState("Select Food Category");
    const [foodOrigin, setFoodOrigin] = useState("Select Food Origin");

    const handleAddFood = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const { description, ...formData } = Object.fromEntries(form.entries());
        const desc = description.split("\n").filter((val) => val !== "");
        formData.ownerName = user?.displayName;
        formData.ownerEmail = user?.email;
        formData.desc = desc;
        console.log(formData);
    };

    return (
        <div className="bg-gray-200 dark:bg-neutral-800 max-w-2xl mx-auto p-8 rounded-lg my-12">
            <h2 className="text-3xl text-center font-semibold mb-6">
                Add New Dish
            </h2>
            <form
                onSubmit={handleAddFood}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 "
            >
                <div className="space-y-2">
                    <label className="form-title" htmlFor="name">
                        name:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter food name"
                    />
                </div>

                <div className="space-y-2">
                    <label className="form-title" htmlFor="image">
                        image:
                    </label>
                    <input
                        className="form-input"
                        type="url"
                        name="image"
                        id="image"
                        placeholder="Enter food image link"
                    />
                </div>

                <div className="space-y-2 col-span-full">
                    <label className="form-title" htmlFor="category">
                        category:
                    </label>
                    <select
                        defaultValue={foodCategory}
                        onChange={(e) => setFoodCategory(e.target.value)}
                        className="form-input"
                        name="category"
                        id="category"
                    >
                        <option disabled>Select Food Category</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="desserts">Desserts</option>
                        <option value="beverages">Beverages</option>
                        <option value="salads">Salads</option>
                        <option value="soups">Soups</option>
                        <option value="sides">Sides</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="seafood">Seafood</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="grill">Grill</option>
                        <option value="specials">Specials</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="form-title" htmlFor="quantity">
                        quantity:
                    </label>
                    <input
                        className="form-input [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Enter food quantity"
                    />
                </div>

                <div className="space-y-2">
                    <label className="form-title" htmlFor="price">
                        price:
                    </label>
                    <input
                        className="form-input [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Enter food price"
                    />
                </div>

                <div className="space-y-2">
                    <label className="form-title" htmlFor="username">
                        Owner name:
                    </label>
                    <input
                        disabled
                        defaultValue={user?.displayName}
                        className="form-input !text-neutral-400"
                        type="text"
                        name="username"
                        id="username"
                    />
                </div>

                <div className="space-y-2">
                    <label className="form-title" htmlFor="usermail">
                        Owner email:
                    </label>
                    <input
                        disabled
                        defaultValue={user?.email}
                        className="form-input !text-neutral-400"
                        type="email"
                        name="usermail"
                        id="usermail"
                    />
                </div>

                <div className="space-y-2 col-span-full">
                    <label className="form-title" htmlFor="origin">
                        origin:
                    </label>
                    <select
                        defaultValue={foodOrigin}
                        onChange={(e) => setFoodOrigin(e.target.value)}
                        className="form-input"
                        name="origin"
                        id="origin"
                    >
                        <option disabled>Select Food Origin</option>
                        <option value="afghanistan">Afghanistan</option>
                        <option value="argentina">Argentina</option>
                        <option value="australia">Australia</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="brazil">Brazil</option>
                        <option value="canada">Canada</option>
                        <option value="china">China</option>
                        <option value="france">France</option>
                        <option value="germany">Germany</option>
                        <option value="india">India</option>
                        <option value="indonesia">Indonesia</option>
                        <option value="italy">Italy</option>
                        <option value="japan">Japan</option>
                        <option value="mexico">Mexico</option>
                        <option value="nepal">Nepal</option>
                        <option value="netherlands">Netherlands</option>
                        <option value="new-zealand">New Zealand</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="russia">Russia</option>
                        <option value="south-africa">South Africa</option>
                        <option value="south-korea">South Korea</option>
                        <option value="spain">Spain</option>
                        <option value="sweden">Sweden</option>
                        <option value="switzerland">Switzerland</option>
                        <option value="thailand">Thailand</option>
                        <option value="united-arab-emirates">
                            United Arab Emirates
                        </option>
                        <option value="united-kingdom">United Kingdom</option>
                        <option value="united-states">United States</option>
                        <option value="vietnam">Vietnam</option>
                    </select>
                </div>

                <div className="space-y-2 col-span-full">
                    <label className="form-title" htmlFor="description">
                        description:
                    </label>
                    <textarea
                        className="form-input resize-none"
                        name="description"
                        id="description"
                        cols="30"
                        rows="8"
                        placeholder="Enter food description"
                    ></textarea>
                </div>

                <div className="col-span-full">
                    <button className="btn w-full">Add Dish</button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;
