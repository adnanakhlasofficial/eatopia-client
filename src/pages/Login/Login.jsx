import { Link, Navigate, useLocation } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
    const { loginUser, user, setLoading } = useContext(AuthContext);
    const { state } = useLocation();

    if (user) return <Navigate to={state ? state : "/"}></Navigate>;

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                toast.success("Signed in successfully. Welcome!");
            })
            .catch((err) => {
                const errMessage =
                    err.message ===
                        "Firebase: Error (auth/invalid-credential)." &&
                    "Invalid email or password.";
                console.log(err.message);
                setLoading(false);
                toast.error(errMessage || err.message);
            });
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>Login | EATOPIA</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="bg-gray-200 dark:bg-neutral-800 max-w-lg mx-auto p-8 rounded-lg my-12">
                <h2 className="text-3xl text-center font-semibold mb-6">
                    Sign In to Your Account
                </h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <label
                            className="capitalize font-medium"
                            htmlFor="email"
                        >
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
                        <Link className="text-sm mt-1 inline-block hover:underline underline-offset-1">
                            Forgot Your Password?
                        </Link>
                    </div>
                    <div>
                        <button className="btn w-full mt-8">Sign In</button>
                    </div>
                </form>
                <SocialLogin text="Sign In"></SocialLogin>
                <div className="mt-4 text-center">
                    <p className="font-medium">
                        Don&apos;t have an account?{" "}
                        <Link
                            className="text-blue-600 hover:underline underline-offset-2 underline-blue-500"
                            to={"/register"}
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Login;
