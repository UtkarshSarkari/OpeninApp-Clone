import React, { useState } from "react";

export default function Profile() {
  const profilePic = localStorage.getItem("profilePic");
  const username = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const [edit, setEdit] = useState(false);
  return (
    <div className="py-10 px-6 flex flex-col gap-6 md:gap-10 pb-36">
      {edit ? (
        ""
      ) : (
        <>
          <div className="flex justify-between">
            <span className="text-3xl font-semibold">My Profile</span>
            <div
              className="flex items-center gap-2 ring-1 py-1 px-2 rounded-md ring-zinc-300"
              onClick={() => setEdit(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit
            </div>
          </div>
          <div className="h-52 md:h-64 flex flex-col items-center justify-center w-full gap-2">
            <div className="h-[70px] md:h-20 w-[70px] md:w-20 ring-1 rounded-md overflow-hidden object-contain">
              <img src={profilePic} alt="" />
            </div>
            <div className="text-2xl md:text-4xl font-semibold">{username}</div>
            <div className="md:text-xl opacity-60">{email}</div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-64 rounded-lg bg-white h-full lg:h-36 lg:items-center px-8 lg:px-10 py-10">
            <div className="text-xl md:text-2xl font-semibold">
              Basic Details
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-60 text-sm md:text-base">Email ID</span>
              <span className=" text-sm md:text-base">{email}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-60 text-sm md:text-base">
                Phone Number
              </span>
              <span className="text-blue-500 text-sm md:text-base">
                + Add Phone Number
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-64 rounded-lg bg-white h-full lg:h-56 lg:items-center px-8 lg:px-10 py-10">
            <div className="text-xl md:text-2xl font-semibold">
              Social Links
            </div>
            <div className="lg:grid flex flex-col grid-cols-2 grid-rows-2 gap-y-8 gap-x-20">
              <div className="flex items-center gap-4">
                <div className="bg-[#ffe9ec] p-3 md:p-4 rounded-lg">
                  <img src="./images/insta.png" className="h-6 md:h-8" alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="opacity-60 text-sm md:text-base">
                    Instagram
                  </div>
                  <div className="text-blue-500 text-sm md:text-base">
                    + Add Instagram Account
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#ffe0e0]  p-3 md:p-4 rounded-lg">
                  <img
                    src="./images/youtube.png"
                    className="h-6 md:h-8"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="opacity-60 text-sm md:text-base">Youtube</div>
                  <div className="text-blue-500 text-sm md:text-base">
                    + Add Youtube Account
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#e0eff6] p-3 md:p-4 rounded-lg">
                  <img src="./images/link.png" className="h-6 md:h-8" alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="opacity-60 text-sm md:text-base">
                    LinkedIn
                  </div>
                  <div className="text-blue-500 text-sm md:text-base">
                    + Add LinkedIn Account
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#e9f9ff] p-3 md:p-4 rounded-lg">
                  <img src="./images/earth.png" className="h-6 md:h-8" alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="opacity-60 text-sm md:text-base">Website</div>
                  <div className="text-blue-500 text-sm md:text-base">
                    + Add Website URL
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}
