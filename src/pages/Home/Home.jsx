import { Helmet, HelmetProvider } from "react-helmet-async";
import About from "../../components/About/About";
import App from "../../components/App/App";
import Carousel from "../../components/Carousel/Carousel";
import TopFoods from "../../components/TopFoods/TopFoods";

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home | EATOPIA</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Carousel></Carousel>
            <About></About>
            <TopFoods></TopFoods>
            <App></App>
        </HelmetProvider>
    );
};

export default Home;
