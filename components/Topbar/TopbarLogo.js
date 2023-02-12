import React from "react";
import Image from "next/image";
import Link from "next/link";

function TopbarLogo() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={require("../../public/logo.png")}
          width={37}
          height={37}
          alt={"RISKBLACKLIST_LOGO"}
        />
      </Link>
    </>
  );
}

export default TopbarLogo;
