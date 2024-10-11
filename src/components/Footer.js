import React from "react";
import tg from "../images/tg.svg";
import dex from "../images/dex.svg";
import x from "../images/x.svg";

const Footer = () => {
  return (
    <div className="border-t-2 border-[#2256FF] ">
      <div className="max-w-[90%] flex flex-col items-center gap-5 md:flex-row justify-between  mx-auto py-5">
        <h2 className="font-normal text-[14px] text-center text-white">
          © 2024 by $BUSINESS <br /> All rights reserved
        </h2>
        <div className="flex gap-4">
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
  );
};

export default Footer;
