import React from "react";
import one from "../images/1.png";
import one2 from "../images/2.png";
import one3 from "../images/3.png";
import one4 from "../images/4.png";
import one5 from "../images/5.png";
import one6 from "../images/6.png";
import one7 from "../images/7.png";

const twitterCards = [
  { id: 1, img: one },
  { id: 2, img: one2 },
  { id: 3, img: one3 },
  { id: 4, img: one4 },
  { id: 5, img: one5 },
  { id: 6, img: one6 },
  { id: 7, img: one7 },
];
const twitterCard2 = [
  { id: 1, img: one7 },
  { id: 2, img: one6 },
  { id: 3, img: one5 },
  { id: 4, img: one3 },
  { id: 5, img: one4 },
  { id: 6, img: one2 },
  { id: 7, img: one },
];

const TwitterCard = ({ img }) => (
  <div className="flex-shrink-0 w-72 p-4  rounded-lg mx-2">
    {/* <div className="flex items-center mb-2">
      <Twitter className="w-5 h-5 text-blue-400 mr-2" />
      <span className="font-semibold text-gray-700">{username}</span>
    </div>
    <p className="text-white">{content}</p> */}
    <img src={img} alt="img" className="w-[100%] h-[70px]" />
  </div>
);

const Card = () => {
  return (
    <div>
      <div className=" overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 scrollbar-hide">
            <div className="flex animate-scroll">
              {twitterCards.map((card) => (
                <TwitterCard key={card.id} img={card.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 scrollbar-hide">
            <div className="flex animate-scroll">
              {twitterCard2.map((card) => (
                <TwitterCard key={card.id} img={card.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
