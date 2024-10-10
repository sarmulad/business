import React from "react";
import { ReactComponent as Meme } from "../images/MEMES.svg";
import M1 from "../images/m16.png";
import M2 from "../images/m11.png";
import M3 from "../images/m7.png";
import M4 from "../images/m9.png";
import M5 from "../images/m19.png";
import M6 from "../images/m5.png";
import M7 from "../images/m14.png";
import M8 from "../images/m22.png";
import M9 from "../images/m2.png";
import M10 from "../images/m17.png";

const Img = [M1, M2, M3, M4, M5, M6, M7, M8, M9, M10];

const Memes = () => {
  return (
    <div className="md:pt-16" id="memes">
      <div className=" mx-auto px-4 py-12">
        <div className="">
          <div className="flex flex-col justify-center ">
            <Meme className="max-w-7xl px-10" />
            <div className="grid sm:grid-cols-2 md:grid-cols-5  gap-4 mt-10">
              {Img.map((item, i) => (
                <img src={item} key={i} alt="meme" className="w-[100%]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memes;
