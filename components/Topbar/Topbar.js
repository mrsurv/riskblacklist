import React, { useState } from "react";
import TopbarLogo from "./TopbarLogo";
import TopbarPremiumButton from "./TopbarPremiumButton";
import TopbarAllItemsList from "./TopbarAllItemsList";
import { AiOutlineMenu } from "react-icons/ai";
import TopbarDrawer from "./TopbarDrawer";

function Topbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="flex flex-row items-center justify-between w-full h-12 px-5 text-white bg-specialDarkBlue-100">
        <div>
          <TopbarLogo />
        </div>
        <div className="hidden md:flex">
          <TopbarAllItemsList />
        </div>
        <div className="">
          <div className="hidden md:flex">
            <TopbarPremiumButton />
          </div>
          <div className="block md:hidden">
            <TopbarDrawer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
