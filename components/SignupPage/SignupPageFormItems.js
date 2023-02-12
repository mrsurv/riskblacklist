import React from "react";
import Link from "next/link";

function SignupPageFormItems() {
  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        className="w-full px-1 py-1 rounded-lg outline-none bg-specialLightGray-100"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="w-full px-1 py-1 rounded-lg outline-none bg-specialLightGray-100"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="w-full px-1 py-1 rounded-lg outline-none bg-specialLightGray-100"
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        className="w-full px-1 py-1 rounded-lg outline-none bg-specialLightGray-100"
      />
      <div className="mt-2">
        <input
          type="checkbox"
          name="rememberPassword"
          id="rememberPassword"
          className="inline hover:cursor-pointer "
        />
        <label htmlFor="rememberPassword" className="inline mx-2">
          I have read and agreed with
          <Link href={"/"}>
            <p className="inline ml-1 transition duration-300 text-specialSimpleBlue-100 hover:opacity-75 ">
              Terms of Service
            </p>
          </Link>
        </label>
      </div>
    </>
  );
}

export default SignupPageFormItems;
