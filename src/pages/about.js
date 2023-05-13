import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import sungamaxLogo from '../../public/images/logos/sungamaxlogo.png';
import whoweare from '../../public/images/svgs/weweareimg.svg';
import visionimg from '../../public/images/svgs/visionimg.svg';
import missionimg from '../../public/images/svgs/missionimg.svg';
import clientfocused from '../../public/images/svgs/client-focused.svg';
import crediblity from '../../public/images/svgs/credibility.svg';
import commitment from '../../public/images/svgs/commitment.svg';
import culture from '../../public/images/svgs/culture.svg';
import character from '../../public/images/svgs/character.svg';
import creativity from '../../public/images/svgs/creativity.svg';

const about = () => {
  return (
    <>
      <Head>
        <title>Sungamax | About Us</title>
        <meta
          name="description"
          content="Who We Are -To be the leading force for building and developing sustainable and impactful businesses"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <main className="bg-white mt-10">
        {/* ABOUT SUNGAMAX */}
        <section id="about" className="mt-8 ">
          <div className="flex items-center justify-between w-[85%] lg:w-[90%] m-auto sm:flex-col sm:w-[100%] sm:m-0">
            <div className="w-[53%] flex flex-col items-left  self-center  lg:w-[50%] sm:order-2 sm:items-center sm:w-[100%] sm:text-center">
              <h6 className=" font-Crim uppercase text-[46px] text-logo font-black lg:text-[40px] mrd:text-[30px] sm:text-4xl xs:text-3xl xxs:text-2xl">
                About Sungamax !
              </h6>
              <p className=" font-Quat text-black text-2xl pt-9 w-[75%] lg:w-[90%]  mrd:w-[95%]  mrd:text-xl sm:pt-4 sm:font-semibold font-medium sm:text-xl xs:text-lg xxs:text-base">
                Your Reliable Partner in Developing Businesses and People.
              </p>

              <div
                className="flex items-center font-Quat bg-btncolor text-light p-2 rounded  text-base  mrd:text-sm font-light w-fit
                   hover:bg-light hover:text-darkGrey border-2 border-solid border-transparent hover:border-lightPurple
                   mt-9 mrd:mt-4 mrd: "
              >
                <Link href="#who-we-are" className="mr-2">
                  Know More
                </Link>

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-4 h-4 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </div>

            <div className="w-[40%] ml-2 lg:w-[35%] sm:order-1 sm:w-[80%] sm:p-8 ">
              <Image
                src={sungamaxLogo}
                alt="Sungamax About"
                className="w-full  "
                priority

                //   sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
              />
            </div>
          </div>
        </section>

        {/* WHO WE ARE SUNGAMAX */}
        <section id="who-we-are" className="mt-20 bg-light ">
          <div className="pt-20 pb-20 flex items-center justify-between w-[85%] lg:w-[90%] m-auto sm:flex-col sm:w-[100%] sm:m-0">
            <div className=" w-[40%] flex flex-col items-left  self-center  lg:w-[50%] order-2 sm:items-center sm:w-[100%] sm:text-center">
              <h6 className=" font-Crim uppercase text-[46px] text-logo font-black lg:text-[40px] mrd:text-[30px] sm:text-4xl xs:text-3xl xxs:text-2xl">
                WHO WE ARE !
              </h6>
              <p className=" font-Quat text-black text-2xl pt-9 w-[95%] lg:w-[90%]  mrd:w-[95%]  mrd:text-xl sm:pt-4 sm:font-semibold font-medium sm:text-xl xs:text-lg xxs:text-base">
                To be the leading force for building and developing sustainable
                and impactful businesses.
              </p>

              <div
                className="flex items-center font-Quat bg-btncolor text-light p-2 rounded  text-base  mrd:text-sm font-light w-fit
                   hover:bg-light hover:text-darkGrey border-2 border-solid border-transparent hover:border-lightPurple
                   mt-9 mrd:mt-4 !scroll-smooth "
              >
                <Link href="#vision " className="mr-2 ">
                  Know More
                </Link>

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-4 h-4 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </div>

            <div className="  w-[40%] ml-2 lg:w-[35%] order-1 sm:w-[80%] sm:p-8 w3-animate-left">
              <Image
                src={whoweare}
                alt="Sungamax About"
                className="w-full  "
                priority

                //   sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
              />
            </div>
          </div>
        </section>

        {/* OUR VISION SUNGAMAX */}
        <section id="vision" className="bg-white mt-10 ">
          <div className="pt-20 pb-20 flex items-center justify-between w-[85%] lg:w-[90%] m-auto sm:flex-col sm:w-[100%] sm:m-0">
            <div className=" w-[53%] flex flex-col items-left  self-center  lg:w-[50%] sm:order-2 sm:items-center sm:w-[100%] sm:text-center">
              <h6 className=" font-Crim uppercase text-[46px] text-logo font-black lg:text-[40px] mrd:text-[30px] sm:text-4xl xs:text-3xl xxs:text-2xl">
                OUR VISION
              </h6>
              <p className=" font-Quat text-black text-2xl pt-9 w-[75%] lg:w-[90%]  mrd:w-[95%]  mrd:text-xl sm:pt-4 sm:font-semibold font-medium sm:text-xl xs:text-lg xxs:text-base">
                To be the leading edge hub in providing practical business
                consultation, trade and investment with efficient service
                delivery.
              </p>

              <div
                className="flex items-center font-Quat bg-btncolor text-light p-2 rounded  text-base  mrd:text-sm font-light w-fit
                   hover:bg-light hover:text-darkGrey border-2 border-solid border-transparent hover:border-lightPurple
                   mt-9 mrd:mt-4 mrd: "
              >
                <Link href="#mission" className="mr-2">
                  Know More
                </Link>

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-4 h-4 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </div>

            <div className="  w-[40%] ml-2 lg:w-[35%] sm:order-1 sm:w-[80%] sm:p-8 ">
              <Image
                src={visionimg}
                alt="Sungamax About"
                className="w-full  "
                priority

                //   sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
              />
            </div>
          </div>
        </section>

        {/* OUR MISSION SUNGAMAX */}
        <section id="mission" className="mt-20 bg-light ">
          <div className="pt-20 pb-20 flex items-center justify-between w-[85%] lg:w-[90%] m-auto sm:flex-col sm:w-[100%] sm:m-0">
            <div className="  w-[40%] flex flex-col items-left  self-center  lg:w-[50%] order-2 sm:items-center sm:w-[100%] sm:text-center">
              <h6 className=" font-Crim uppercase text-[46px] text-logo font-black lg:text-[40px] mrd:text-[30px] sm:text-4xl xs:text-3xl xxs:text-2xl">
                OUR MISSION
              </h6>
              <p className=" font-Quat text-black text-2xl pt-9 w-[95%] lg:w-[90%]  mrd:w-[100%]  mrd:text-xl sm:pt-4 sm:font-semibold sm:p-7 font-medium sm:text-xl xs:text-lg xxs:text-base">
                Our mission is to provide practical, leading edge, high-impact
                business development solutions, trade and investment that
                contribute to the creation of wealth, building the nation &
                assuring global well-being.
              </p>

              <div
                className="flex items-center font-Quat bg-btncolor text-light p-2 rounded  text-base  mrd:text-sm font-light w-fit
                   hover:bg-light hover:text-darkGrey border-2 border-solid border-transparent hover:border-lightPurple
                   mt-9 mrd:mt-4 mrd: "
              >
                <Link href="#values" className="mr-2">
                  Know More
                </Link>

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-4 h-4 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </div>

            <div className=" w-[40%] ml-2 lg:w-[35%] order-1 sm:w-[80%] sm:p-8 ">
              <Image
                src={missionimg}
                alt="Sungamax About"
                className="w-full  "
                priority

                //   sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
              />
            </div>
          </div>
        </section>

        {/* VALUES SUNGAMAX */}
        <section id="values" className="bg-white mt-10  mb-10">
          <div className=" flex flex-col items-left  w-[85%] lg:w-[90%] m-auto sm:flex-col sm:w-[100%] sm:m-0">
            <div className="">
              <h6 className=" pb-9 font-Crim uppercase text-[46px] text-logo font-black lg:text-[40px] mrd:text-[30px] sm:text-4xl xs:text-3xl xxs:text-2xl">
                Values
              </h6>
            </div>

            <div className="grid grid-cols-3 gap-6 w-full m-auto mrd:grid-cols-2   sm:grid-cols-1 sm:w-[80%] sm:m-auto ">
              <div className=" bg-cardwhite  shadow-xl shadow-stone-300 w-70 m-0 p-6 transition duration-300 ease-in-out hover:scale-110 ">
                <div className="">
                  <Image
                    src={clientfocused}
                    alt="Sungamax About"
                    className="m-auto"
                    priority
                    width={100}
                    height={80}
                  />
                </div>

                <div className="flex flex-col text-center">
                  <h2 className="font-Crim font-bold  text-lightPurple text-xl pt-3">
                    Client Focus
                  </h2>
                  <p className=" font-Quat p-2">
                    We live and die by the quality of the services we provide.
                  </p>
                </div>
              </div>

              <div className=" bg-cardwhite shadow-xl shadow-stone-300 w-70 m-0 p-6 transition duration-300 ease-in-out hover:scale-110 ">
                <div className="">
                  <Image
                    src={crediblity}
                    alt="Sungamax About"
                    className="m-auto"
                    priority
                    width={100}
                    height={80}
                  />
                </div>

                <div className="flex flex-col text-center">
                  <h2 className="font-Crim font-bold  text-lightPurple text-xl pt-3">
                    Credibility
                  </h2>
                  <p className=" font-Quat p-2">
                    We do what we promised to do when we promised to do it
                    BETTER as the way we promised to do it.
                  </p>
                </div>
              </div>

              <div className=" bg-cardwhite shadow-xl shadow-stone-300 w-70 m-0 p-6 transition duration-300 ease-in-out hover:scale-110 ">
                <div className="">
                  <Image
                    src={commitment}
                    alt="Sungamax About"
                    className="m-auto"
                    priority
                    width={100}
                    height={80}
                  />
                </div>

                <div className="flex flex-col text-center">
                  <h2 className="font-Crim font-bold text-lightPurple text-xl pt-3">
                    Commitment
                  </h2>
                  <p className=" font-Quat p-2">
                    We go the extra mile for our clients and work colleagues.
                  </p>
                </div>
              </div>

              <div className=" bg-cardwhite shadow-xl shadow-stone-300 w-70 m-0 p-6 transition duration-300 ease-in-out hover:scale-110">
                <div className="">
                  <Image
                    src={culture}
                    alt="Sungamax About"
                    className="m-auto"
                    priority
                    width={100}
                    height={80}
                  />
                </div>

                <div className="flex flex-col text-center">
                  <h2 className="font-Crim font-bold  text-lightPurple text-xl pt-3">
                    Culture
                  </h2>
                  <p className=" font-Quat p-2">
                    We all contribute to making this a great place to work.
                  </p>
                </div>
              </div>

              <div className=" bg-cardwhite shadow-xl shadow-stone-300 w-70 m-0 p-6 transition duration-300 ease-in-out hover:scale-110 ">
                <div className="">
                  <Image
                    src={character}
                    alt="Sungamax About"
                    className="m-auto"
                    priority
                    width={100}
                    height={80}
                  />
                </div>

                <div className="flex flex-col text-center">
                  <h2 className="font-Crim font-bold text-lightPurple text-xl pt-3">
                    Character
                  </h2>
                  <p className=" font-Quat p-2">
                    We are accountable for our actions and decisions and for
                    making things happen.
                  </p>
                </div>
              </div>

              <div className=" bg-cardwhite shadow-xl shadow-stone-300 w-70 m-0 p-6 transition duration-300 ease-in-out hover:scale-110 ">
                <div className="">
                  <Image
                    src={creativity}
                    alt="Sungamax About"
                    className="m-auto"
                    priority
                    width={100}
                    height={80}
                  />
                </div>

                <div className="flex flex-col text-center">
                  <h2 className="font-Crim font-bold  text-lightPurple text-xl pt-3">
                    Creativity
                  </h2>
                  <p className=" font-Quat p-2">
                    We are constantly looking for ways to innovate and improve
                    things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default about;
