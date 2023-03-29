import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import sungamaxLogo from '../../public/images/logos/sungamaxlogo.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sungamax</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-logo w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={sungamaxLogo}
                alt="Sungamax Logo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
