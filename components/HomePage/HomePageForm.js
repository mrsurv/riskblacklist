import React, { useState } from "react";
import Link from "next/link";
import HomePageFormLogin from "./HomePageFormLogin";

function HomePageForm() {
  return (
    <>
      <div className="h-full mx-0 mt-5 w-fit ">
        <form className="flex flex-col w-full px-10 pt-3 pb-3 mt-3 bg-white rounded-3xl">
          <HomePageFormLogin />
          <div className="flex flex-col items-center mt-5">
            <button
              className="w-4/5 py-2 text-white transition duration-300 rounded-xl bg-specialDarkBlue-300 hover:opacity-75 "
              type="submit"
            >
              Login
            </button>
            <h1 className="mt-4">
              Do not have an account?
              <Link href={"/signup"}>
                <p className="inline ml-2 transition duration-300 text-specialSimpleBlue-100 hover:opacity-75 ">
                  Sign up
                </p>
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </>
  );
}

export default HomePageForm;
