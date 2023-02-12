import React from "react";
import Link from "next/link";
function HomePageFormLogin() {
  return (
    <>
      <div className="flex flex-row justify-around ">
        <div className="flex flex-col mr-5">
          <label htmlFor="username" className="">
            Username
          </label>
          <input
            type="text"
            className="w-full px-1 py-1 rounded-lg outline-none bg-specialLightGray-100"
            name="username"
            id="username"
          />
          <div className="my-4">
            <input
              type="checkbox"
              name="rememberPassword"
              id="rememberPassword"
              className="inline hover:cursor-pointer"
            />
            <label htmlFor="rememberPassword" className="inline mx-2">
              Remember me
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            className="w-full px-1 py-1 rounded-lg outline-none bg-specialLightGray-100"
            type="password"
            name="password"
            id="password"
          />
          <Link href={"/"}>
            <p className="my-4 transition duration-300 text-specialSimpleBlue-100 hover:opacity-75">
              Forgot password?
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePageFormLogin;
