import Image from "next/image";
import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";

const Header = () => {
  return (
    <section classNam="relative ">
      <div
        className="absolute flex flex-col md:hidden  px-5
       justify-between  inset-0  h-[350px] pb-4"
      >
        <div
          className=" text-center mx-auto flex justify-center mt-8
        "
        >
          <Image
            src="/assets/footer-logo.png"
            height={150}
            width={150}
            alt="footer logo"

            //   layout="responsive"
          />
        </div>
        <div className=" ">
          <Link
            href="#"
            className="text-3xl font-bold font-phudu flex flex-row gap-1  items-center"
          >
            Download Sonik
            <GoArrowDownRight />
          </Link>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="h-[370px] lg:h-[860px] w-full  object-cover"
      >
        <source src="/assets/header.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};
export default Header;
