import Link from "next/link";
import React from "react";

function TopbarPremiumButton() {
  return (
    <>
      <Link href={"/"}>
        <button className="px-3 py-1 uppercase rounded-md bg-specialDarkBlue-300">
          premium
        </button>
      </Link>
    </>
  );
}

export default TopbarPremiumButton;
