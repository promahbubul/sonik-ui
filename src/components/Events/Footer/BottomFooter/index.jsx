import Link from "next/link";

const BottomFooter = () => {
  return (
    <div className="max-w-[1280px] mx-auto  justify-between  flex flex-col md:flex-row items-center py-7 px-5 xl:px-0 md:py-10 text-gray-200 text-sm font-normal text">
      <p className="">Copyright © 2023 - WordPress</p>
      <div className="flex flex-row items-center ">
        <Link href="#">Terms & Conditions </Link>
        <Link href="#">| Privacy Policy</Link>
      </div>
    </div>
  );
};
export default BottomFooter;
