import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const SocialLogin = ({ text }) => {
    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then((userCredential) => {
                toast.success(`${text} successful!`);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <div className="pt-6 mt-6 border-t-[1px] border-slate-300 dark:border-gray-500">
            <button
                onClick={handleGoogleLogin}
                className="btn !bg-inherit text-neutral-950 dark:text-slate-200  hover:text-slate-200 hover:!bg-blue-600 border-2 !border-blue-600 w-full"
            >
                {text} with Google{" "}
            </button>
        </div>
    );
};

SocialLogin.propTypes = {
    text: PropTypes.string,
};

export default SocialLogin;
