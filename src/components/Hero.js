import React from "react";
import { ReactComponent as Business } from "../images/business.svg";
import { ReactComponent as Businesss } from "../images/$business.svg";
import Card from "./TwitterCard";
import ScrollingBanner from "./ScrollingBanner";
import tg from "../images/tg.svg";
import dex from "../images/dex.svg";
import x from "../images/x.svg";

const Hero = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid items-center md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Business />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Businesss />
            <p className=" font-bold text-2xl text-white mb-6">
              Crypto’s next culture cult
            </p>
            <button className="rounded-[14px] border-2 shadow-sm text-white px-6 py-3 text-lg  w-[100%]">
              CA:HmyYUSLfd8jwzWdZx31AA8KRChgr1gRKR6pPrTL1pump
            </button>
            <div className="flex gap-4 mt-5">
              <a href="https://T.me/BusinessOnSol">
                <img src={tg} alt="tg-icon" />
              </a>
              <a href="https://dexscreener.com/solana/7RtHArBTxeZHNwCL72uUBnCeizXns3PA79e8rcq3RyoK">
                <img src={dex} alt="tg-icon" />
              </a>
              <a href="https://X.com/BusinessOnSol">
                <img src={x} alt="tg-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Card />
      <ScrollingBanner />
    </div>
  );
};

export default Hero;
