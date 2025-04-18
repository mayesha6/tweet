"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "@/public/img/logo.png";
import {
  Facebook,
  Linkedin,
  MessageCircleMore,
  Send,
  Twitter,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="mt-8 text-[#A5A5A5] bg-black pt-[47px]">
      <div className="mx-auto container px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-5 gap-y-12">
          {/* Left Column - Logo and Description */}
          <div className="md:w-[316px]">
            <h1 className="text-white text-[24px] font-extrabold">
              <Image alt="footer logo" src={FooterLogo} />
            </h1>
            <p className="!mt-[30px] !mb-5 text-[16px] leading-[28px] font-normal w-[293px] text-[#A5A5A5]">
              Your go-to choice for fast and fresh delivery, bringing the best
              to your door in no time
            </p>
            <div className="flex gap-5 pt-3">
              <div className="w-[44px] h-[44px] bg-[#1C2125] flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-500 transition-colors duration-300">
                <Facebook className="text-white" size={20} />
              </div>
              <div className="w-[44px] h-[44px] bg-[#1C2125] flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-500 transition-colors duration-300">
                <Linkedin className="text-white" size={20} />
              </div>
              <div className="w-[44px] h-[44px] bg-[#1C2125] flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-500 transition-colors duration-300">
                <Twitter className="text-white" size={20} />
              </div>
              <div className="w-[44px] h-[44px] bg-[#1C2125] flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-500 transition-colors duration-300">
                <MessageCircleMore className="text-white" size={20} />
              </div>
            </div>
          </div>

          {/* Center Column - Contact Info */}
          <div className="flex flex-col lg:justify-center lg:items-center">
            <h1 className="text-[24px] text-white font-xl font-semibold">
              Quick Link
            </h1>
            <div className="flex flex-col gap-2 mt-8">
              <Link href={"#"} className="text-[#A5A5A5] text-base">
                About Us
              </Link>
              <Link href={"#"} className="text-[#A5A5A5] text-base">
                How We works
              </Link>
              <Link href={"#"} className="text-[#A5A5A5] text-base">
                Career
              </Link>
            </div>
          </div>
          {/* Center Column - Contact Info */}
          <div className="flex flex-col lg:justify-center lg:items-center">
            <h1 className="text-[24px] text-white font-xl font-semibold mb-10">
              Quick Link
            </h1>
            <div className="flex flex-col gap-2 mt-8">
              <Link href={"#"} className="text-[#A5A5A5] text-base ">
                About Us
              </Link>
              <Link href={"#"} className="text-[#A5A5A5] text-base ">
                How We works
              </Link>
              <Link href={"#"} className="text-[#A5A5A5] text-base ">
                Career
              </Link>
            </div>
          </div>
          {/* Center Column - Contact Info */}
          <div className="md:w-[337px]">
            <h1 className="text-[24px] text-white font-xl font-semibold mb-10">
              Newsletter
            </h1>
            <div className="flex flex-col gap-2 mt-8">
              <p className="text-[#A5A5A5] text-base">
                Subscribe Our newsletter to get our Latest Update & News
              </p>
              <div className="flex pt-4">
                {/* Accessible hidden label */}
                <label htmlFor="bar-search" className="sr-only">
                  Search
                </label>

                {/* Search Input */}
                <input
                  id="bar-search"
                  className="mb-2 bg-[#181D21] text-md h-[53px] border-[1px] focus:outline-none focus:ring-[0.5px] dark:bg-gray-900 text-purple-900 dark:text-gray-100 placeholder-[#181D21] dark:placeholder-gray-600 font-semibold rounded-l pl-3"
                  type="search"
                  name="q"
                  placeholder="fdgg"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#ED6923] px-4 py-3.8 text-lg font-bold text-white rounded-r transition duration-300 ease-in-out shadow hover:shadow-2xl cursor-pointer"
                >
                  <Send className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-[30px] border-[1px] border-[#5C5C5C]" />
      <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
        <p className="text-[12px] text-[#A5A5A5] md:text-[16px]">
          &copy; 2024 Tweet. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
