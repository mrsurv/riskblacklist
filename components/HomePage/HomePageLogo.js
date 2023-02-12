import React from "react";
import Image from "next/image";
import Link from "next/link";

function HomePageLogo() {
  return (
    <>
      <div className="pt-10 pb-5 mx-0 min-w-min ">
        <Image src={require("../../public/logo.png")} className="mx-auto" />
        <h1 className="text-3xl text-center text-white">RiskBlackList</h1>
      </div>
    </>
  );
}

export default HomePageLogo;
