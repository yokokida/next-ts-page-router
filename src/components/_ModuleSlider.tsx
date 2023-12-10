import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

function SliderSwiper() {
  const MvImages = [
    {
      src: "",
    },
    {
      src: "",
    },
    {
      src: "",
    },
  ];
  return (
    <>
      <div id="home-mv-slider" className="m-swiper-container">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {MvImages.map((img: any, index: number) => (
            <SwiperSlide key={index}>
              <Image
                src={img.src}
                width={1900}
                height={1266}
                className=""
                alt="ASTRO"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export { SliderSwiper };
