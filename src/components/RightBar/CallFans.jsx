import React from "react";

export default function CallFans() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-5"
      style={{ height: "calc(100vh - 200px)" }}
    >
      <div className="tracking-wide">WE'RE STILL</div>
      <div className="text-4xl md:text-6xl text-center font-bold text-blue-600 opacity-90 transition-all">
        Cooking This Page !
      </div>
      <div className="opacity-60 tracking-wide text-sm md:text-base transition-all mt-6 md:mt-10">
        We are going to launch this feature very soon.
      </div>
      <div className="tracking-wide opacity-60">Stay Tuned!</div>
      <div className="flex items-center justify-start gap-4 mt-5 shadow-2xl text-white bg-zinc-800 py-2 pl-2 pr-8 rounded-full">
        <div className="bg-gradient-to-r from-blue-300 to-white p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-blue-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        Notify Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 animate-pulse"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}
