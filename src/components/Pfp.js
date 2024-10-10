import React, { useState, useEffect, useRef } from "react";
import { Upload, Download } from "lucide-react";
import Smile from "../images/smile.svg";
import { ReactComponent as Pfps } from "../images/pfp.svg";
import { ReactComponent as Arrow } from "../images/Arrow.svg";
import { ReactComponent as ArrowDown } from "../images/ArrowDown.svg";

import ScrollingBanner from "./ScrollingBanner";
const Pfp = () => {
  const [userImage, setUserImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const canvasRef = useRef(null);

  // This would be your overlay image URL
  const overlayImageUrl = Smile;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (userImage) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Create new images for user upload and overlay
      const uploadedImage = new Image();
      const overlayImage = new Image();

      // Set crossOrigin to anonymous to avoid CORS issues
      uploadedImage.crossOrigin = "anonymous";
      overlayImage.crossOrigin = "anonymous";

      uploadedImage.onload = () => {
        // Draw user image
        canvas.width = 500;
        canvas.height = 500;

        // Calculate scaling and positioning to center the image
        const scale = Math.max(
          canvas.width / uploadedImage.width,
          canvas.height / uploadedImage.height
        );
        const x = canvas.width / 2 - (uploadedImage.width / 2) * scale;
        const y = canvas.height / 2 - (uploadedImage.height / 2) * scale;

        ctx.drawImage(
          uploadedImage,
          x,
          y,
          uploadedImage.width * scale,
          uploadedImage.height * scale
        );

        // Load and draw overlay image
        overlayImage.onload = () => {
          // Calculate the scale to fit the overlay width to the canvas
          const overlayScale = canvas.width / overlayImage.width;

          // Calculate new dimensions for the overlay
          const overlayWidth = canvas.width;
          const overlayHeight = overlayImage.height * overlayScale;

          // Position the overlay at the bottom center
          const overlayX = 0;
          const overlayY = canvas.height - overlayHeight;

          ctx.drawImage(
            overlayImage,
            overlayX,
            overlayY,
            overlayWidth,
            overlayHeight
          );

          setResultImage(canvas.toDataURL("image/png"));
        };
        overlayImage.src = overlayImageUrl;
      };

      uploadedImage.src = userImage;
    }
  }, [userImage]);

  const handleDownload = () => {
    if (resultImage) {
      const link = document.createElement("a");
      link.href = resultImage;
      link.download = "pfp-generated.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="md:pt-16" id="pfp-generator">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center ">
            <Pfps className="w-[100%]" />
            <div className=" flex  flex-col md:flex-row justify-between items-center gap-10  md:p-6 mt-5">
              <div>
                <label className="block text-white text-sm font-bold mb-2">
                  Your PFP
                </label>
                <div className="flex items-center justify-center  border-2 border-[#2256ff] rounded-lg h-[490px] w-[352px]">
                  {userImage ? (
                    <img
                      src={userImage}
                      alt="Original"
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <label className="flex flex-col items-center w-[157px] h-[157px] px-4 py-6 border-dashed text-blue-500 rounded-lg shadow-lg tracking-wide border border-white cursor-pointer hover:bg-blue-500 hover:text-white">
                      <Upload className="w-8 h-8" />
                      <span className="mt-2 text-[12px] leading-normal text-white text-center">
                        Copy an image, or click any of the buttons
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  )}
                </div>
              </div>

              <div>
                <Arrow className="hidden md:block" />
                <ArrowDown className="md:hidden" />
              </div>

              <div>
                <label className="block text-white text-sm font-bold mb-2 text-end">
                  $Business PFP
                </label>
                <div className="flex items-center justify-center  border-2 border-[#2256ff] rounded-lg h-[490px] w-[352px] ">
                  <div>
                    {resultImage ? (
                      <img
                        src={resultImage}
                        alt="Generated PFP"
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      //   <ImageIcon className="w-12 h-12 text-gray-400" />
                      <div>
                        <label className="flex flex-col items-center   px-4 py-6   rounded-lg    cursor-pointer  ">
                          <span className="mt-2 text-[12px] leading-normal text-white text-center">
                            Waiting for you to upload...
                          </span>
                        </label>
                      </div>
                    )}
                    <button
                      onClick={handleDownload}
                      disabled={!resultImage}
                      className={`w-full py-3 rounded-lg flex items-center justify-center ${
                        resultImage
                          ? "bg-[#FCC02F] text-[#083ADB] hover:bg-[#f9c03b]"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Generated PFP
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hidden canvas for image processing */}
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        </div>
      </div>
      <ScrollingBanner />
    </div>
  );
};

export default Pfp;
