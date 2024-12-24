import axios from "axios";

const useAxiosSecure = () => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:5000",
        withCredentials: true
    });

    return axiosInstance;
};

export default useAxiosSecure;
