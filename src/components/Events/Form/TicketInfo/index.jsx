import Button from "@/components/shared/Button";
import Image from "next/image";
import { IoIosArrowBack } from "@/assets/Icons";
import Info from "./Info";

const TicketInfo = () => {
  return (
    <div className="max-w-[612px] h-max mt-10 flex justify-center items-center bg-black/40 backdrop-blur-md  rounded-2xl mx-auto  relative px-5 md:px-11 py-10 md:py-14 lg:py-24  z-50  ">
      <div
        action=""
        className="p-4 md:p-8  rounded-xl h-max border-white/10 border "
      >
        <div className="w-52 md:w-[300px] mx-auto bg-dark3 p-5 rounded-2xl">
          <Image
            layout="responsive"
            src="/assets/qrcode-color.png"
            width={300}
            height={300}
            alt="get token success"
          />
        </div>
        {/* Information container */}
        <div className="mt-5 flex flex-col gap-4 bg-dark3 rounded-2xl  p-5 shadow-sm">
          <Info heading={"Event"} title={"National Music Festival"} />
          <Info
            heading={"Date and Hour"}
            title={"Monday, Dec 24 • 18.00 - 23.00 PM"}
          />
          <Info
            heading={"Event Location"}
            title={"Grand Park, New York City, US"}
          />
          <Info heading={"Event Organizer"} title={"World of Music"} />
        </div>
      </div>
    </div>
  );
};
export default TicketInfo;
