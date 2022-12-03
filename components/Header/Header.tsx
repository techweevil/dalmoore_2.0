import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="md:sticky relative top-0 z-[2]">
      <div className="dark:bg-primary w-full   lg:h-[33.5px] md:text-right lg:pr-[8rem] md:pr-[5em] flex md:justify-end items-center justify-center font-monts">
        <div className=" flex gap-4 items-center text-tetiary font-[500] ">
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
