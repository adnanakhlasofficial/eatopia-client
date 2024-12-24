import About from "../../components/About/About";
import App from "../../components/App/App";
import Carousel from "../../components/Carousel/Carousel";
import TopFoods from "../../components/TopFoods/TopFoods";

const Home = () => {
    return (
        <>
            <Carousel></Carousel>
            <About></About>
            <TopFoods></TopFoods>
            <App></App>
        </>
    );
};

export default Home;
