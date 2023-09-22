import React, { useState } from "react";
import { database, provider1, provider2 } from "../../firebaseConfig";
import toast from "react-hot-toast";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function RightSignIn() {
  const [loggedIn, setLoggedIn] = useState(true);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      toast.error("Password must be longer than 6 characters");
      return;
    }
    if (type == "signin") {
      signInWithEmailAndPassword(database, email, password)
        .then(() => {
          history("/home");
          toast.success("Logged in successfully");
        })
        .catch((error) => {
          toast.error("User not registered");
          setLoggedIn(false);
        });
    } else {
      createUserWithEmailAndPassword(database, email, password)
        .then(() => {
          history("/home");
          toast.success("Registered successfully");
        })
        .catch(() => {
          toast.error("User already registered");
          setLoggedIn(true);
        });
    }
  };

  const handleGoogleAuth = () => {
    signInWithPopup(database, provider1)
      .then((data) => {
        const name = data.user.displayName;
        const email = data.user.email;
        const profilePic = data.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        history("/home");
        toast.success('Logged in successfully');
      })
      .catch((error) => {
        toast.error('An error occured');
      });
  };

  const handleGithubAuth = () => {
    signInWithPopup(database, provider2)
      .then((data) => {
        const name = data.user.displayName;
        const email = data.user.email;
        const profilePic = data.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        history("/home");
        toast.success('Logged in successfully');
      })
      .catch((error) => {
        toast.error('An error occured');
      });
  };

  return (
    <div className="flex w-screen lg:w-[60%] h-screen items-center justify-center relative">
      <img
        src="./images/dotsb.png"
        className="absolute top-[70px] 2xl:top-[60px] left-14 2xl:left-40 h-20 opacity-20"
        alt=""
      />
      <img
        src="./images/dotsb.png"
        className="absolute bottom-[70px] 2xl:bottom-[60px] right-14 2xl:right-40 h-20 opacity-20"
        alt=""
      />

      <div className="w-[90%] md:w-[70%] transition-all xl:w-[60%] shadow-2xl p-10 md:p-14 lg:p-10 xl:p-20 bg-white rounded-2xl z-10">
        {/* Logo and line */}
        <div className="h-20 flex flex-col justify-between">
          <div className="font-bold transition-all max-xs:text-2xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-5xl flex items-center">
            <img
              className="mr-4 h-10 cursor-grab w-10"
              src="./images/logo.png"
              alt=""
            />
            <span className="">
              OpenIn<span className="text-blue-600">App</span>
            </span>
          </div>
          <div className="h-1 w-36 bg-emerald-300"></div>
        </div>

        {/* Input and button */}
        <div className="mt-10 flex flex-col">
          <form
            action=""
            className="flex flex-col items-center"
            onSubmit={(e) => handleSubmit(e, loggedIn ? "signin" : "register")}
          >
            <div className="flex flex-col w-full">
              <label
                className="font-semibold tracking-wide text-lg lg:text-base"
                htmlFor=""
              >
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your email"
                className="py-2 px-4 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-md outline-none mt-1"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <label
                className="font-semibold tracking-wide text-lg lg:text-base"
                htmlFor=""
              >
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                placeholder="Enter your password"
                className="py-2 px-4 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-md outline-none mt-1"
              />
            </div>
            <button className="bg-blue-500 w-full text-white rounded-md h-10 mt-8 text-lg cursor-pointer">
              {loggedIn ? "SignIn" : "Register"}
            </button>
          </form>
          <div className="flex items-center justify-center text-lg">
            {loggedIn ? (
              <div className="mt-8">
                Don't have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setLoggedIn(false)}
                >
                  Register
                </span>
              </div>
            ) : (
              <div className="mt-8">
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setLoggedIn(true)}
                >
                  SignIn
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center justify-center bg-zinc-200 py-2 w-[45%] rounded-lg cursor-pointer" onClick={handleGoogleAuth}>
            <img src="./images/google.png" height={15} width={15} alt="" />
            <div className="ml-2">Google</div>
          </div>
          <div className="flex w-[45%] items-center bg-zinc-200 py-2 justify-center rounded-lg cursor-pointer" onClick={handleGithubAuth}>
            <img src="./images/github.png" height={15} width={15} alt="" />
            <div className="ml-2">GitHub</div>
          </div>
        </div>

        <a
          href="https://play.google.com/store/search?q=openinapp&c=apps"
          target="_blank"
        >
          <div className="flex items-center justify-center mt-6 md:mt-8 transition-all lg:mt-10 bg-zinc-200 rounded-lg cursor-pointer">
            Get the app on
            <div className="flex items-center bg-zinc-200 py-2 px-4 rounded-lg">
              <img src="./images/play.png" className="h-5" alt="" />
              <span className="ml-2">Play Store</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
