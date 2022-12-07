import React, { createContext, useContext } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import logo_2 from "../../public/logo_2.png";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

const NavContext = createContext({});

const dal2_data: any = [
  {
    title: "APARTMENTS",
    href: "dalmooreii",
  },
  {
    title: "GALLERY",
    href: "/",
  },
  {
    title: "LOCATION",
    href: "/locations",
  },
];

const prev_projs: any = [
  {
    title: "DALMORE I",
    href: "/",
  },
  {
    title: "DALMORE III",
    href: "/",
  },
];

const NavItem = ({
  href,
  children,
  drop,
  data,
}: {
  href: string;
  children: any;
  drop?: boolean;
  data?: any;
}) => {
  const { setIsOpen }: any = useContext(NavContext);

  return drop ? (
    <li
      onClick={() => setIsOpen(false)}
      className="nav-item hover:font-[600]  md:w-auto w-full py-[10px] flex md:flex-row flex-col items-center justify-center hover:text-primary  relative peer group"
    >
      <Link
        className="nav-icon flex gap-x-1 text-start items-center  "
        href={href}
      >
        <span> {children}</span>
        <FaChevronDown className="group-hover:rotate-180" />
      </Link>

      <ul className="md:hidden md:group-hover:flex md:peer-hover:inline hover:flex  md:absolute backdrop-invert-0 bg-black/60 text-white top-[3em] text-center flex-col py-[1em]  md:w-[10rem] w-full  ">
        {data?.map((item: any) => (
          <NavItem href={item.href} key={item.title}>
            {item.title}
          </NavItem>
        ))}
      </ul>
    </li>
  ) : (
    <li
      onClick={() => setIsOpen(false)}
      className={`nav-item hover:font-[600] hover:bg-black md:w-auto w-full py-[10px] flex justify-center   hover:text-white`}
    >
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
    <NavContext.Provider value={{ setIsOpen }}>
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
            className="text-primary"
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

        {/* web  */}
        <div className="md:flex lg:flex-row flex-col gap-x-4 lg:items-center items-end font-monts text-[14px] font-[500] hidden">
          <ul className="flex items-center gap-4 text-black ">
            <NavItem drop={true} data={dal2_data} href="dalmooreii">
              DALMOORE II
            </NavItem>
            <NavItem drop={true} data={prev_projs} href="/">
              PREVIOUS PROJECTS{" "}
            </NavItem>
            <NavItem href="/contact">CONTACT</NavItem>
            <NavItem href="/">TEAM</NavItem>
          </ul>

          <a
            href="https://online.fliphtml5.com/opehn/bgqq/#p=1"
            target="_blank"
            rel="noreferrer"
            className="text-tertiary font-[600]"
          >
            GET THE DALMOOORE BRONCHURE!{" "}
          </a>
        </div>

        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.6 }}
            className=" z-[99]  md:hidden text-center absolute top-[5.5em] left-0 w-full h-full"
          >
            <div className="w-[80%] m-auto bg-white py-[2rem] font-[500] font-monts  border-t-[5px] border-primary">
              <ul className="flex flex-col items-center gap-4 text-black mb-[20px]">
                <NavItem drop={true} data={dal2_data} href="dalmooreii">
                  DALMOORE II
                </NavItem>
                <NavItem drop={true} data={prev_projs} href="/">
                  PREVIOUS PROJECTS{" "}
                </NavItem>
                <NavItem href="/contact">CONTACT</NavItem>
                <NavItem href="/">TEAM</NavItem>
              </ul>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://online.fliphtml5.com/opehn/bgqq/#p=1"
                className="text-tertiary font-[600] "
              >
                GET THE DALMOORE BRONCHURE!{" "}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </NavContext.Provider>
  );
};

export default Navbar;
