import React, { useEffect, useState } from "react";
import { database } from "../../firebaseConfig";
import Footer from "./Footer";

export default function MyLinks({ openModalSmartLink }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const googleName = localStorage.getItem("name");

    const user = database.currentUser;

    if (googleName) {
      setUserName(googleName);
    } else if (user) {
      setUserName(user.displayName || "");
    }
  }, []);

  const currentHour = new Date().getHours();
  let greetingMessage = "";

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 16) {
    greetingMessage = "Good Afternoon";
  } else {
    greetingMessage = "Good Evening";
  }

  return (
    <div className="bg-blue-100">
      <div
        className="bg-[#f5f5f5] px-5 md:px-10 py-10 flex flex-col gap-10 pb-36"
        // style={{ height: `calc(100vh - 84px)` }}
      >
        <div className="flex flex-col gap-2">
          <div className="text-2xl text-zinc-400">{greetingMessage}</div>
          <div className="flex items-end justify-between">
            <div className="text-4xl md:text-5xl flex items-center gap-5">
              {userName}{" "}
              <img src="./images/hello.png" className="h-12" alt="" />
            </div>
            <div className="hidden md:flex items-center gap-2 ring-1 ring-zinc-400 rounded-md py-1.5 px-2 font-bold cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
              View Analytics
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-lg flex flex-col gap-6 items-center justify-center py-12">
          <div className="">
            <img src="./images/mylink1.png" className="h-20" alt="" />
          </div>
          <div className="text-zinc-500 font-semibold">
            Create your first Smartlink
          </div>
          <div
            className="text-blue-600 font-semibold cursor-pointer"
            onClick={openModalSmartLink}
          >
            Create
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-semibold text-2xl">How it Works?</div>

          <div className="flex items-center gap-10 overflow-x-scroll">
            <iframe
              width="560"
              height="180"
              className="rounded-xl"
              src="https://www.youtube.com/embed/Fq_JuIqSWzY?si=h4eBvA5rVyhx_4-C"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="180"
              className="rounded-xl"
              src="https://www.youtube.com/embed/uEK2rZrtDpM?si=ysCEJhknj-2TjiX9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="180"
              className="rounded-xl"
              src="https://www.youtube.com/embed/KfyODPBrA_A?si=4FA8f18UaioXGPC7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center justify-between w-full bg-[#fff5e0] py-4 px-8 ring-2 ring-white rounded-lg">
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-lg">Lets talk with us</div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="">
              <img src="./images/chat.png" className="h-12" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full bg-[#e0edff] py-4 px-8 ring-2 ring-white rounded-lg">
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-lg">Get Android App</div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-black p-2 rounded-lg">
              <img src="./images/play.png" className="h-10" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
