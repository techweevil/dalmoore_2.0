import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="dark:bg-red-500 w-full  lg:h-[33.5px] md:text-right lg:pr-[8rem] md:pr-[5em] flex md:justify-end items-center justify-center font-monts">
        <div className=" flex gap-4 items-center ">
          <div>
            <FaPhoneAlt className="inline-block" />
            <span className="text-sm">+44 123 456 789</span>
          </div>
          <div>
            <HiMail className="inline-block" />
            <span className="text-sm">dalmoore@gmail.com</span>
          </div>

          <FaFacebookF className="md:inline-block hidden" />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
