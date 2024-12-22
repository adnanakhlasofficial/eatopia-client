import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const displayName = form.name.value;
        const photoURL = form.photo.value;

        // console.log({ email, password, name, photo });
        if (!passRegex.test(password)) alert("Enter password correctly");

        createUser(email, password)
            .then((userCredential) => {
                updateUser({displayName, photoURL})
                .then(() => {
                    console.log("profile updated");
                    console.log(userCredential.user);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="bg-gray-200 dark:bg-neutral-800 max-w-lg mx-auto p-8 rounded-lg my-12">
            <h2 className="text-3xl text-center font-semibold mb-6">
                Sign In to Your Account
            </h2>
            <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                    <label className="capitalize font-medium" htmlFor="name">
                        name:
                    </label>
                    <input
                        className="px-4 py-2 w-full bg-gray-50 rounded-md text-gray-700 font-medium"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="space-y-2">
                    <label className="capitalize font-medium" htmlFor="email">
                        email:
                    </label>
                    <input
                        className="px-4 py-2 w-full bg-gray-50 rounded-md text-gray-700 font-medium"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        className="capitalize font-medium"
                        htmlFor="photo-url"
                    >
                        photo URL:
                    </label>
                    <input
                        className="px-4 py-2 w-full bg-gray-50 rounded-md text-gray-700 font-medium"
                        type="url"
                        name="photo"
                        id="photo-url"
                        placeholder="Enter your photo url"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        className="capitalize font-medium"
                        htmlFor="password"
                    >
                        password:
                    </label>
                    <input
                        className="px-4 py-2 w-full bg-gray-50 rounded-md text-gray-700 font-medium"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div>
                    <button className="btn w-full mt-8">Sign Up</button>
                </div>
            </form>
            <SocialLogin text={"Sign Up"}></SocialLogin>
            <div className="mt-4 text-center">
                <p className="font-medium">
                    Already have an account?{" "}
                    <Link
                        className="text-blue-600 hover:underline underline-offset-2 underline-blue-500"
                        to={"/login"}
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
