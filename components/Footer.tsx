import React from "react";

const Footer = () => {
  return (
    <div className="dark:bg-black dark text-white bg-white  md:py-[4em] md:px-[6em] p-[2em] font-monts flex md:flex-row flex-col justify-between ">
      <div>
        {" "}
        <div className=" w-[40%] ">
          <h1 className="font-default md:text-[40px] text-[32px] font-[500] leading-[2em] ">
            ABOUT FORTMEADE
          </h1>
          <p className="leading-[1.8em] md:text-[18px] ">
            <p>
              CREATING QUALITY URBAN LIFESTYLES, BUILDING STRONGER COMMUNITIES
            </p>
            Improving quality of life with an integrated unified approach. Our
            team will handle all aspect including bid/award of contracts,
            management of contracts, RFI and submittal trafficking, payment
            applications, and close out.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="font-default md:text-[40px] text-[32px] font-[500] leading-[2em] ">
          ABOUT FORTMEADE
        </h1>
        <p className="leading-[1.8em] md:text-[18px] ">
          <p>
            CREATING QUALITY URBAN LIFESTYLES, BUILDING STRONGER COMMUNITIES
          </p>
          Improving quality of life with an integrated unified approach. Our
          team will handle all aspect including bid/award of contracts,
          management of contracts, RFI and submittal trafficking, payment
          applications, and close out.
        </p>
      </div>
    </div>
  );
};

export default Footer;
