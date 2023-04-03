import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import sungamaxLogo from '../../public/images/logos/sungamaxlogo.png';
import { LinkArrow } from '@/components/Icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sungamax</title>
        <meta
          name="description"
          content="To Elevate The Spiritual And Financial Well-Being Of Humanity"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b84195" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="flex items-center m-auto text-dark w-[80%]  ">
        <Layout className="!flex !p-0 items-center justify-center !h-fit">
          <div className="flex items-center justify-between   lg:!flex-col ">
            <div className="w-[50%] p-10  lg:w-[60%] sm:w-[90%]">
              <Image
                src={sungamaxLogo}
                alt="Sungamax Logo"
                className="w-full h-auto "
                priority
                //   sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
              />
            </div>
            <div className="w-[50%] flex flex-col items-center self-center lg:w-[80%] lg:!text-center  sm:w-[90%]">
              <h1
                className="w-full text-darkPurple font-bold capitalize !text-5xl !text-left xl:!text-4xl 
                lg:!text-center sm:!text-3xl "
              >
                To elevate the spiritual and financial well-being of humanity
              </h1>
              <p className="my-4 text-base text-pcolor font-medium lg:my-8">
                We aim to provide high-impact easy business consultation, trade
                and investment that contribute to the creation of wealth,
                building the nation & assuring global well-being
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center xxs:flex-col  lg:pb-10">
                <Link
                  href="/"
                  className="flex items-center bg-lightPurple text-light p-2.5  rounded-lg text-lg font-semibold
                   hover:bg-light hover:text-darkGrey border-2 border-solid border-transparent hover:border-lightPurple
                   mr-3"
                >
                  Who We Are
                </Link>
                <Link
                  href="/contact"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-pcolor underline xxs:pt-5 xxs:!ml-0 "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
