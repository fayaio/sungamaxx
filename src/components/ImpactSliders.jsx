import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ImpactSliders() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide className="mt-8">{Envslide()}</SwiperSlide>
        <SwiperSlide className="mt-8">{Socslide()}</SwiperSlide>
        <SwiperSlide className="mt-8">{Pplncul()}</SwiperSlide>
        <SwiperSlide className="mt-8">{Hdr()}</SwiperSlide>
        <SwiperSlide className="mt-8">{Divslide()}</SwiperSlide>
        <SwiperSlide className="mt-8">{Eelide()}</SwiperSlide>
      </Swiper>
    </>
  );
}

function Envslide() {
  const bg = {
    background: "url('/images/svgs/envslide.svg')no-repeat",
  };
  return (
    <div
      className=" flex items-center  justify-between w-[85%] m-auto  h-[70vh]  bg-fixed bg-center bg-cover
      sm:w-[80%] sm:h-[50vh]
       "
      style={bg}
    >
      <div className="w-[60%]  h-fit bg-black/60 sm:w-[70%] sm:-mt-0 ">
        <div className="text-left pt-16 pb-16 pl-6   xms:p-2">
          <h2 className="text-white font-bold font-Crim text-3xl pb-2 sm:text-xl">
            Environmental Impact
          </h2>
          <p className=" text-white/80  font-Quat text-lg w-[95%] font-thin sm:text-sm">
            Protecting the environment for future generations is our
            responsibility...
          </p>
          <div
            className="flex items-center font-Quat italic underline text-light/80   text-base mrd:text-sm font-light w-fit
                   hover:text-whitee   drop-shadow-lg shadow-logo
                   mt-3 mrd:mt-4  "
          >
            <Link href="/impact#environmental-impact " className="sm:text-xs">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Socslide() {
  const bg = {
    background: "url('/images/svgs/socislide.svg')no-repeat",
  };
  return (
    <div
      className="  sm:w-[80%] sm:h-[50vh] flex items-center  justify-between w-[85%] m-auto h-[70vh]  bg-fixed bg-center bg-cover "
      style={bg}
    >
      <div className="w-[60%]  h-fit bg-black/60  sm:w-[70%] sm:-mt-0  ">
        <div className="text-left pt-10 pb-10 pl-6   xms:p-2">
          <h2 className="text-white font-bold font-Crim text-3xl pb-2  sm:text-xl">
            Socioeconomic Impact
          </h2>
          <p className=" text-white/80  font-Quat text-lg w-[95%] font-thin  sm:text-sm">
            SUNGAMAX has to adopt practical solutions that are tailored to the
            ...
          </p>
          <div
            className="flex items-center font-Quat italic underline text-light/80   text-base mrd:text-sm font-light w-fit
                   hover:text-whitee   drop-shadow-lg shadow-logo
                   mt-3 mrd:mt-4  "
          >
            <Link href="/impact#socioeconomic-impact" className="sm:text-xs ">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pplncul() {
  const bg = {
    background: "url('/images/svgs/pplncul.svg')no-repeat",
  };
  return (
    <div
      className="  sm:w-[80%] sm:h-[50vh] flex items-center  justify-between w-[85%] m-auto  h-[70vh]  bg-fixed bg-center bg-cover "
      style={bg}
    >
      <div className="w-[60%]  h-fit bg-black/60 sm:w-[70%] sm:-mt-0  ">
        <div className="text-left pt-10 pb-10 pl-6   xms:p-2">
          <h2 className="text-white font-bold font-Crim text-3xl pb-2 sm:text-xl">
            People And Culture
          </h2>
          <p className=" text-white/80  font-Quat text-lg w-[95%] font-thin  sm:text-sm">
            At SUNGAMAX, we recognise that people are at the core of our ability
            to achieve our mission.
          </p>
          <div
            className="flex items-center font-Quat italic underline text-light/80   text-base mrd:text-sm font-light w-fit
                   hover:text-whitee   drop-shadow-lg shadow-logo
                   mt-3 mrd:mt-4  "
          >
            <Link href="/impact#people&culture" className=" sm:text-xs">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hdr() {
  const bg = {
    background: "url('/images/svgs/hdr.svg')no-repeat",
  };
  return (
    <div
      className="  sm:w-[80%] sm:h-[50vh] flex items-center  justify-between w-[85%] m-auto  h-[70vh] bg-fixed bg-center bg-cover "
      style={bg}
    >
      <div className="w-[60%]  h-fit bg-black/60  sm:w-[70%] sm:-mt-0 ">
        <div className="text-left pt-10 pb-10 pl-6   xms:p-2">
          <h2 className="text-white font-bold font-Crim text-3xl pb-2 sm:text-xl">
            Human Capital Development
          </h2>
          <p className=" text-white/80  font-Quat text-lg w-[95%] font-thin  sm:text-sm">
            We value all our employees and are invested in helping them to grow,
            improve and...
          </p>
          <div
            className="flex items-center font-Quat italic underline text-light/80   text-base mrd:text-sm font-light w-fit
                   hover:text-whitee   drop-shadow-lg shadow-logo
                   mt-3 mrd:mt-4  "
          >
            <Link
              href="/impact#human-capital-development"
              className="sm:text-xs"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divslide() {
  const bg = {
    background: "url('/images/svgs/divslider.svg')no-repeat",
  };
  return (
    <div
      className=" sm:w-[80%] sm:h-[50vh] flex items-center  justify-between w-[85%] m-auto  h-[70vh] bg-fixed bg-center bg-cover "
      style={bg}
    >
      <div className="w-[60%]  h-fit bg-black/60  sm:w-[70%] sm:-mt-0 ">
        <div className="text-left pt-10 pb-10 pl-6   xms:p-2">
          <h2 className="text-white font-bold font-Crim text-3xl pb-2 sm:text-xl">
            Diversity and Inclusion
          </h2>
          <p className=" text-white/80  font-Quat text-lg w-[95%] font-thin sm:text-sm">
            SUNGAMAX BUSINESSES are committed to empowering diverse voices in
            our organisation and...
          </p>
          <div
            className="flex items-center font-Quat italic underline text-light/80   text-base mrd:text-sm font-light w-fit
                   hover:text-whitee   drop-shadow-lg shadow-logo
                   mt-3 mrd:mt-4  "
          >
            <Link href="/impact#diversity&inclusion" className="sm:text-xs">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Eelide() {
  const bg = {
    background: "url('/images/svgs/eeslider.svg')no-repeat",
  };
  return (
    <div
      className=" sm:w-[80%] sm:h-[50vh] flex items-center  justify-between w-[85%] m-auto  h-[70vh] bg-fixed bg-center bg-cover "
      style={bg}
    >
      <div className="w-[60%]  h-fit bg-black/60  sm:w-[70%] sm:-mt-0  ">
        <div className="text-left pt-10 pb-10 pl-6   xms:p-2">
          <h2 className="text-white font-bold font-Crim text-3xl pb-2 sm:text-xl">
            Economic Empowerment
          </h2>
          <p className=" text-white/80  font-Quat text-lg w-[95%] font-thin  sm:text-sm">
            From bringing traditional offline businesses online to providing our
            partners with more income opportunities...
          </p>
          <div
            className="flex items-center font-Quat italic underline text-light/80   text-base mrd:text-sm font-light w-fit
                   hover:text-whitee   drop-shadow-lg shadow-logo
                   mt-3 mrd:mt-4  "
          >
            <Link href="/impact#economic-empowerment" className="sm:text-xs">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
