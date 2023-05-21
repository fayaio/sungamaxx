import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import contdetailsimg from '../../public/images/svgs/contdetailsimg.svg';
import ContactForm from '@/components/ContactForm';

const contact = () => {
  return (
    <>
      <Head>
        <title>Sungamax | Contact</title>
        <meta
          name="description"
          content="We’re a Friendly Bunch So Please Get In Touch!"
        />
      </Head>
      <div className=" flex items-center  justify-center w-full  h-[70vh] relative   ">
        <div
          className=" absolute inset-0 w-full h-full bg-cover bg-no-repeat object-cover"
          style={{
            backgroundImage: `url('/images/svgs/contactimg.svg')`,
          }}
        ></div>

        <div className="w-[50%] absolute  h-fit bg-black/50  sm:w-[80%]  ">
          <div className="text-center p-14  xms:p-10 ">
            <h2 className="text-white font-bold font-Crim text-4xl pb-2 xms:text-2xl">
              Contact Us
            </h2>
            <p className=" text-white/80  font-Quat text-lg w-[95%] font-thin xms:text-lg">
              We’re a Friendly Bunch So Please Get In Touch!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-12 flex  m-auto sm:flex-col sm:p-5">
        <div className=" w-[75%]  sm:w-[100%]">
          <h1 className=" text-logo font-bold font-Crim text-4xl sm:text-3xl">
            Make An Enquiry
          </h1>
          <p className="font-Quat mt-4 font-semibold w-[85%] sm:w-[100%] ">
            If you have got any requirements in mind please CALL US on
            +2348127343468 to talk to one of our training team. Alternatively,
            you can EMAIL US at contact@sungamax.com or complete the form below
            and we`ll get back to you.
          </p>
          <ContactForm />
        </div>

        <div className=" w-[35%] sm:w-[100%]">
          <div className=" bg-cardwhite shadow-xl shadow-stone-200 flex flex-col ">
            <div className="">
              <Image
                src={contdetailsimg}
                alt="Sungamax Contact"
                className="m-auto"
                priority
              />
            </div>

            <div className="flex flex-col text-left p-3">
              <h2 className="font-Crim font-bold  text-logo text-xl pt-3">
                Corporate Office
              </h2>
              <p className=" font-Quat w-[70%] ">
                N0. 3 Oby Okoli Avenue Office No. 308 2nd Floor, World Trade
                Center, Unizik Junction Awka Anambra State, Nigeria
              </p>

              <div className=" flex mt-4 font-Quat font-semibold ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-5 h-5 text-logo font-black mr-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>{' '}
                08127343468, 09126368582
              </div>

              <h2 className="font-Crim font-bold  text-logo text-xl pt-3">
                Malaysia Branch Office
              </h2>
              <p className=" font-Quat w-[70%] ">
                C/o Auto CCS Cultrade Resources 12, Jalan Helang Bukit Kepong
                Baru Tambahan, 52100 Kuala Lumpur Wilayah Persekutuan Kuala
                Lumpur, Malaysia
              </p>

              <div className=" flex mt-4 font-Quat font-semibold ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-5 h-5 text-logo font-black mr-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>{' '}
                +60164649210, +601116351476
              </div>

              <div className=" flex mt-4 font-Quat font-semibold ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-5 h-5 text-logo font-black mr-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                contact@sungamax.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
