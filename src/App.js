import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard/Dashboard";

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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}
