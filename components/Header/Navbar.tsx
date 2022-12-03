import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import logo_2 from "../../public/logo_2.png";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

const NavItem = ({ href, children }: { href: string; children: any }) => {
  return (
    <li className="nav-item hover:font-[600] hover:bg-black md:w-auto w-full py-[10px] flex justify-center   hover:text-white">
      <Link
        className="nav-icon flex gap-x-2 text-start items-center group "
        href={href}
      >
        {" "}
        {children}{" "}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [navheight, setNavHeight] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setNavHeight(true);
      } else {
        setNavHeight(false);
      }
    });
  }, []);

  return (
    <div className="bg-white w-full md:p-4 px-8 py-[10px] flex justify-between items-center md:px-[5rem]">
      {navheight === false ? (
        <Image
          src={logo}
          alt="dalmoore logo"
          className={`md:w-[10em] w-[7em]`}
        />
      ) : (
        <Image
          src={logo_2}
          alt="dalmoore logo"
          className={`md:w-[10em] w-[7em] `}
        />
      )}

      <div className="md:hidden text-black inline text-[1.6em] font-[700]">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="text-red-500"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 1.1 }}
          >
            {isOpen ? <CgClose /> : <FiMenu />}
          </motion.div>
        </motion.button>
      </div>

      <div className="md:flex lg:flex-row flex-col gap-x-4 lg:items-center items-end font-monts text-[14px] font-[500] hidden">
        <ul className="flex items-center gap-4 text-black ">
          <NavItem href="/">
            PREVIOUS PROJECTS{" "}
            <FaChevronDown className="group-hover:rotate-180 " />
          </NavItem>
          <NavItem href="/">CONTACT</NavItem>
          <NavItem href="/">TEAM</NavItem>
          <NavItem href="/">DIASPORA</NavItem>
        </ul>

        <a
          href="https://online.fliphtml5.com/opehn/bgqq/#p=1"
          className="text-tertiary font-[600]"
        >
          GET THE DALMOOORE BRONCHURE!{" "}
        </a>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "80%" }}
          transition={{ duration: 0.6 }}
          exit={{ height: 0 }}
          className=" z-[10]  md:hidden text-center absolute top-[5.5em] left-0 w-full "
        >
          <div className="w-[80%] m-auto bg-white h-full py-[2rem] font-[500] font-monts  border-t-[5px] border-red-500">
            <ul className="flex flex-col items-center gap-4 text-black mb-[20px]">
              <NavItem href="/">
                PREVIOUS PROJECTS{" "}
                <FaChevronDown className="group-hover:rotate-180 " />
              </NavItem>
              <NavItem href="/">CONTACT</NavItem>
              <NavItem href="/">TEAM</NavItem>
              <NavItem href="/">DIASPORA</NavItem>
            </ul>

            <a
              href="https://online.fliphtml5.com/opehn/bgqq/#p=1"
              className="text-tetiary font-[600] "
            >
              GET THE DALMOOORE BRONCHURE!{" "}
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
