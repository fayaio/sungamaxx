import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Impacts from '@/components/Impacts';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Sungamax | About Us </title>
        <meta
          name="description"
          content="Who We Are -To be the leading force for building and developing sustainable and impactful businesses"
        />
      </Head>
      <main className="  w-full flex-col items-center justify-center ">
        <Layout className="pt-10   mrd:!p-9 !flex flex-col self-center justify-center items-center  ">
          <h1
            className=" w-full flex justify-center self-center text-darkPurple font-bold capitalize !text-6xl text-center mb-16
          lg:!text-5xl  md:!text-4xl
          "
          >
            We Have The Edge
          </h1>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-lightPurple/75">
                Who We Are
              </h2>
              <p className="text-darkGrey">
                To be the leading force for building and developing sustainable
                and impactful businesses.
              </p>

              <h2 className="mb-4 text-lg font-bold uppercase text-lightPurple/75 my-6">
                Vision
              </h2>
              <p className="text-darkGrey">
                To be the leading hub in providing high-quality consultation,
                trade and investment with efficient service delivery.
              </p>

              <h2 className="mb-4 text-lg font-bold uppercase text-lightPurple/75 my-6">
                Mission
              </h2>
              <p className="text-darkGrey">
                To provide high-impact easy business consultation, trade and
                investment that contribute to the creation of wealth, building
                the nation & assuring global well-being.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4
            md:order-1 md:col-span-8  md:mx-[40px] 
            "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-darkGrey" />
              <Image
                src={lightBulb}
                alt="Sungamax"
                className="w-full h-[40vh]  "
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center text-logo xl:items-center">
                <span className="inline-block text-7xl  font-bold  mrd:text-6xl sm:text-4xl">
                  <AnimatedNumbers value={50} /> +
                </span>
                <h2 className="text-xl font-medium capitalize text-pcolor xl:text-center mrd:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center text-logo xl:items-center">
                <span className="inline-block text-7xl font-bold  mrd:text-6xl sm:text-4xl">
                  <AnimatedNumbers value={5} /> +
                </span>
                <h2 className="text-xl font-medium capitalize text-pcolor xl:text-center mrd:text-lg sm:text-base xs:text-sm">
                  aimed impacts
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center text-logo xl:items-center">
                <span className="inline-block text-7xl font-bold  mrd:text-6xl sm:text-4xl">
                  <AnimatedNumbers value={3} /> +
                </span>
                <h2 className="text-xl font-medium capitalize text-pcolor xl:text-center mrd:text-lg sm:text-base xs:text-sm">
                  sungamax businesses
                </h2>
              </div>
            </div>
          </div>

          <Impacts />
        </Layout>
      </main>
    </>
  );
};

export default about;
