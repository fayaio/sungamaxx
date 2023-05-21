import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ImpactSliders from '@/components/ImpactSliders';
import Link from 'next/link';

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
        <div className=" flex items-center  justify-center w-full  h-[85vh] relative   ">
          <div
            className=" absolute inset-0 w-full h-full bg-cover bg-no-repeat object-cover"
            style={{
              backgroundImage: `url('/images/svgs/impactimg.svg')`,
            }}
          ></div>

          <div className="w-[50%] absolute  h-fit bg-black/50  sm:w-[80%]  ">
            <div className="text-center p-14  xms:p-10 ">
              <h2 className="text-white font-bold font-Crim text-5xl pb-4 xms:text-2xl">
                Impact
              </h2>
              <p className=" text-white/80  font-Quat text-lg w-[95%] font-thin xms:text-lg">
                Unveiling Environmental, Socioeconomic, Economic, and Cultural
                Influences
              </p>
            </div>
          </div>
        </div>

        {/* Socioeconomic impact */}
        <section
          id="socioeconomic-impact"
          className=" flex items-center justify-center h-[80vh]  bg-fixed bg-center bg-cover  bg-light/40  "
        >
          <div className="w-[95%] flex  h-[90%]  bg-gradient-to-r from-gray-50 to-violet-50 ... shadow-md shadow-purple-100  m-auto">
            <div className="text-center items-center justify-center p-10 m-auto  xms:p-8 xxs:p-2">
              <h2 className="text-logo font-bold font-Crim text-3xl pb-4 mrd:text-2xl xxs:text-xl xxs:pb-1">
                Socioeconomic Impact
              </h2>
              <p className=" text-black font-Crim text-xl w-[95%] font-medium mrd:text-base">
                SUNGAMAX has to adopt practical solutions that are tailored to
                the needs and barriers existing in the region. Providing
                financial and community support for our partners and
                communities.
              </p>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section
          id="environmental-impact"
          className="flex items-center justify-center h-[80vh] relative   "
        >
          <div
            className=" absolute inset-0 w-full h-full bg-cover bg-scroll bg-no-repeat object-cover"
            style={{
              backgroundImage: `url('/images/svgs/envsection.svg')`,
            }}
          ></div>

          <div className="w-[95%]  absolute p-11 m-auto h-fit bg-white/75">
            <div className="text-center p-10 m-auto  xms:p-8 xxs:p-2">
              <h2 className="text-logo font-bold font-Crim text-3xl pb-4 mrd:text-2xl xxs:text-xl xxs:pb-1">
                Environmental Impact
              </h2>
              <p className=" text-black font-Crim text-xl w-[95%] font-medium mrd:text-base">
                Protecting the environment for future generations is our
                responsibility. We want to protect the environment to ensure
                economic and social stability within our communities for
                generations to come.
              </p>
            </div>
          </div>
        </section>

        {/*Human Capital Development*/}
        <section
          id="human-capital-development"
          className=" flex items-center justify-center h-[80vh]  bg-fixed bg-center bg-cover  bg-light/40 "
        >
          <div className="w-[95%] flex h-[90%] bg-gradient-to-r from-gray-50 to-violet-50 ... shadow-md shadow-purple-100 p-10 m-auto">
            <div className="text-center items-center justify-center  p-11 m-auto  xms:p-8 xxs:p-2">
              <h2 className="text-logo font-bold font-Crim text-3xl pb-4 mrd:text-2xl xxs:text-xl xxs:pb-1">
                Human Capital Development
              </h2>
              <p className=" text-black font-Crim text-xl w-[95%] font-medium mrd:text-base">
                We value all our employees and are invested in helping them to
                grow, improve and develop. We recognise that this is vital to
                the growth and productivity of SUNGAMAX
              </p>
            </div>
          </div>
        </section>

        {/* Diversity and Inclusion*/}
        <section
          id="diversity&inclusion"
          className=" flex items-center justify-center  h-[80vh] relative "
        >
          <div
            className=" absolute inset-0 w-full h-full bg-cover bg-no-repeat object-cover"
            style={{
              backgroundImage: `url('/images/svgs/diversitysection.svg')`,
            }}
          ></div>
          <div className="w-[95%]  absolute h-fit bg-white/75 p-11 m-auto">
            <div className="text-center p-10 m-auto  xms:p-8 xxs:p-2">
              <h2 className="text-logo font-bold font-Crim text-3xl pb-4 mrd:text-2xl xxs:text-xl xxs:pb-1">
                Diversity and Inclusion
              </h2>
              <p className=" text-black font-Crim text-xl w-[95%] font-medium mrd:text-base">
                SUNGAMAX BUSINESSES are committed to empowering diverse voices
                in our organisation and ensuring that our employees feel safe,
                respected and included.
              </p>
            </div>
          </div>
        </section>

        {/* Economic Empowerment*/}
        <section
          id="economic-empowerment"
          className=" flex items-center justify-center h-[80vh]  bg-fixed bg-center bg-cover  bg-light/40 "
        >
          <div className="w-[95%] flex h-[100%] bg-gradient-to-r from-gray-50 to-violet-50 ... shadow-md shadow-purple-100 p-11 m-auto">
            <div className="text-center items-center justify-center  p-10 m-auto  xms:p-8 xxs:p-2">
              <h2 className="text-logo font-bold font-Crim text-3xl pb-4 mrd:text-2xl xxs:text-xl xxs:pb-1">
                Economic Empowerment
              </h2>
              <p className=" text-black font-Crim text-xl w-[95%] font-medium mrd:text-base">
                From bringing traditional offline businesses online to providing
                our partners with more income opportunities, SUNGAMAX is
                constantly seeking ways to make a positive impact on our
                communities.
              </p>
            </div>
          </div>
        </section>

        {/* People And Culture */}
        <section
          id="people&culture"
          className=" flex items-center justify-center  h-[80vh]  relative"
        >
          <div
            className=" absolute inset-0 w-full h-full bg-cover bg-no-repeat object-cover"
            style={{
              backgroundImage: `url('/images/svgs/pplnculsection.svg')`,
            }}
          ></div>
          <div className="w-[95%] absolute  h-fit bg-white/75 p-11 m-auto">
            <div className="text-center p-10 m-auto  xms:p-8 xxs:p-2">
              <h2 className="text-logo font-bold font-Crim text-3xl pb-4 mrd:text-2xl xxs:text-xl xxs:pb-1">
                People And Culture
              </h2>
              <p className=" text-black font-Crim text-xl w-[95%] font-medium mrd:text-base">
                At SUNGAMAX, we recognise that people are at the core of our
                ability to achieve our mission.
              </p>
            </div>
          </div>
        </section>

        <div className="p-16 h-30 w-full"></div>
      </main>
    </>
  );
};

export default impacts;
