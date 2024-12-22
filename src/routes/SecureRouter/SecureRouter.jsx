import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const SecureRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const { pathname } = useLocation();

    if (loading)
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

    if (!user) return <Navigate to={"/login"} state={pathname}></Navigate>;

    return children;
};

export default SecureRouter;
