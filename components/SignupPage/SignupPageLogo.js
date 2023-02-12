import React from "react";
import Image from "next/image";
import Link from "next/link";

function SignupPageLogo() {
  return (
    <>
      <div className="pt-2 pb-0 mx-0 min-w-min ">
        <Image
          src={require("../../public/logo.png")}
          className="mx-auto"
          width={50}
          height={50}
        />
        <h1 className="text-xl text-center text-white">RiskBlackList</h1>
      </div>
    </>
  );
}

export default SignupPageLogo;
