import React, { useState } from "react";

export default function YTCash() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
  };

  const isInputValid = inputValue.trim() !== "";

  return (
    <div className="py-10 px-6 flex flex-col gap-10 pb-36">
      <div className="text-4xl font-semibold">Earn</div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="bg-white rounded-2xl overflow-hidden p-3 flex flex-col gap-3">
          <div className="">
            <img
              src="./images/pasteLink.png"
              className="h-[70px] md:h-[103px] transition-all"
              alt=""
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Paste link here"
              className="bg-[#EEEEEE] bg-opacity-40 undefined focus:outline-none w-full border border-black border-opacity-10 py-3 px-4 rounded-lg"
              spellCheck="false"
              autoComplete="off"
              contentEditable="true"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <button
              className={`bg-blue-600 w-full p-3 rounded-lg text-white font-semibold tracking-wide ${
                isInputValid ? "" : "opacity-40"
              }`}
              disabled={!isInputValid}
            >
              Create Cash links
            </button>
          </div>
        </div>
        <div className="w-full md:w-[85%] xl:w-1/2 text-2xl font-semibold flex flex-col gap-2">
          How it works?
          <iframe
            width="100%"
            height="220"
            className="rounded-xl"
            src="https://www.youtube.com/embed/Fq_JuIqSWzY?si=h4eBvA5rVyhx_4-C"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex items-center justify-between w-full md:w-[85%] xl:w-1/2 bg-[#fff5e0] py-4 px-8 ring-2 ring-white rounded-lg">
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
      </div>
    </div>
  );
}
