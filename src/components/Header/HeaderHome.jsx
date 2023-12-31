import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ openModalSmartLink }) {
  const [dropdown, setDropDown] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const history = useNavigate();
  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };
  return (
    <div className="flex items-center justify-between py-5 px-6 sticky top-0 bg-[#ddf0ff] z-40">
      <div className="flex items-center gap-8">
        <div className="hidden lg:block transition-all">
          <img src="./images/openlogo.png" className="h-16" alt="" />
        </div>
        <div className="flex flex-col relative">
          <div
            className="flex text-lg items-center gap-2 bg-[#cde5f9] cursor-pointer py-3 px-3 rounded-3xl"
            onClick={() => {
              setDropDown(!dropdown);
              toggleRotation();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-blue-600 hidden lg:flex"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="29px"
              height="29px"
              className="lg:hidden"
              viewBox="0 0 900.000000 900.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill="#2563eb"
                stroke="none"
              >
                <path
                  d="M5945 7035 c-525 -54 -931 -213 -1289 -502 -153 -124 -166 -132 -228
-145 -43 -9 -84 -9 -189 3 -165 17 -494 18 -609 0 -291 -44 -602 -161 -870
-326 -129 -81 -321 -226 -401 -305 -115 -114 -126 -204 -50 -428 132 -385 322
-695 592 -959 190 -187 372 -314 652 -455 152 -76 188 -99 236 -148 58 -60 62
-67 185 -320 234 -484 592 -848 1071 -1088 284 -143 461 -193 571 -162 64 18
141 92 242 233 249 347 391 679 464 1087 18 106 22 162 22 370 1 135 -3 297
-8 361 -12 156 0 196 97 326 325 437 474 813 517 1308 27 302 -16 787 -81 916
-55 110 -180 187 -364 225 -103 21 -393 26 -560 9z m283 -526 c133 -14 177
-35 204 -96 19 -41 23 -71 26 -214 10 -403 -97 -803 -304 -1130 l-26 -41 -69
122 c-114 200 -238 371 -375 519 -148 160 -392 346 -592 452 l-83 44 25 20
c46 36 264 156 358 196 147 63 347 116 498 132 77 8 246 6 338 -4z m-2237
-746 c-120 -240 -192 -445 -240 -688 -30 -146 -52 -382 -50 -525 1 -69 -1
-125 -3 -125 -14 0 -166 97 -248 159 -238 177 -463 465 -589 753 -48 109 -41
145 39 205 196 148 490 273 740 317 77 13 164 20 263 20 l147 1 -59 -117z
m745 -44 c104 -39 290 -153 414 -254 90 -74 235 -225 303 -315 81 -110 170
-259 218 -367 70 -161 52 -209 -116 -313 -190 -116 -419 -208 -624 -250 -152
-31 -358 -44 -486 -32 -129 13 -178 36 -215 102 -23 43 -25 55 -28 231 -3 153
0 212 18 334 36 245 119 484 240 695 68 116 100 156 145 176 42 18 66 17 131
-7z m1111 -1881 c-4 -165 -10 -225 -31 -318 -49 -224 -128 -421 -242 -602 -58
-92 -99 -134 -141 -144 -38 -10 -115 18 -231 83 -317 178 -550 411 -731 731
-22 41 -41 77 -41 82 0 4 91 10 203 13 214 5 310 18 507 68 202 52 399 127
595 229 61 32 112 58 114 59 2 0 1 -90 -2 -201z"
                />
                <path
                  d="M2880 3891 c-432 -94 -723 -474 -817 -1066 -15 -90 -18 -167 -16
-421 1 -319 7 -377 42 -408 24 -21 125 -34 351 -42 433 -16 769 65 1055 254
321 212 466 508 427 870 -26 244 -96 400 -248 554 -210 212 -531 317 -794 259z
m261 -505 c111 -26 206 -105 257 -214 24 -50 27 -69 27 -162 0 -100 -2 -109
-36 -180 -60 -126 -179 -225 -360 -299 -127 -52 -252 -81 -374 -88 -97 -6
-103 -5 -123 17 -32 35 -35 74 -17 201 39 276 120 466 254 599 72 71 136 108
221 126 72 16 85 16 151 0z"
                />
              </g>
            </svg>

            <div className="flex items-center gap-2 tracking-wide">
              <span className="hidden md:block">for&nbsp;Creators</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`transform ${isRotated ? "rotate-180" : ""
                  } transition-transform duration-300 ease-in-out cursor-pointer w-4 h-4`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div
            className={`absolute text-sm md:text-base transition-all flex items-start flex-col w-44 rounded-xl bg-white py-3 px-4 top-14 gap-1   ${dropdown ? "block" : "hidden"
              }`}
          >
            <a href="/" onClick={() => setDropDown(false)}>
              <div className="flex items-center gap-3 hover:bg-blue-50 w-full p-2 rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <span className="">for Creators</span>
              </div>
            </a>

            <a
              href="https://business.openinapp.com/for-brands"
              target="_blank"
              onClick={() => setDropDown(false)}
            >
              <div className="flex items-center gap-3 hover:bg-blue-50 w-full p-2 rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <span className="">for Brands</span>
              </div>
            </a>

            <a
              href="https://business.openinapp.com/"
              target="_blank"
              onClick={() => setDropDown(false)}
            >
              <div className="flex items-center gap-3 hover:bg-blue-50 w-full p-2 rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                  />
                </svg>
                <span className="">for Agencies</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div
          className="flex gap-2 text-xl ring-1 p-3 rounded-full items-center"
          onClick={openModalSmartLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 md:w-6 md:h-6 text-blue-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <div className="text-blue-600 font-semibold hidden lg:block transition-all cursor-pointer">
            Create Smartlink
          </div>
        </div>
        <div
          className="bg-blue-600 text-white flex items-center text-sm justify-center px-5 md:px-10 rounded-3xl font-semibold tracking-wide md:text-lg transition-all gap-2 cursor-pointer"
          onClick={() => history("/login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}
