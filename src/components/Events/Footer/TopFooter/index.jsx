import { infoMenu, siteMenu } from "@/constant/footer.constant";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import Contact from "./Contact";

const TopFooter = () => {
  return (
    <div className="pt-14 pb-5 lg:pb-8 xl:pb-20 max-w-[1280px]   mx-5 xl:mx-auto  flex flex-col  lg:flex-row  items-start gap-12">
      <div className="w-full xl:w-5/12 ">
        <div className="w-20  mx-auto md:mx-0">
          <Image
            src="/assets/footer-logo.png"
            width={80}
            height={80}
            layout="responsive"
            alt="Footer logo"
          />
        </div>
        <p className="mt-12 text-gray-100 text-base font-normal ">
          Faucibus ornare suspendisse sed nisigittis volutpat odio facilisis
          mauris amet massa velit scelerisque.
        </p>
        <form
          action=""
          className="mt-10
        "
        >
          <h1 className="font-bold text-base text-white">
            Join our newsletter
          </h1>
          <div className="flex flex-col w-full  md:flex-row mt-3 gap-2">
            <input
              type="email"
              name="email"
              className="p-3 md:p-5 rounded-lg w-full bg-transparent border border-[#303030] placeholder:text-gray-100"
              placeholder="Email address"
            />
            <button
              type="submit"
              className="bg-indigo text-white py-3
             px-16 rounded-lg"
            >
              JOIN
            </button>
          </div>
        </form>
      </div>
      <div className="w-full xl:w-7/12 xl:h-[261.22px]  flex flex-wrap lg:flex-nowrap flex-row items-start gap-12">
        <Menu heading={"Site Menu"} menus={siteMenu} />
        <Menu heading={"Information"} menus={infoMenu} />
        <Contact />
      </div>
    </div>
  );
};
export default TopFooter;
