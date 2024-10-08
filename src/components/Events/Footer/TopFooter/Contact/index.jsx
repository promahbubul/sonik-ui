import Link from "next/link";
import { FaBehance, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-max lg:w-6/12 flex flex-col justify-between  h-full">
      <div className="flex-grow">
        <h3 className="text-base font-bold text-white">Contact</h3>
        <p className="text-gray-100 text-base mt-3">Phone: (+63) 555 1212</p>
        <p className="text-gray-100 text-base "> Fax: (+63) 555 0100</p>
        <p className="text-gray-100 text-base  mt-5">
          Contact us at: info@mail.com
        </p>
      </div>
      <div className="flex-grow h-auto ">
        <h3 className="text-base font-bold text-white">Social Icons</h3>
        <div className="flex flex-row items-center gap-3 mt-3">
          <Link className="text-gray-100 text-lg" href="#">
            <FaFacebook />
          </Link>
          <Link className="text-gray-100 text-lg" href="#">
            <FaTwitter />
          </Link>
          <Link className="text-gray-100 text-lg" href="#">
            <FaYoutube />
          </Link>
          <Link className="text-gray-100 text-lg" href="#">
            <FaBehance />
          </Link>
          <Link className="text-gray-100 text-lg" href="#">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contact;
