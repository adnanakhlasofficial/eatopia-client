import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from "../Slide/Slide";
import bgImg1 from "../../assets/images/bgimg.jpg";
const Carousel = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide
                        image={bgImg1}
                        title={"A warm, inviting shot of your restaurant's interior or a beautifully set table."}
                        desc={"Experience the best in fine dining at EATOPIA. Enjoy a culinary journey like no other."}
                    ></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgImg1}
                        title={"A close-up of a signature dish prepared by your chef."}
                        desc={"Indulge in our Chef's Special Creations, crafted with passion and the finest ingredients."}
                    ></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgImg1}
                        title={"A vibrant scene of a group of people celebrating at your restaurant."}
                        desc={"Make your special moments unforgettable. Host your events and celebrations at EATOPIA."}
                    ></Slide>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
