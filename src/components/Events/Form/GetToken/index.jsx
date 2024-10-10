// GetToken.js
import Button from "@/components/shared/Button";
import Link from "next/link";
import InputOTP from "../InputOTP";
import { IoIosArrowBack } from "react-icons/io";
import { useFormik } from "formik";

const GetToken = ({ dispatch, state }) => {
  const formik = useFormik({
    initialValues: {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    },
    onSubmit: (values) => {
      console.log("OTP Values", values);
      dispatch({ type: "getTicket", payload: values });
    },
  });

  const handleFocus = (e) => {
    const { maxLength, value, name } = e.target;
    if (value.length >= maxLength) {
      const nextInput = document.querySelector(
        `input[name=${name.replace(/\d$/, (match) => parseInt(match) + 1)}]`
      );
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <div className="max-w-[612px] h-max mt-10 flex justify-center items-center bg-black/40 backdrop-blur-md rounded-2xl mx-auto relative px-4 md:px-11 py-10 md:py-14 lg:py-24 z-50">
      <button
        onClick={() => dispatch({ type: null })}
        className="absolute left-2 md:left-6 top-2 md:top-6 text-indigo text-2xl font-bold"
      >
        <IoIosArrowBack />
      </button>
      <form
        onSubmit={formik.handleSubmit}
        className="px-2 py-4 md:p-8 rounded-xl h-max border-white/10 border"
      >
        <h1 className="text-2xl font-bold font-phudu text-white text-center mb-6 border-b pb-6 border-b-white/10">
          Create An Account
        </h1>
        <div className="grid grid-cols-5 gap-1 md:gap-5">
          <InputOTP
            name="input1"
            value={formik.values.input1}
            onChange={formik.handleChange}
            handleFocus={handleFocus}
            className="col-span-1"
          />
          <InputOTP
            name="input2"
            value={formik.values.input2}
            onChange={formik.handleChange}
            handleFocus={handleFocus}
            className="col-span-1"
          />
          <InputOTP
            name="input3"
            value={formik.values.input3}
            onChange={formik.handleChange}
            handleFocus={handleFocus}
            className="col-span-1"
          />
          <InputOTP
            name="input4"
            value={formik.values.input4}
            onChange={formik.handleChange}
            handleFocus={handleFocus}
            className="col-span-1"
          />
          <InputOTP
            name="input5"
            value={formik.values.input5}
            onChange={formik.handleChange}
            handleFocus={handleFocus}
            className="col-span-1"
          />
        </div>
        <h3 className="mt-3 text-xs font-bold text-white">Confirmation Code</h3>
        <h3 className="mt-3 text-xs font-bold text-white">
          Please enter the 5 digit confirmation code
        </h3>

        <Button
          type="submit"
          className="mt-5 bg-indigo hover:bg-indigo-600 duration-300 transition-all"
        >
          Enter
        </Button>
        <p className="mt-4 text-xs font-bold text-slate1">
          By creating an account, you agree to the 
          <span className="text-white underline">Terms of Service</span>.{" "}
          {`We'll`} occasionally send you account-related emails.
        </p>
        <p className="text-center font-bold text-xs mt-6">
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
