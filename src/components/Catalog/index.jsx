import Image from "next/image";
import Discover from "../Discover";
import Link from "next/link";
import { FaAndroid, FaApple } from "react-icons/fa";

const Catelog = () => {
  return (
    <div
      className={"bg-[url('/assets/catelogbg.png')] py-16 md:pt-24 md:pb-28"}
    >
      <section className="py-20 lg:py-24 flex flex-col-reverse lg:flex-row stretch gap-28 lg:gap-20 max-w-[1280px] mx-auto items-stretch justify-center px-5 lg:px-0">
        <div className="w-full  max-w-[1280px] mx-auto">
          <Image
            src="/assets/mobile.png"
            width={569}
            height={900}
            layout="responsive"
          />
        </div>
        <div className="w-full  max-w-[1280px] mx-auto relative">
          <img
            src="/assets/icons/earth.png"
            alt="earth"
            className="w-20 lg:w-40 absolute right-0 -top-14 ld:top-0"
          />
          <div className="my-auto  h-full flex items-start flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-phudu md:max-w-[490px]  font-semibold">
              Your city’s Entertainment all in one place
            </h1>
            <p className="mt-8 text-[22px] font-normal text-white">
              Discover your favorite events with ease
            </p>
            <div className="flex flex-row gap-5 mt-10 lg:mt-32">
              <Link
                href="#"
                className="bg-gray-300 rounded-full py-3 px-7 flex flex-row items-center gap-3"
              >
                <FaApple />
                iOS
              </Link>
              <Link
                href="#"
                className="bg-gray-300 rounded-full py-3 px-7 flex flex-row items-center gap-3"
              >
                <FaAndroid />
                ANDRIOD
              </Link>
            </div>
          </div>
          <img
            src="/assets/icons/music.png"
            alt="earth"
            className="w-24 lg:w-40 absolute left-1/2 -translate-x-1/2 -bottom-24 lg:bottom-0 "
          />
        </div>
      </section>
      <Discover />
    </div>
  );
};
export default Catelog;
