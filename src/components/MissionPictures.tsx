import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Icon from "./common/Icon";
import { Tooltip } from "react-tooltip";

const MissionPictures = ({ pictures }: { pictures: Array<{ path: string; tooltipLabel: string; }> }) => {
  return (
    <div className="mt-16">
      <p className="font-semibold text-lg">Quelques images</p>
      <div className="mt-10 select-none">
        <Swiper
          className="relative"
          modules={[Navigation]}
          slidesPerView={1}
          breakpoints={{
            1200: {
              slidesPerView: 2
            }
          }}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {pictures.map((picture, index) => (
            <SwiperSlide className="w-full" data-tooltip-id="data-tooltip-picture" data-tooltip-place="top" data-tooltip-content={picture.tooltipLabel}>
              <Tooltip id="data-tooltip-picture" float className="z-50" style={{
                backgroundColor: "#E0234E"
              }} />
              <img src={picture.path} onClick={() => window.open(`https://yabawt-rapport.william-fort.fr${picture.path}`)} alt="" key={index} className=" h-64 cursor-zoom-in w-full object-cover transition ease-in-out duration-300 border-transparent border-2 rounded hover:border-red" />
            </SwiperSlide>
          ))}
          <div className="absolute z-20 left-5 top-1/2 -translate-y-1/2 image-swiper-button-prev bg-red rounded-full p-1">
            <Icon name="arrow" className="text-white rotate-180" />
          </div>
          <div className="absolute z-20 right-5 top-1/2 -translate-y-1/2 image-swiper-button-next bg-red rounded-full p-1">
            <Icon name="arrow" className="text-white" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default MissionPictures;