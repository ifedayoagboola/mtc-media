import React from "react";
import logo from "../assets/ast1.svg";
import ast2 from "../assets/ast2.svg";
import ast3 from "../assets/ast3.svg";
import ast4 from "../assets/ast4.svg";
// import BottomBar from "./BottomBar";

const Footer = () => {
  return (
    <div className="bg-[#111111]">
      <div className="flex items-center justify-center container py-4">
        <hr />
        <img src={logo} alt="bitshub-img" className="w-[32]" />
        <hr />
      </div>
      <div className="container pt-16 pb-12">
        <div className="container grid md:grid-cols-2 break-words">
          <div className="col-span-4 grid grid-cols-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider">
                  About
                </h3>
                <div className="mt-4 space-y-2">
                  <a
                    href="/"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    SHOP
                  </a>
                  <a
                    href="/"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    PLAN MY KITCHEN
                  </a>
                  <a
                    href="/track-order"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    ABOUT US
                  </a>
                  <a
                    href="/"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    GALLERY
                  </a>
                  <a
                    href="/"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    Return Order
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider">
                  Service
                </h3>
                <div className="mt-4 space-y-2">
                  <a
                    href="/"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    FAQ
                  </a>
                  <a
                    href="/"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    CONTACT
                  </a>
                  <a
                    href="/"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    HOW TO BUY
                  </a>
                  <a
                    href="/"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    DOWNLOADS
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider">
                  Info
                </h3>
                <div className="mt-4 space-y-2">
                  <a
                    href="/"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    DELIVERY
                  </a>
                  <a
                    href="/"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    TERMS
                  </a>
                  <a
                    href="/"
                    className="text-xs hover:text-gray-900 text-gray-400 block"
                  >
                    PRIVACY
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider">
                  Info
                </h3>
                <div className="flex items-center gap-4 pt-4">
                  <img src={ast2} alt="bitshub-img" className="w-[32]" />
                  <img src={ast3} alt="bitshub-img" className="w-[32]" />
                  <img src={ast4} alt="bitshub-img" className="w-[32]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-1/2 m-auto">
          <p className="text-gray-400 text-center text-xs py-8">
            Copyright Online MTC Home Kitchens 2018 - All rights reserved.
            Responsive website design, Development & Hosting by mtc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
