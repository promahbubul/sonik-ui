import Link from "next/link";
import Input from "./Input";
import Button from "@/components/shared/Button";
import { FaPhoneAlt, HiOutlineMail, RiUserReceived2Line } from "@/assets/Icons";

const SignUpModal = ({ dispatch, state }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "otp" });
  };

  return (
    <div
      className={`max-w-[612px] bg-black/40 backdrop-blur-md top-10  rounded-2xl mx-auto  relative  px-11 py-24  z-50 `}
    >
      <form
        onSubmit={handleFormSubmit}
        className="p-8  h-full rounded-xl border-white/10 border "
      >
        <h1 className="text-2xl font-bold font-phudu  text-white text-center mb-6 border-b pb-6 border-b-white/10">
          Create An Account
        </h1>
        {/* Input Container */}
        <div className="grid grid-cols-12 gap-2">
          <Input
            placeholder={"First Name"}
            label={"First Name"}
            icon={RiUserReceived2Line}
            className={"col-span-6"}
          />
          <Input
            placeholder={"Last Name"}
            label={"Last Name"}
            icon={RiUserReceived2Line}
            className={"col-span-6"}
          />
          <Input
            placeholder={"Phone Number"}
            label={"Phone Number"}
            icon={FaPhoneAlt}
            className={"col-span-12"}
          />
          <Input
            placeholder={"Email"}
            label={"Email"}
            icon={HiOutlineMail}
            className={"col-span-12"}
          />
        </div>
        <Button
          className={
            "mt-5 bg-indigo hover:bg-indigo duration-300 transition-all"
          }
        >
          Sign Up
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
export default SignUpModal;
