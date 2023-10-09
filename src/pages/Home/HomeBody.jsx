import React from "react";
import { HomeBodyCard } from "./HomeBodyCards";
import "./styles.css";
import { footerIcons, howtouse } from "./footerIcons";
import { quicklinks } from "./footerIcons";

export default function HomeBody() {
  return (
    <div className="flex flex-col items-center gap-10">
      {HomeBodyCard.map((data) => {
        if (data.cardNumber % 2 === 0) {
          return (
            <div className="h-screen w-[95%] rounded-2xl flex items-center justify-center bg-no-repeat bg-center  bg-contain relative overflow-hidden bg-black">
              <div className="h-screen w-[90%] rounded-2xl flex items-center flex-col py-28 justify-center mb-36">
                <div className="mt-10 flex flex-col absolute text-white z-10">
                  <div className="text-4xl lg:text-6xl">{data.text1}</div>
                  <div className="text-7xl lg:text-9xl font-stylish">
                    {data.text2}
                  </div>
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
              <div className="h-screen w-[90%] rounded-2xl flex items-center flex-col py-28 justify-center mb-36">
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
                  <div className="text-7xl lg:text-9xl font-stylish">
                    {data.text2}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}

      <footer className="h-[100%] w-[95%] rounded-2xl flex flex-col items-center justify-center overflow-hidden bg-white p-14 gap-20">
        <div className="hidden lg:flex gap-10">
          <a
            href="https://blog.openinapp.com/maximizing-engagement-the-key-to-boosting-your-instagram-follower-count/"
            target="_blank"
          >
            <div className="bg-black rounded-xl relative shadow-2xl">
              <img
                src="./images/footer1.png"
                className="h-60 max-xl:h-80 rounded-xl opacity-70 hover:opacity-100 cursor-pointer"
                alt=""
              />
              <p className="text-white absolute bottom-0 text-center font-semibold tracking-wide left-0 px-4 py-2 z-10 shadow-inner">
                Maximizing Engagement: The Key To Boost Your Instagram Follower
                Count
              </p>
            </div>
          </a>
          <a
            href="https://blog.openinapp.com/the-ultimate-checklist-for-growing-your-instagram-following-tips-and-tricks/"
            target="_blank"
          >
            <div className="bg-black rounded-xl relative shadow-2xl">
              <img
                src="./images/footer2.png"
                className="h-60 max-xl:h-80 rounded-xl opacity-70 hover:opacity-100 cursor-pointer"
                alt=""
              />
              <p className="text-white absolute bottom-0 text-center font-semibold tracking-wide left-0 px-4 py-2 z-10 shadow-inner">
                The Ultimate Checklist For Growing Your Instagram Following:
                Tips and Tricks
              </p>
            </div>
          </a>
          <a
            href="https://blog.openinapp.com/unleashing-the-power-of-hashtags-on-instagram-a-guide-to-follower-increase/"
            target="_blank"
          >
            <div className="bg-black rounded-xl relative shadow-2xl">
              <img
                src="./images/footer3.png"
                className="h-60 max-xl:h-80 rounded-xl opacity-70 hover:opacity-100 cursor-pointer"
                alt=""
              />
              <p className="text-white absolute bottom-0 text-center font-semibold tracking-wide left-0 px-4 py-2 z-10 shadow-inner">
                Unleashing The Power of Hashtags on Instagram : A Guide to
                Follower Increase
              </p>
            </div>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-28 2xl:gap-52 items-center overflow-x-scroll">
          <div className="">
            <img
              src="./images/trademark.png"
              className="h-44 lg:h-32 xl:h-40 max-xl:h-52"
              alt=""
            />
          </div>

          <div className="flex gap-10 xl:gap-28 2xl:gap-52">
            <div className="hidden lg:flex flex-col">
              <span className="xl:text-lg max-xl:text-2xl font-semibold text-zinc-400">
                Quick Links
              </span>
              <ul className="flex flex-col gap-2 max-xl:gap-4 mt-2">
                {quicklinks.map((link) => (
                  <li className="text-zinc-800 cursor-pointer text-sm xl:text-base max-xl:text-xl">
                    <a href={link.url} target="_blank">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex flex-col">
              <span className="xl:text-lg max-xl:text-2xl font-semibold text-zinc-400">
                How to use
              </span>
              <ul className="flex flex-col gap-2 max-xl:gap-4 mt-2">
                {howtouse.map((link) => (
                  <li className="text-zinc-800 cursor-pointer text-sm xl:text-base max-xl:text-xl">
                    <a href={link.url}>OpeninApp for {link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-8">
              <div className="text-lg max-xl:text-2xl font-semibold text-zinc-400">
                Social Platforms
              </div>
              <div className="flex gap-8 md:gap-10">
                {footerIcons.map((icon) => (
                  <div className="opacity-50 cursor-pointer">{icon.svg}</div>
                ))}
              </div>
              <div className="text-zinc-400 text-sm max-xl:text-lg text-center ">
                Copyright &copy; 2023 Listed DotFans Pvt. Ltd. All rights
                reserved{" "}
              </div>
              <div className="text-blue-600 text-sm max-xl:text-lg">
                <span className="cursor-pointer">
                  Terms & Conditions &nbsp; &nbsp;
                </span>
                <span className="cursor-pointer">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
