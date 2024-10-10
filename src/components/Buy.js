import React from "react";
import Trans from "../images/trans.png";
import { ReactComponent as Buys } from "../images/buy.svg";
import ScrollingBanner from "./ScrollingBanner";
const Buy = () => {
  return (
    <div className="md:pt-16" id="how-to-buy">
      <div className="max-w-7xl mx-auto  px-4 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex flex-col justify-center ">
            <Buys className="w-[100%]" />
            <div className="flex  gap-5 mt-8 ">
              <p className=" font-normal  flex-[0.1] text-[16px] flex  items-center justify-center  text-[#083ADB] rounded-md bg-[#FCC02F] !w-[40px] !h-[40px]">
                1
              </p>
              <div className=" flex-[1.9] max-w-[607px]">
                <h2 className="font-semibold text-2xl text-white">
                  Connect Wallet
                </h2>
                <p className=" font-normal text-[15px] md:text-[18px]   pt-5 text-white mb-6">
                  Download Phantom or your wallet of choice from the app store
                  or Google Play for free. Desktop users, download the Google
                  Chrome extension by going to Phantom
                </p>
              </div>
            </div>
            <div className="flex  gap-5 mt-8 ">
              <p className=" font-normal flex-[0.1] text-[16px] flex  items-center justify-center  text-[#083ADB] rounded-md bg-[#FCC02F] !w-[40px] !h-[40px]">
                2
              </p>
              <div className=" flex-[1.9] max-w-[607px]">
                <h2 className="font-semibold text-2xl text-white">
                  Get some Sol{" "}
                </h2>
                <p className=" font-normal text-[15px] md:text-[18px]   pt-5 text-white mb-6">
                  Have SOL in your wallet to switch to $BUSINESS. If you don’t
                  have any SOL, you can buy directly on Phantom, transfer from
                  another wallet, or buy on another exchange and send it to your
                  wallet.
                </p>
              </div>
            </div>
            <div className="flex  gap-5 mt-8 ">
              <p className=" font-normal flex-[0.1] text-[16px] flex  items-center justify-center  text-[#083ADB] rounded-md bg-[#FCC02F] !w-[40px] !h-[40px]">
                3
              </p>
              <div className=" flex-[1.9] max-w-[607px]">
                <h2 className="font-semibold text-2xl text-white">
                  Go to Jupiter
                </h2>
                <p className=" font-normal text-[15px] md:text-[18px]   pt-5 text-white mb-6">
                  Connect to Jupiter. Connect your wallet in chrome. Paste the
                  $BUSINESS token address, select $BUSINESS, and confirm. When
                  Phantom prompts you for a wallet signature, sign.
                </p>
              </div>
            </div>
            <div className="flex  gap-5 mt-8 ">
              <p className=" font-normal flex-[0.1] text-[16px] flex  items-center justify-center  text-[#083ADB] rounded-md bg-[#FCC02F] !w-[40px] !h-[40px]">
                4
              </p>
              <div className="flex-[1.9] max-w-[607px]">
                <h2 className="font-semibold text-2xl text-white">
                  Swap for $BUSINESS
                </h2>
                <p className=" font-normal text-[15px] md:text-[18px]   pt-5 text-white mb-6">
                  Switch SOL for $BUSINESS. We have Zero taxes so you don’t need
                  to worry about buying with a specific slippage.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={Trans} alt="how-buy-img" />
          </div>
        </div>
      </div>
      <ScrollingBanner />
    </div>
  );
};

export default Buy;
