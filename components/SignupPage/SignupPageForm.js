import React from "react";
import SignupPageFormItems from "./SignupPageFormItems";
import Link from "next/link";

function SignupPageForm() {
  return (
    <>
      <div className="w-3/5 h-full mx-0 mt-5 ">
        <form className="flex flex-col w-full px-10 pt-3 pb-3 mt-3 bg-white rounded-3xl">
          <SignupPageFormItems />
          <div className="flex flex-col items-center mt-5">
            <button
              className="w-4/5 py-2 text-white transition duration-300 rounded-xl bg-specialDarkBlue-300 hover:opacity-75 "
              type="submit"
            >
              Sign up
            </button>
            <h1 className="mt-4 text-center">
              Already have an account?
              <Link href={"/"}>
                <p className="inline ml-2 transition duration-300 text-specialSimpleBlue-100 hover:opacity-75 ">
                  Login
                </p>
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupPageForm;
