import React from "react";
import SignupPageForm from "./SignupPageForm";
import SignupPageLogo from "./SignupPageLogo";
import SignupPageTitle from "./SignupPageTitle";

function SignupPage() {
  return (
    <>
      <div className="flex flex-col items-center w-full homePageScreenHeight bg-specialDarkBlue-400">
        <SignupPageLogo />
        <SignupPageTitle />
        <SignupPageForm />
      </div>
    </>
  );
}

export default SignupPage;
