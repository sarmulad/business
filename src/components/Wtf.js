import React from "react";
import { ReactComponent as Smile } from "../images/smile.svg";
import { ReactComponent as Wtfs } from "../images/wtf.svg";
import ScrollingBanner from "./ScrollingBanner";

const Wtf = () => {
  return (
    <div className="md:pt-16" id="lore">
      <div className="md:max-w-7xl mx-auto px-4 py-12">
        <div className="grid justify-center md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center ">
            <Wtfs className="w-[100%]" />
            <p className=" font-normal text-[15px] md:text-xl  leading-10 pt-5 text-white mb-6 ">
              <span className="line-through">
                It's business is currently one of the most trending buzzwords in
                crypto. <br /> With shoutouts from top influencers like
                Inversebrah and Ansem, more buzz from Mitch, and a tweet by the
                official pumpfun account, $BUSINESS is primed to become the next
                crypto culture wave in the incoming bullrun.
                <br /> Get in early before everyone else does, because at the
                end of the day,{" "}
              </span>
              it's just business.
            </p>
            <button className="bg-[#FCC02F] text-white px-4 py-2 rounded-md hover:bg-[#e4b03f] w-fit">
              Buy $BUSINESS
            </button>
          </div>
          <div className=" hidden md:block items-center justify-center ">
            <Smile className="w-[100%]" />
          </div>
        </div>
      </div>
      <ScrollingBanner />
    </div>
  );
};

export default Wtf;
