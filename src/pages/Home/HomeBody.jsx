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
            <div className="h-screen w-[95%] rounded-2xl flex items-center justify-center bg-no-repeat bg-center  bg-contain relative overflow-hidden bg-black">
              <div
                className="h-screen w-[90%] rounded-2xl flex items-center flex-col py-28 justify-center mb-36"
              >
                <div className="mt-10 flex flex-col absolute text-white z-10">
                  <div className="text-4xl lg:text-6xl">{data.text1}</div>
                  <div className="text-7xl lg:text-9xl font-stylish">{data.text2}</div>
                </div>
                <div className="w-full absolute top-0 left-0 opacity-50">
                  <video
                    className="w-full h-screen absolute top-0 left-0 rounded-xl object-cover"
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
            <div className="h-screen w-[95%] rounded-2xl flex items-center justify-center bg-no-repeat bg-center  bg-contain relative overflow-hidden bg-black">
              <div
                className="h-screen w-[90%] rounded-2xl flex items-center flex-col py-28 justify-center mb-36"
              >
                <div className="w-full absolute top-0 left-0 opacity-50">
                  <video
                    className="w-full h-screen absolute top-0 rounded-xl object-cover"
                    autoPlay
                    muted
                    loop
                    src={data.videoSrc}
                  ></video>
                </div>
                <div className="mt-10 flex flex-col absolute text-white">
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
