import Button from "@/components/shared/Button";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "@/assets/Icons";

const GetTicketSuccess = ({ state, dispatch }) => {
  const handleViewTicket = () => {
    dispatch({ type: "getInfo" });
  };

  return (
    <div className="max-w-[612px] h-max mt-10 flex justify-center items-center bg-black/40 backdrop-blur-md  rounded-2xl mx-auto  relative px-4 md:px-11 py-10 md:py-14 lg:py-24  z-50  ">
      {/* Back Button */}
      <button
        onClick={() => dispatch({ type: "otp" })}
        className="absolute left-6 top-6 text-indigo text-2xl font-bold"
      >
        <IoIosArrowBack />
      </button>
      <div action="" className="p-8  rounded-xl h-max border-white/10 border ">
        <h1 className="text-xl md:text-2xl font-bold font-phudu  text-white text-center mb-6 border-b pb-6 border-b-white/10">
          Welcome to the age of SONIK
        </h1>
        {/* Input Container */}

        <div className="w-52 md:w-[340px] mx-auto">
          <Image
            layout="responsive"
            src="/assets/you-are-going.png"
            width={340}
            height={282}
            alt="get token success"
          />
        </div>

        <Button
          onClick={handleViewTicket}
          className={
            "mt-5 bg-indigo text-white hover:bg-indigo-600 duration-300 transition-all"
          }
        >
          View E-Ticket
        </Button>
      </div>
    </div>
  );
};
export default GetTicketSuccess;
