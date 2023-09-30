import React, { useState } from "react";
import LeftBarDash from "../../components/LeftBar/LeftBarDash";
import RightBarDash from "../../components/RightBar/RightBarDash";

export default function Dashboard() {
  const [selectedLink, setSelectedLink] = useState("My Links");
  const [isModalOpenSmart, setIsModalOpenSmart] = useState(false);
  const openModalSmartLink = () => {
    setIsModalOpenSmart(true);
  };

  const closeModalSmartLink = () => {
    setIsModalOpenSmart(false);
  };
  return (
    <div className="w-full h-auto bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1600px] flex">
        {isModalOpenSmart && (
          <>
            <div
              className="fixed inset-0 z-50 bg-black opacity-60"
              onClick={closeModalSmartLink}
            ></div>
            <div className="bg-white flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] px-8 py-2 rounded-lg gap-8">
              <div className="flex items-center justify-between border-b py-4">
                <span className="text-xl font-semibold">
                  Create New Smartlink
                </span>
                <svg
                  onClick={closeModalSmartLink}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="flex rounded-lg overflow-hidden justify-between px-4 items-center ring-1 ring-zinc-300">
                <input
                  type="text"
                  className="outline-none py-3 px-4 w-full"
                  placeholder="Type or Paste your link"
                />
                <div className="flex items-center gap-2 text-blue-500 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-blue-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                  Paste
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold tracking-wide">
                  Generate Smartlink
                </button>
              </div>
              <div className="text-sm px-10 text-center mb-10">
                By Generating Smartlink , You agree to OpeninApp’s
                <span className="text-blue-500 cursor-pointer">
                  {" "}
                  Terms of services{" "}
                </span>
                &{" "}
                <span className="text-blue-500 cursor-pointer">
                  Privacy Policy
                </span>
              </div>
            </div>
          </>
        )}
        <LeftBarDash setSelectedLink={setSelectedLink} />
        <RightBarDash
          openModalSmartLink={openModalSmartLink}
          selectedLink={selectedLink}
        />
      </div>
    </div>
  );
}
