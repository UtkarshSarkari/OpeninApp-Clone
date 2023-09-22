import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
    <Toaster position="top-center" toastOptions={
          {
            duration: 5000,
            style: {
              fontFamily: 'monospace'
            }
          }
        }></Toaster>
    <BrowserRouter>
      <div className="font-figtree bg-[#ddf0ff]">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}
