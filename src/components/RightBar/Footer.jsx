import React, { useState } from "react";
import { leftDashData } from "../LeftBar/LeftDash";

export default function Footer({ setSelectedLink }) {
  const [selectedItem, setSelectedItem] = useState("My Links");
  const handleClick = (item) => {
    setSelectedItem(item);
    setSelectedLink(item);
  };
  return (
    <div className="lg:hidden bg-white w-full fixed bottom-0 z-50 flex items-center">
      <div
        className={`flex flex-col items-center gap-2 flex-1 ${
          leftDashData[0].name === selectedItem
            ? "border-blue-500 border-t-4  py-2 bg-gradient-to-b from-blue-100 "
            : ""
        }`}
        onClick={() => {
          handleClick(leftDashData[0].name);
        }}
      >
        <div className="opacity-50">{leftDashData[0].svg}</div>
        <div className="opacity-80 text-xs">{leftDashData[0].name}</div>
      </div>
      <div
        className={`flex flex-col items-center gap-2 flex-1 ${
          leftDashData[1].name === selectedItem
            ? "border-blue-500 border-t-4  py-2 bg-gradient-to-b from-blue-100 "
            : ""
        }`}
        onClick={() => {
          handleClick(leftDashData[1].name);
        }}
      >
        <div className="opacity-50">{leftDashData[1].svg}</div>
        <div className="opacity-80 text-xs">{leftDashData[1].name}</div>
      </div>
      <div className="flex flex-col items-center gap-2  py-2 flex-1">
        <div className="bg-black p-[14px] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        </div>
      </div>
      <div
        className={`flex flex-col items-center gap-2 flex-1 ${
          leftDashData[2].name === selectedItem
            ? "border-blue-500 border-t-4  py-2 bg-gradient-to-b from-blue-100 "
            : ""
        }`}
        onClick={() => {
          handleClick(leftDashData[2].name);
        }}
      >
        <div className="opacity-50">{leftDashData[2].svg}</div>
        <div className="opacity-80 text-xs">{leftDashData[2].name}</div>
      </div>
      <div
        className={`flex flex-col items-center gap-2 flex-1 ${
          leftDashData[5].name === selectedItem
            ? "border-blue-500 border-t-4  py-2 bg-gradient-to-b from-blue-100 "
            : ""
        }`}
        onClick={() => {
          handleClick(leftDashData[5].name);
        }}
      >
        <div className="opacity-50">{leftDashData[5].svg}</div>
        <div className="opacity-80 text-xs">{leftDashData[5].name}</div>
      </div>
    </div>
  );
}
