import React from "react";
import logo from "../assets/images/Logo.png";
import { useState } from "react";

function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className=" bg-primary flex justify-between 
                    px-[20px] py-[20px] h-[80px]
                    md:px-[40px] md:py-[22px] md:h[80px]
                    xl2:px-[60px]   xl2:h-[101.5px] 
                    xl3:px-[80px]  xl3:h-[101px] "
      >
        <img
          src={logo}
          alt="Logo"
          className=" w-[100px] h-[43px]
                      md:w-[150px] md:h-[50px] 
                      xl2:w-[180px] xl2:h-[60px]
                      xl3:w-[180px] xl3:h-[60px] "
        />

        <div>
          <ul className="hidden md:flex text-white  font-[14px] my-[18px] leading-[16px]  ">
            <li>
              <a href="#" className="pr-[28px] ">
                
                
                HOME
                
              </a>
            </li>
            <li>
              <a href="#" className="pr-[28px]">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="pr-[28px]">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="#" className="">
              SERVICES
              </a>
            </li>
          </ul>
        </div>
        <button
          className="md:hidden text-white text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-white text-black flex flex-col  p-8 ">
            <button
              className="absolute top-[16px] right-[20px] text-3xl z-50"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            <ul className="text-[14px] space-y-[16px] ">
              <li>
                <a href="#" className="block">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="block">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#" className="block">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="block">
                  CONTACT US
                </a>
              </li>
              
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default TopNavigation;
