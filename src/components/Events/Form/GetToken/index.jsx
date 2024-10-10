import Button from "@/components/shared/Button";
import Link from "next/link";
import InputOTP from "../InputOTP";
import { IoIosArrowBack } from "react-icons/io";

const GetToken = ({ dispatch, state }) => {
  const handleOtp = (e) => {
    e.preventDefault();
    dispatch({ type: "getTicket" });
  };

  console.log("GetToken", state.modal);
  return (
    <div
      className={`max-w-[612px] h-max mt-10 flex justify-center items-center bg-black/40 backdrop-blur-md  rounded-2xl mx-auto  relative  px-11 py-24  z-50 `}
    >
      {/* Back Button */}
      <button
        onClick={() => dispatch({ type: null })}
        className="absolute left-6 top-6 text-indigo text-2xl font-bold"
      >
        <IoIosArrowBack />
      </button>
      <form
        onSubmit={handleOtp}
        className="p-8  rounded-xl h-max border-white/10 border "
      >
        <h1 className="text-2xl font-bold font-phudu  text-white text-center mb-6 border-b pb-6 border-b-white/10">
          Create An Account
        </h1>
        {/* Input Container */}
        <div className="grid grid-cols-5 gap-5">
          <InputOTP className={"col-span-1"} />
          <InputOTP className={"col-span-1"} />
          <InputOTP className={"col-span-1"} />
          <InputOTP className={"col-span-1"} />
          <InputOTP className={"col-span-1"} />
        </div>
        <h3 className="mt-3 text-xs font-bold text-white">Confirmation Code</h3>
        <h3 className="mt-3 text-xs font-bold text-white">
          Please enter the 5 digit confirmation code
        </h3>

        <Button
          className={
            "mt-5 bg-indigo hover:bg-indigo-600 duration-300 transition-all"
          }
        >
          Enter
        </Button>
        <p className="mt-4 text-xs font-bold text-slate1">
          By creating an account, you agree to the 
          <span className="text-white underline">Terms of Service</span>.{" "}
          {`We'll`}
          occasionally send you account-related emails.
        </p>
        <p className=" text-center font-bold text-xs mt-6">
          Already have an account?{" "}
          <Link className="text-indigo" href="">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
export default GetToken;
