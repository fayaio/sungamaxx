import React from 'react';
import Head from 'next/head';
import ImpactSliders from '@/components/ImpactSliders';
import Link from 'next/link';

const impacts = () => {
  return (
    <>
      <Head>
        <title>Sungamax | Impact</title>
        <meta
          name="description"
          content="Who We Are -To be the leading force for building and developing sustainable and impactful businesses"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
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
          className=" flex items-center justify-center h-[60vh]  bg-fixed bg-center bg-cover  bg-light/40  "
        >
          <div className="w-[95%]  h-fit bg-gradient-to-r from-gray-50 to-violet-50 ... shadow-md shadow-purple-100 p-10 m-auto">
            <div className="text-center p-10 m-auto  xms:p-8 xxs:p-2">
              <h2 className="text-logo font-bold font-Crim text-3xl pb-4 mrd:text-2xl xxs:text-xl xxs:pb-1">
                Socioeconomic Impact
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

        {/* Environmental Impact */}
        <section
          id="environmental-impact"
          className=" envsec-img flex items-center justify-center h-[60vh]  bg-fixed bg-center bg-cover  "
        >
          <div className="w-[95%]  p-10 m-auto h-fit bg-white/75">
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
          className=" flex items-center justify-center h-[60vh]  bg-fixed bg-center bg-cover  bg-light/40 "
        >
          <div className="w-[95%]  h-fit bg-gradient-to-r from-gray-50 to-violet-50 ... shadow-md shadow-purple-100 p-10 m-auto">
            <div className="text-center p-10 m-auto  xms:p-8 xxs:p-2">
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
          className=" flex items-center justify-center  h-[60vh]  bg-fixed bg-center bg-cover  diversec-img  "
        >
          <div className="w-[95%]  h-fit bg-white/75 p-10 m-auto">
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
          className=" flex items-center justify-center h-[60vh]  mb-12 bg-fixed bg-center bg-cover  bg-light/40 "
        >
          <div className="w-[95%]  h-fit bg-gradient-to-r from-gray-50 to-violet-50 ... shadow-md shadow-purple-100 p-10 m-auto">
            <div className="text-center p-10 m-auto  xms:p-8 xxs:p-2">
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
          className="pplsec-img  flex items-center justify-center  h-[60vh]  bg-fixed bg-center bg-cover "
        >
          <div className="w-[95%]  h-fit bg-white/75 p-10 m-auto">
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
