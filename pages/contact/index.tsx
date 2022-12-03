import React from "react";
import CustomHead from "../../components/CustomHead";

const index = () => {
  return (
    <div className="w-full ">
      {/* <CustomHead title="Contact" /> */}

      <div className="p-[2em] w-full py-[5em] gap-4 lg:w-[50%] md:w-[70%] m-auto font-[500] text-center ">
        <h1 className="font-default text-[40px] font-[600] my-[1em] ">
          DID WE CATCH YOUR INTEREST?{" "}
        </h1>
        <p className="font-monts my-[1em]">
          Contact us to discuss your next apartment purchase or ask us to join
          our newsletter so that you will be the first to know about new Scandic
          Lion developments.
        </p>

        <div className="leading-[2em] md:text-[18px] font-monts font-[500]">
          <p>
            <span className="text-primary font-[700]">Phone: </span> demo-phone
          </p>
          <p>
            <span className="text-primary font-[700]">Email: </span> demo-email
          </p>
          <p>Or use our form below</p>
        </div>
      </div>

      <div className="p-[2em]">
        <form className="w-full md:w-[50%] m-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-[1px] border-b-gray-300 border-b-[2px]  rounded-md p-[10px] focus:outline-none focus:border-b-primary"
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-[1px] border-b-gray-300 border-b-[2px]  rounded-md p-[10px] focus:outline-none focus:border-b-primary"
              />

              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="border-[1px] border-b-gray-300 rounded-md p-[10px] focus:outline-none focus:border-b-primary border-b-[2px]"
              ></textarea>

              <div className="w-full flex items-end justify-end">
                <button className="py-[8px] px-[15px] font-default text-[18px] mt-[10px] font-[500] bg-white text-primary rounded-full p-[2em] border-primary border-[5px] w-fit text-right">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
