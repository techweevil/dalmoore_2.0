import React from "react";
import styles from "../../styles/Home.module.css";
import CustomHead from "../../components/CustomHead";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import left_side from "../../public/images/left_side.jpg";
import right_side from "../../public/images/right_side.jpg";
import { Form } from "../contact";

export const InPageContact = () => {
  return (
    <div className="flex flex-col items-center px-[1rem] py-[2rem] font-monts">
      <div className="mb-[1rem] ">
        <p className="font-[600] ">
          CONTACT US FOR MORE INFORMATION ON THE APARTMENTS AND HOW TO BUY!
        </p>
        <p>
          You can call or Whatsapp us at +(234) demo-number 1 or send us an
          email to demo-email
        </p>
      </div>
      <div className="w-full ">
        <Form />
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div>
      <CustomHead title={"dalmooreii"} />

      <main>
        <div
          className={`${styles.main} flex flex-col h-full justify-center items-center`}
        >
          <div className="  backdrop-saturate-50 bg-black/50 flex justify-center items-center text-white">
            <div className=" flex flex-col justify-between">
              <div></div>
              <div className="font-monts text-center ">
                <h1 className="  md:text-[60px] text-[40px] font-[600] ">
                  THE El’Terreno Projects Limited
                  <br /> APARTMENTS
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center my-[4rem]">
          <div className="flex flex-col gap-2 items-center mb-[2rem]">
            <Image
              width={200}
              src={logo}
              alt="El’Terreno Projects Limited logo"
            />
            <p className="font-monts text-[20px] ">DALMOOORE II </p>
          </div>

          <div className="flex md:flex-row flex-col gap-6 items-center md:p-[4rem] p-[1rem] ">
            <div>
              <Image src={left_side} alt="left view" />
              <p className="text-[30px] font-monts ">LEFT SIDE VIEW</p>
            </div>
            <div>
              <Image src={right_side} alt="left view" />
              <p className="text-[30px] text-right font-monts ">
                RIGHT SIDE VIEW
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-black py-[2rem] text-white font-monts ">
          <p className="text-center mb-[1rem] font-[600] ">SEE OUR PRICES</p>
          <div className="flex flex-col m-auto lg:w-[60%] md:w-[70%] w-[90%] ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border font-[700]">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 text-left"
                        >
                          TYPE
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 text-left"
                        >
                          PRICE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          1
                        </td>
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                          3 BEDROOM MAISONETTE
                        </td>
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                          #80, 000, 000
                        </td>
                      </tr>
                      <tr className="border-">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          1
                        </td>
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                          2 BEDROOM MAISONETTE
                        </td>
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                          #70, 000, 000
                        </td>
                      </tr>
                      <tr className="border-">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          1
                        </td>
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                          2 BEDROOM FLAT
                        </td>
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                          #65, 000, 000
                        </td>
                      </tr>
                      <tr className="border-">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          1
                        </td>
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                          1 BEDROOM FLAT
                        </td>
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                          SOLD OUT
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InPageContact />
      </main>
    </div>
  );
};

export default index;
