import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-5 px-6 sticky top-0 bg-[#ddf0ff] z-50">
      <div className="flex items-center gap-8">
        <div className="hidden lg:block transition-all">
          <img src="./images/openlogo.png" className="h-16" alt="" />
        </div>
        <div className="flex text-lg items-center gap-3 bg-[#cde5f9] p-3 rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-blue-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <div className="flex items-center gap-2 tracking-wide">
            <span className="hidden md:block">for&nbsp;Creators</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex gap-2 text-xl ring-1 p-3 rounded-full items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-blue-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <div className="text-blue-600 font-semibold hidden lg:block transition-all">Create Smartlink</div>
        </div>
        <div className="bg-blue-600 text-white flex items-center justify-center px-10 rounded-3xl font-semibold tracking-wide md:text-lg transition-all">User Space</div>
      </div>
    </div>
  );
}
