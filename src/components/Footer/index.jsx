import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[url('/assets/footer-background.png')] py-14 px-5 ">
      <div className="max-w-[1280px] mx-auto ">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
          <div className="w-20 md:w-32">
            <Image
              height={80}
              width={80}
              src="/assets/footer-logo.png"
              alt=""
              className=""
            />
          </div>
          <div className="w-full   flex flex-col md:items-center">
            <div className="">
              <h3 className="text-base font-bold">Site Menu</h3>
              <Link href="/" className="text-gray-100 font-normal text-base">
                Home
              </Link>
            </div>
          </div>
          <div className="w-full   flex md:justify-end ">
            <div className="">
              <h3 className="text-base font-bold">Social</h3>
              <Image
                src="/assets/instagram-icon.svg"
                width={30}
                height={30}
                alt="Instagram logo"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center flex-row gap-1 items-center text-gray-100 font-normal text-base mt-10">
            <Link href="/">Terms & Conditions |</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
