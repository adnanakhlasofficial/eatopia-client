import android from "../../assets/images/play-store.png";
import apple from "../../assets/images/apple.png";
import web from "../../assets/images/web.jpeg";
import { motion } from "motion/react";

const App = () => {
    return (
        <div className="wrapper my-20 flex items-center gap-16 justify-around flex-col lg:flex-row">
            <div className="max-w-lg">
                <h2 className="text-3xl font-bold !leading-[3rem] text-slate-950 dark:text-slate-100">
                    Simple Way to Order Your Food Faster
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-3">
                    Experience the convenience of Eatopia at your fingertips!
                    Our mobile app brings the deliciousness of our restaurant
                    directly to you, whether you&apos;re at home, at work, or on
                    the go. With just a few taps, you can explore our full menu,
                    customize your orders, and enjoy exclusive deals and offers.
                </p>
                <div className="flex gap-4 mt-6">
                    <button>
                        <img className="h-12" src={android} alt="" />
                    </button>
                    <button>
                        <img className="h-12" src={apple} alt="" />
                    </button>
                </div>
            </div>
            <div className="lg:w-1/2 grid place-items-center">
                <motion.img
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1/2 rounded-lg border-4 border-slate-900 dark:border-slate-100"
                    src={web}
                    alt=""
                />
            </div>
        </div>
    );
};

export default App;
