import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
export default async function Home() {
  return (
    <MaxWidthWrapper className='mb-50 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
    <section className="w-full flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
      Smart {" "}
      <span className="text-blue-600">
        Doc 
        </span> {" "}
        Analyzer
      </h1>
      <span className="block mt-2 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
      Transforming Documents into Insights
      </span>
      <p className="mt-5 max-w-4xl  text-gray-700 sm:text-lg">
      A cutting-edge AI-powered website capable of scanning any document with precision and extracting relevant data. Seamlessly transforming raw information into visually engaging data graphs, it offers users valuable insights and facilitates data-driven decision-making processes. With its advanced technology, the platform streamlines document analysis, providing an efficient and intuitive solution for harnessing the power of data      {/* <Feed /> */}
   </p>
   <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href='/dashboard'
          target='_blank'>
          Get started{' '}
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
    </div>
  </section>
  </MaxWidthWrapper>
  );
}
