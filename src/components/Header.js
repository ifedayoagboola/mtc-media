import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ast1.svg";
import sc from "../assets/shopping-cart.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import bars from "../assets/bars.svg";
import cancel from "../assets/cancel.svg";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <div className="md:container fixed top-0 right-0 left-0 z-10 bg-transparent">
        <div className="hidden md:flex justify-between items-center uppercase text-white text-[13px] py-5">
          <div className="flex items-center space-x-3">
            <img className="h-[16px] w-[16px]" src={facebook} alt="facebook" />
            <img className="h-[16px] w-[16px]" src={instagram} alt="facebook" />
            <img className="h-[16px] w-[16px]" src={twitter} alt="facebook" />
          </div>
          <div className="space-x-12">
            <Link to="/shop">Shop</Link>
            <Link to="/plan-my-kitchen">Plan my Kitchen</Link>
          </div>
          <div>
            <Link to="/home">
              <img src={logo} alt="MK" />
            </Link>
          </div>
          <div className="space-x-12">
            <Link to="/about">About us</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <button className="border uppercase rounded-[30px] flex justify-between space-x-3 items-center py-2 px-4">
            <span>My order</span>
            <span>
              <img src={sc} alt="shopping-cart" />
            </span>
          </button>
        </div>
        <hr />
        <div
          className={`${
            showMobileMenu ? "hidden" : "flex items-center justify-between"
          }  md:hidden p-8`}
        >
          <div>
            <Link to="/home">
              <img src={logo} alt="MK" />
            </Link>
          </div>
          <button onClick={menuHandler} className="w-[30px]">
            <img className="w-full" src={bars} alt="bars" />
          </button>
        </div>

        <div
          className={`${
            showMobileMenu ? "block" : "hidden"
          } text-white p-8 space-y-4`}
        >
          <div className="flex justify-between items-center">
            <div>
              <Link to="/home">
                <img src={logo} alt="MK" />
              </Link>
            </div>
            <div>
              <button className="w-[20px]" onClick={menuHandler}>
                <img className="w-full" src={cancel} alt="" />
              </button>
            </div>
          </div>
          <p>
            <Link to="/shop">Shop</Link>
          </p>
          <p>
            <Link to="/plan-my-kitchen">Plan my Kitchen</Link>
          </p>
          <p>
            <Link to="/about">About us</Link>
          </p>
          <p>
            <Link to="/gallery">Gallery</Link>
          </p>

          <button className="border uppercase rounded-[30px] flex justify-between space-x-3 items-center py-2 px-4">
            <span>My order</span>
            <span>
              <img src={sc} alt="shopping-cart" />
            </span>
          </button>
          <div className="flex items-center space-x-3">
            <img className="h-[16px] w-[16px]" src={facebook} alt="facebook" />
            <img className="h-[16px] w-[16px]" src={instagram} alt="facebook" />
            <img className="h-[16px] w-[16px]" src={twitter} alt="facebook" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
