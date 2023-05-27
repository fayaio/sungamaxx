import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ImpactSliders from '@/components/ImpactSliders';
import Link from 'next/link';
import contdetailsimg from '../../public/images/svgs/contdetailsimg.svg';

import impactimg from '../../public/images/svgs/impactimg.svg';

import envsection from '../../public/images/svgs/envsection.svg';
import socioecon from '../../public/images/svgs/socioecon.svg';
import pplnculsection from '../../public/images/svgs/pplnculsection.svg';
import hcd from '../../public/images/svgs/hcd.svg';
import divninclu from '../../public/images/svgs/divninclu.svg';
import econe from '../../public/images/svgs/econe.svg';
import impbanner from '../../public/images/svgs/impbanner.svg';

const impacts = () => {
  return (
    <>
      <Head>
        <title>Sungamax | Impact</title>
        <meta
          name="description"
          content="Unveiling Environmental, Socioeconomic, Economic, and Cultural Influences"
        />
      </Head>

      <main className="bg-white ">
        {/* Banner */}
        <div className=" bg-white self-center  w-full  h-[89vh] xms:h-[70vh]  xxs:h-[60vh]   mt-3 pb-8 ">
          <h6 className=" font-Crim w-[100%] text-center  uppercase text-[46px] text-logo font-black lg:text-[40px] mrd:text-4xl  xms:text-2xl ">
            Impact
          </h6>
          <p className=" text-btncolor/80 text-center w-[65%] pt-5 pb-3   xms:pb-5 xms:pt-3    sm:w-[82%] xms:w-[89%] m-auto font-Quat font-light  text-xl   xms:text-sm">
            Unveiling Environmental, socioeconomic, Economic empowerment,
            Culture & Diversity and Human Capital Development.
          </p>
          <div className=" w-[100%] h-[100%] m-auto pb-12 xms:pb-0  ">
            <Image
              src={impbanner}
              alt="Sungamax Environmental Impact"
              className="w-[90%] h-[80%]  m-auto    xms:h-fit "
              width={100}
              height={100}
              priority
            />
          </div>
        </div>

        <div className="bg-light pt-10">
          {/* Environmental Impact */}
          <section
            id="environmental-impact"
            className=" w-[90%] m-auto mt-10  mrdt:w-[95%] p-6  bg-white border border-l-4   transition duration-1000 ease-in-out hover:scale-105 hover:border-l-logo "
          >
            <div className="flex items-left justify-between   m-auto sm:flex-col sm:m-0">
              <div className=" w-[50%] flex flex-col items-left  self-center  lg:w-[50%] sm:order-2 sm:items-center sm:self-center sm:w-[100%] sm:text-center">
                <h2 className=" text-logo font-extrabold  font-Crim text-3xl mb-5  sm:mt-5 mrd:text-2xl xxs:text-xl xxs:pb-1">
                  Environmental Impact
                </h2>
                <div className=" bg-btncolor w-[100%] h-[0.4px] shadow-stone-100 mb-5"></div>
                <p className=" text-btncolor/90   w-[100%] font-Quat font-light  text-lg   mrd:text-base">
                  Protecting the environment for future generations is our
                  responsibility. We want to protect the environment to ensure
                  economic and social stability within our communities for
                  generations to come.
                </p>
                <div
                  className="flex items-center font-Crim text-logo/90 u italic  text-base   font-light
                 hover:text-darkGrey 
                   mt-5 "
                >
                  <Link href="#socioeconomic-impact" className="mr-2">
                    View More...
                  </Link>
                </div>
              </div>

              <div className="  w-[40%]   lg:w-[35%] sm:order-1 sm:w-[100%]  ">
                <Image
                  src={envsection}
                  alt="Sungamax Environmental Impact"
                  className="w-full  "
                  priority

                  //   sizes="(max-width: 768px) 100vw,
                  // (max-width: 1200px) 50vw,
                  // 33vw"
                />
              </div>
            </div>
          </section>

          {/* Socioeconomic impact */}
          <section
            id="socioeconomic-impact"
            className=" w-[90%] m-auto mt-10  mrdt:w-[95%] p-6  bg-light border border-r-4   transition duration-1000 ease-in-out hover:scale-105 hover:border-r-logo "
          >
            <div className="flex items-left justify-between   m-auto sm:flex-col sm:m-0">
              <div className=" w-[50%] flex flex-col items-left  self-center  lg:w-[50%] order-2 sm:items-center sm:self-center sm:w-[100%] sm:text-center">
                <h2 className=" text-logo font-extrabold  font-Crim text-3xl mb-5  sm:mt-5 mrd:text-2xl xxs:text-xl xxs:pb-1">
                  Socioeconomic Impact
                </h2>
                <div className=" bg-btncolor w-[100%] h-[0.4px] shadow-stone-100 mb-5"></div>
                <p className=" text-btncolor/90   w-[100%] font-Quat font-light  text-lg   mrd:text-base">
                  SUNGAMAX has to adopt practical solutions that are tailored to
                  the needs and barriers existing in the region. Providing
                  financial and community support for our partners and
                  communities.
                </p>
                <div
                  className="flex items-center font-Crim text-logo/90 u italic  text-base   font-light
                 hover:text-darkGrey 
                   mt-5 "
                >
                  <Link href="#people&culture" className="mr-2">
                    View More...
                  </Link>
                </div>
              </div>

              <div className="  w-[40%]   lg:w-[35%] order-1 sm:w-[100%]  ">
                <Image
                  src={socioecon}
                  alt="Sungamax Environmental Impact"
                  className="w-full  "
                  priority

                  //   sizes="(max-width: 768px) 100vw,
                  // (max-width: 1200px) 50vw,
                  // 33vw"
                />
              </div>
            </div>
          </section>

          {/* People And Culture */}
          <section
            id="people&culture"
            className=" w-[90%] m-auto mt-10  mrdt:w-[95%] p-6  bg-white border border-l-4   transition duration-1000 ease-in-out hover:scale-105 hover:border-l-logo "
          >
            <div className="flex items-left justify-between   m-auto sm:flex-col sm:m-0">
              <div className=" w-[50%] flex flex-col items-left  self-center  lg:w-[50%] sm:order-2 sm:items-center sm:self-center sm:w-[100%] sm:text-center">
                <h2 className=" text-logo font-extrabold  font-Crim text-3xl mb-5  sm:mt-5 mrd:text-2xl xxs:text-xl xxs:pb-1">
                  People And Culture
                </h2>
                <div className=" bg-btncolor w-[100%] h-[0.4px] shadow-stone-100 mb-5"></div>
                <p className=" text-btncolor/90   w-[100%] font-Quat font-light  text-lg   mrd:text-base">
                  At SUNGAMAX, we recognise that people are at the core of our
                  ability to achieve our mission.
                </p>
                <div
                  className="flex items-center font-Crim text-logo/90 u italic  text-base   font-light
                 hover:text-darkGrey 
                   mt-5 "
                >
                  <Link href="#human-capital-development" className="mr-2">
                    View More...
                  </Link>
                </div>
              </div>

              <div className="  w-[40%]   lg:w-[35%] sm:order-1 sm:w-[100%]  ">
                <Image
                  src={pplnculsection}
                  alt="Sungamax Environmental Impact"
                  className="w-full  "
                  priority

                  //   sizes="(max-width: 768px) 100vw,
                  // (max-width: 1200px) 50vw,
                  // 33vw"
                />
              </div>
            </div>
          </section>

          {/*Human Capital Development*/}
          <section
            id="human-capital-development"
            className=" w-[90%] m-auto mt-10  mrdt:w-[95%] p-6  bg-light border border-r-4   transition duration-1000 ease-in-out hover:scale-105 hover:border-r-logo "
          >
            <div className="flex items-left justify-between   m-auto sm:flex-col sm:m-0">
              <div className=" w-[50%] flex flex-col items-left  self-center  lg:w-[50%] order-2 sm:items-center sm:self-center sm:w-[100%] sm:text-center">
                <h2 className=" text-logo font-extrabold  font-Crim text-3xl mb-5  sm:mt-5 mrd:text-2xl xxs:text-xl xxs:pb-1">
                  Human Capital Development
                </h2>
                <div className=" bg-btncolor w-[100%] h-[0.4px] shadow-stone-100 mb-5"></div>
                <p className=" text-btncolor/90   w-[100%] font-Quat font-light  text-lg   mrd:text-base">
                  We value all our employees and are invested in helping them to
                  grow, improve and develop. We recognise that this is vital to
                  the growth and productivity of SUNGAMAX.
                </p>
                <div
                  className="flex items-center font-Crim text-logo/90 u italic  text-base   font-light
                 hover:text-darkGrey 
                   mt-5 "
                >
                  <Link href="#diversity&inclusion" className="mr-2">
                    View More...
                  </Link>
                </div>
              </div>

              <div className="  w-[40%]   lg:w-[35%] order-1 sm:w-[100%]  ">
                <Image
                  src={hcd}
                  alt="Sungamax Environmental Impact"
                  className="w-full  "
                  priority

                  //   sizes="(max-width: 768px) 100vw,
                  // (max-width: 1200px) 50vw,
                  // 33vw"
                />
              </div>
            </div>
          </section>

          {/* Diversity and Inclusion*/}
          <section
            id="diversity&inclusion"
            className=" w-[90%] m-auto mt-10  mrdt:w-[95%] p-6  bg-white border border-l-4   transition duration-1000 ease-in-out hover:scale-105 hover:border-l-logo "
          >
            <div className="flex items-left justify-between   m-auto sm:flex-col sm:m-0">
              <div className=" w-[50%] flex flex-col items-left  self-center  lg:w-[50%] sm:order-2 sm:items-center sm:self-center sm:w-[100%] sm:text-center">
                <h2 className=" text-logo font-extrabold  font-Crim text-3xl mb-5  sm:mt-5 mrd:text-2xl xxs:text-xl xxs:pb-1">
                  Diversity and Inclusion
                </h2>
                <div className=" bg-btncolor w-[100%] h-[0.4px] shadow-stone-100 mb-5"></div>
                <p className=" text-btncolor/90   w-[100%] font-Quat font-light  text-lg   mrd:text-base">
                  SUNGAMAX BUSINESSES are committed to empowering diverse voices
                  in our organisation and ensuring that our employees feel safe,
                  respected and included.
                </p>
                <div
                  className="flex items-center font-Crim text-logo/90 u italic  text-base   font-light
                 hover:text-darkGrey 
                   mt-5 "
                >
                  <Link href="#economic-empowerment" className="mr-2">
                    View More...
                  </Link>
                </div>
              </div>

              <div className="  w-[40%]   lg:w-[35%] sm:order-1 sm:w-[100%]  ">
                <Image
                  src={divninclu}
                  alt="Sungamax Environmental Impact"
                  className="w-full  "
                  priority

                  //   sizes="(max-width: 768px) 100vw,
                  // (max-width: 1200px) 50vw,
                  // 33vw"
                />
              </div>
            </div>
          </section>

          {/* Economic Empowerment*/}
          <section
            id="economic-empowerment"
            className=" w-[90%] m-auto mt-10  mrdt:w-[95%] p-6  bg-light border border-r-4   transition duration-1000 ease-in-out hover:scale-105 hover:border-r-logo "
          >
            <div className="flex items-left justify-between   m-auto sm:flex-col sm:m-0">
              <div className=" w-[50%] flex flex-col items-left  self-center  lg:w-[50%] order-2 sm:items-center sm:self-center sm:w-[100%] sm:text-center">
                <h2 className=" text-logo font-extrabold  font-Crim text-3xl mb-5  sm:mt-5 mrd:text-2xl xxs:text-xl xxs:pb-1">
                  Economic Empowerment
                </h2>
                <div className=" bg-btncolor w-[100%] h-[0.4px] shadow-stone-100 mb-5"></div>
                <p className=" text-btncolor/90   w-[100%] font-Quat font-light  text-lg   mrd:text-base">
                  From bringing traditional offline businesses online to
                  providing our partners with more income opportunities,
                  SUNGAMAX is constantly seeking ways to make a positive impact
                  on our communities.
                </p>
              </div>

              <div className="  w-[40%]   lg:w-[35%] order-1 sm:w-[100%]  ">
                <Image
                  src={econe}
                  alt="Sungamax Environmental Impact"
                  className="w-full  "
                  priority

                  //   sizes="(max-width: 768px) 100vw,
                  // (max-width: 1200px) 50vw,
                  // 33vw"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="w-full h-20 bg-light"></div>
      </main>
    </>
  );
};

export default impacts;
