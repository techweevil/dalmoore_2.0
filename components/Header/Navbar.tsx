import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  return (
    <div className="bg-white w-full p-4 flex justify-between items-center px-[5rem]">
      <Image src={logo} alt="dalmoore logo" width={100} height={100} />
      <div>
        <ul className="flex gap-4 text-black font-monts">
          <li>PROJECTS</li>
          <li>CONTACT</li>
          <li>TEAM</li>
          <li>DIASPORA</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
