import React from "react";

export default function Afflinks({ openModalAffLink }) {
  return (
    <div className="bg-blue-100">
      <div
        className="bg-[#f5f5f5] px-5 md:px-10 py-10 flex flex-col gap-10 pb-36"
        // style={{ height: `calc(100vh - 84px)` }}
      >
        <div className="flex justify-between">
          <span className="text-4xl font-semibold">Afflinks</span>
          <div
            className="hidden lg:flex bg-green-400 font-semibold tracking-wide opacity-90 cursor-pointer text-white py-1.5 px-3 rounded-lg"
            onClick={openModalAffLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Afflinks
          </div>
        </div>

        <div className=" bg-[#DCF9E7] rounded-lg flex flex-col gap-6 items-center justify-center py-12">
          <div className="">
            <img src="./images/money.png" className="h-20" alt="" />
          </div>
          <div className="text-xl md:text-2xl font-semibold text-center">
            Create Affiliate Links From Product Links
          </div>
          <div
            className="text-white bg-green-400 py-2 px-8 rounded-md opacity-90 tracking-wide font-semibold cursor-pointer "
            onClick={openModalAffLink}
          >
            Create Afflink
          </div>
        </div>

        <div className=" bg-white rounded-lg flex flex-col gap-6 items-center justify-center py-12">
          <div className="">
            <img src="./images/afflink.png" className="h-20" alt="" />
          </div>
          <div className="text-green-400 font-semibold">
            Create Affiliate Link
          </div>
          <div
            className="text-green-500 font-semibold cursor-pointer"
            onClick={openModalAffLink}
          >
            Create
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
    </div>
  );
}
