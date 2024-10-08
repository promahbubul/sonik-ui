import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoMdTrendingUp } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";

const Discover = () => {
  return (
    <div className="">
      <div className="max-w-[1280px]  mx-auto px-5 ">
        <div className="max-w-[1100px] mx-auto  flex-col flex md:flex-row items-center justify-between gap-10 py-12  px-6 md:px-8 lg:px-16 bg-black/50  ">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="">
              <Image
                src="/assets/logo.png"
                width={200}
                height={200}
                layout="responsive"
                alt="logo"
              />
            </div>
            <div className="">
              <h1 className="text-3xl md:text-4xl lg:text-[40px]  font-semibold text-white">
                Discover more with the app
              </h1>
              <div className="text-white/65 mt-5 md:mt-0 font-normal text-sm lg:text-base">
                <div className="flex flex-row items-center gap-5">
                  <CiSearch />
                  <p className="">Find events in your city</p>
                </div>
                <div className="flex flex-row items-center gap-5 mt-2 md:mt-0">
                  <IoMdTrendingUp />
                  <p className="">Stay up to date, save and share events</p>
                </div>
                <div className="flex flex-row items-center gap-5 mt-2 md:mt-0">
                  <IoTicketOutline />
                  <p className="">Purchase, send and access all in one place</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              layout="responsive"
              src="/assets/qrcode.png"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discover;
