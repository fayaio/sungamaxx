import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView({ ref });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      console.log(latest);
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
          content="Who We Are
To be the leading force for building and developing sustainable and impactful businesses"
        />
      </Head>
      <main className="flex  w-full flex-col items-center justify-center ">
        <Layout className="pt-12">
          <AnimatedText text="Dedication to Excellence !" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
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

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-darkGrey" />
              <Image src={lightBulb} alt="Sungamax" className="w-full h-auto" />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center text-logo">
                <span className="inline-block text-7xl font-bold">3+</span>
                <h2 className="text-xl font-medium capitalize text-pcolor">
                  sungamax businesses
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center text-logo">
                <span className="inline-block text-7xl font-bold">5+</span>
                <h2 className="text-xl font-medium capitalize text-pcolor">
                  aimed impacts
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center text-logo">
                <span className="inline-block text-7xl  font-bold ">50+</span>
                <h2 className="text-xl font-medium capitalize text-pcolor">
                  satisfied clients
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
