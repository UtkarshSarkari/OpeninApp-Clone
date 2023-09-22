import React from "react";

export default function LeftSignIn() {
  return (
    <div className="lg:flex items-center justify-center w-[40%] bg-gradient-to-r from-purple-500 to-blue-600 h-screen relative hidden">
      <div className="lg:w-[350px] xl:w-[400px] 2xl:w-[450px] overflow-hidden opacity-90 z-10 transition-all">
        <video
          className="rounded-2xl"
          controls
          autoPlay
          muted
          loop
          src="./images/openVideo.mp4"
        ></video>
      </div>
      <img
        src="./images/dots.png"
        className="absolute bottom-[90px] left-12 opacity-90 z-[-1px]"
        height={80}
        width={80}
        alt=""
      />
      <img
        src="./images/dots.png"
        className="absolute top-[90px] right-12 opacity-90 z-[-1px]"
        height={80}
        width={80}
        alt=""
      />
    </div>
  );
}
