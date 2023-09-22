import React from "react";
import { HomeBodyCard } from "./HomeBodyCards";
import './styles.css'

export default function HomeBody() {
  const cardNumber = ["1", "2", "3", "4", "5"];
  return (
    <div className="flex flex-col items-center gap-10">
      {HomeBodyCard.map((data) => {
        if (data.cardNumber % 2 === 0) {
          return (
            <div className="lg:bg-white h-screen w-[90%] rounded-2xl flex items-center justify-center bg-no-repeat lg:bg-bottom bg-center  bg-contain relative overflow-hidden bg-black opacity-80 lg:opacity-100">
              <div
                className="h-screen w-[90%] rounded-2xl flex items-center xl:justify-between md:px-28  xl:flex-row flex-col xl:py-0 py-28 justify-center lg:mb-0 mb-36"
              >
                <div className="mb-10 xl:mt-0 xl:w-[35%] flex flex-col xl:mr-10 md:relative absolute lg:text-black text-white">
                  <div className="text-4xl lg:text-6xl">{data.text1}</div>
                  <div className="text-7xl lg:text-9xl font-stylish">{data.text2}</div>
                </div>
                <div className="w-full absolute top-0 left-0 opacity-30 lg:shadow-none lg:opacity-100 lg:relative lg:w-[100%] xl:w-[60%]">
                  <video
                    className="w-full h-screen lg:h-auto absolute top-0 left-0 lg:relative lg:w-[100%] rounded-xl object-cover"
                    autoPlay
                    muted
                    loop
                    src={data.videoSrc}
                  ></video>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="h-screen w-[90%] rounded-2xl flex items-center justify-center bg-no-repeat lg:bg-bottom bg-center  bg-contain relative overflow-hidden bg-black opacity-80">
              <div
                className="h-screen w-[90%] rounded-2xl flex items-center xl:justify-between md:px-28  xl:flex-row flex-col xl:py-0 py-28 justify-center lg:mb-0 mb-36"
              >
                <div className="w-full absolute top-0 left-0 opacity-30 lg:shadow-none lg:opacity-100 lg:relative lg:w-[100%] xl:w-[60%]">
                  <video
                    className="w-full h-screen lg:h-auto absolute top-0 left-0 lg:relative lg:w-[100%] rounded-xl object-cover"
                    autoPlay
                    muted
                    loop
                    src={data.videoSrc}
                  ></video>
                </div>
                <div className="mt-10 xl:mt-0 xl:w-[35%] flex flex-col xl:ml-10 md:relative absolute text-white">
                  <div className="text-4xl lg:text-6xl">{data.text1}</div>
                  <div className="text-7xl lg:text-9xl font-stylish">{data.text2}</div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
