import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center space-y-8">
                <div>
                    <h1 className="text-9xl font-bold text-blue-500">404</h1>
                    <h2 className="text-3xl font-semibold text-gray-800 mt-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Oops! The page you&apos;re looking for doesn&apos;t
                        exist or has been moved.
                    </p>
                </div>
                <Link to="/" className="btn w-max mx-auto">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
