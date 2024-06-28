import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default async function Home() {
  return (
    <MaxWidthWrapper className='mb-50 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
      <section >
        <div className="text-center">
          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl animate-fade-in delay-1000">
            Smart {" "}
            <span className="text-blue-600">
              Doc 
            </span> {" "}
            Analyzer
          </h1>
          <span className="block mt-2 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 animate-fade-in delay-1200">
            IT'S NOT READING ANYMORE IT'S A CONVERSATION
          </span>
          <p className="mt-5 max-w-4xl  text-white sm:text-lg animate-fade-in delay-1500">
            A cutting-edge AI-powered website capable of scanning any document with precision and extracting relevant data. Seamlessly transforming raw information into visually engaging data graphs, it offers users valuable insights and facilitates data-driven decision-making processes. With its advanced technology, the platform streamlines document analysis, providing an efficient and intuitive solution for harnessing the power of data      {/* <Feed /> */}
          </p>
          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'mt-5 animate-fade-in delay-1800',
            })}
            href='/dashboard'
            target='_blank'>
            Get started{' '}
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
          <Image src="/assets/images/swifdoo-pdf-home-banner.png" width={400} height={250} layout="responsive" className="animate-bounce delay-2000" />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}