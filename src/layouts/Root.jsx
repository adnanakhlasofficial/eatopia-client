import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <header className="bg-gray-200/30 dark:bg-neutral-900/30 backdrop-blur-lg sticky top-0 z-20">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-24.75rem)]">
        <Outlet></Outlet>
      </main>
      <footer className="bg-gray-200 dark:bg-neutral-900">
        <Footer />
      </footer>
      <Toaster />
    </div>
  );
};

export default Root;
