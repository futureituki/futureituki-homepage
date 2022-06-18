import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
} from "swiper";
import { Image } from "@chakra-ui/react";
import "swiper/css/bundle";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Slider = (props) => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={true}
      loop={true}
      modules={[EffectFade]}
      effect="fade"
      pagination={{
        clickable: true,
      }}
    >
      {props.image.map((src, index) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image
              src={src}
              layout="responsive"
              width={640}
              height={400}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
