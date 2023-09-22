import React from "react";
import LeftSignIn from "./LeftSignIn";
import RightSignIn from "./RightSignIn";

export default function Signin() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <LeftSignIn />
      <RightSignIn />
    </div>
  );
}
