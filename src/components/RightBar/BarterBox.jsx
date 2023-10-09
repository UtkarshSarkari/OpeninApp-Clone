import React, { useState } from "react";

export default function BarterBox() {
  const barterMenu = ["All Campaigns", "Applied", "Saved"];
  const [selectedItemm, setSelectedItemm] = useState(barterMenu[0]);

  return (
    <div className="py-10 px-6">
      <div className="text-3xl font-semibold">Campaigns</div>
      <div className="mt-5">
        <ul className="flex gap-6 sm:gap-8">
          {barterMenu.map((item) => (
            <li
              key={item}
              className={`text-black text-sm sm:text-base opacity-50 cursor-pointer py-2 px-4 ${
                selectedItemm === item
                  ? "bg-black opacity-90 text-white py-2 px-4 rounded-full transition-all shadow-2xl"
                  : ""
              }`}
              onClick={() => setSelectedItemm(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{ height: "calc(100vh - 400px)" }}
        className="flex justify-center items-center"
      >
        {selectedItemm === "All Campaigns" ? (
          <div className="flex flex-col items-center justify-center text-xl md:text-2xl gap-5 font-semibold text-center">
            <div className="ring-2 p-5 rounded-full ring-black">
              <img src="./images/soon.png" className="h-12 md:h-16" alt="" />
            </div>
            More Campaigns Coming Soon
          </div>
        ) : selectedItemm === "Applied" ? (
          <div className="flex flex-col items-center justify-center text-xl md:text-2xl gap-5 font-semibold text-center">
            <div className="">
              <img src="./images/apply.png" className="h-14 md:h-16" alt="" />
            </div>
            Apply for Campaigns Now
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-xl md:text-2xl gap-5 font-semibold text-center">
            <div className="">
              <img src="./images/saved.png" className="h-10" alt="" />
            </div>
            No Saved Campaigns
          </div>
        )}
      </div>
    </div>
  );
}
