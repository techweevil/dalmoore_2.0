import Image from "next/image";
import React from "react";
import { InPageContact } from ".";
import CustomHead from "../../components/CustomHead";
import location_img from "../../public/images/location.jpg";

const location = () => {
  return (
    <div className="flex flex-col gap-4 items-center md:p-[4rem] p-[1rem] ">
      <CustomHead title={"location"} />
      <div>
        <h1 className="md:text-[60px] text-[40px] text-center">
          DALMOORE II <br /> LOCATION{" "}
        </h1>

        <Image src={location_img} alt={"location image"} />
      </div>
      <InPageContact />
    </div>
  );
};

export default location;
