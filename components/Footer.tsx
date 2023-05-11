import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="dark:bg-black dark text-white bg-white  md:py-[4em] md:px-[6em] p-[2em] font-monts flex md:flex-row flex-col md:justify-between gap-6 ">
        <div className="flex-1">
          <div className="md:w-[60%] w-full">
            <h1 className="font-default md:text-[40px] text-[32px] font-[500] leading-[2em] ">
              ABOUT El’Terreno Projects Limited
            </h1>
            <p className="leading-[1.8em]  ">
              <span>
                CREATING QUALITY URBAN LIFESTYLES, BUILDING STRONGER COMMUNITIES
              </span>{" "}
              <br />
              Improving quality of life with an integrated unified approach. Our
              team will handle all aspect including bid/award of contracts,
              management of contracts, RFI and submittal trafficking, payment
              applications, and close out.
            </p>
          </div>
        </div>

        <div className="">
          <h1 className="font-default md:text-[40px] text-[32px] font-[500] leading-[2em] ">
            CONTACT
          </h1>
          <div>
            <p className="text-secondary font-default text-[18px] leading-[2em]">
              PHONE & WHATSAPP
            </p>
            <p>(+234) -demo-number</p>
          </div>
          <div>
            <p className="text-secondary font-default text-[18px] leading-[2em]">
              EMAIL
            </p>
            <p>demo-email</p>
          </div>
          <div>
            <p className="text-secondary font-default text-[18px] leading-[2em]">
              ADDRESS
            </p>
            <p>demo address</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-700 p-[.6rem] text-center font[700] text-white  ">
        <p>Copyright El’Terreno Projects Limited 2022</p>
      </div>
    </div>
  );
};

export default Footer;
