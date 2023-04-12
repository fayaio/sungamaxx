import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import sungamaxLogo from '../../public/images/logos/sungamaxlogo.png';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sungamax</title>
        <meta
          name="description"
          content="Elevate The Spiritual And Financial Well-Being Of Humanity"
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

      <main className=" items-center m-auto text-dark w-[92%]  ">
        <Layout className="!flex !p-0 items-center justify-center !h-fit">
          <div className="flex items-center justify-between   lg:!flex-col ">
            <div className="w-[40%] p-10  lg:w-[60%] sm:w-[90%]">
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
            <div className="w-[60%] flex flex-col items-center self-center lg:w-[95%]  lg:!text-center  sm:w-[90%]">
              <h1
                className="w-full text-darkPurple font-extrabold !text-6xl !text-left xl:!text-5xl 
                lg:!text-center sm:!text-3xl "
              >
                Elevate Your Spiritual And Financial Well-Being
              </h1>
              <p className="mt-7 text-[23px] text-darkGrey font-mont font-semi-bold lg:my-8">
                From Business Services To Trade & Investment Opportunties. We
                Are Your Reliable Partner In Developing Businessess And People
              </p>

              <h1
                className="w-full text-primary font-sans !pt-10  xl:mt-3 font-bold capialize !text-4xl !text-left xl:!text-[28px] 
                lg:!text-center sm:!text-2xl "
              >
                Business Divisions
              </h1>
              <div className="my-4 text-lg text-darkGrey font-medium lg:my-8 flex gap-14 self-start xl:justify-center xl:self-center xl:gap-2 sm:flex-col">
                <ul className="">
                  <li className="mb-5 flex  hover:animate-bounce">
                    <span className=" text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>

                    <Link
                      href="/contact"
                      // target={'_blank'}
                      className="pl-2 hover:animate-pulse"
                    >
                      Sungamax Consultancy
                    </Link>
                  </li>
                  <li className="mb-5 flex hover:animate-bounce">
                    <span className=" text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>

                    <Link
                      href="/contact"
                      // target={'_blank'}
                      className="pl-2 hover:animate-pulse"
                    >
                      Sungamax Shoe Villa
                    </Link>
                  </li>
                  <li className="mb-5 flex  hover:animate-bounce">
                    <span className=" text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>

                    <Link
                      href="/contact"
                      // target={'_blank'}
                      className="pl-2 hover:animate-pulse"
                    >
                      Sungamax Transportation and Logistics
                    </Link>
                  </li>
                </ul>

                <ul className="px-2">
                  <li className="mb-5 flex hover:animate-bounce">
                    <span className=" text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>

                    <Link
                      href="/contact"
                      // target={'_blank'}
                      className="pl-2 hover:animate-pulse"
                    >
                      Sungamax KK Market{' '}
                      <span className="xl:flex">(SKK Market)</span>
                    </Link>
                  </li>
                  <li className="mb-5 flex hover:animate-bounce">
                    <span className=" text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>

                    <Link
                      href="/contact"
                      // target={'_blank'}
                      className="pl-2 hover:animate-pulse"
                    >
                      Sungamax BioNata{' '}
                      <span className="xl:flex ">(SkinCare Solutions)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
