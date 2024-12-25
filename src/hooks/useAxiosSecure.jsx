import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { logoutUser } = useAuth() || {};

    useEffect(() => {
        axiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.status === 401 || error.status === 403) {
                    logoutUser().then(() => {
                        toast.error("You've logged out");
                    });
                }

                return Promise.reject(error);
            }
        );
    }, []);

    return axiosInstance;
};

export default useAxiosSecure;
