import React from "react";
import HomePageLogo from "./HomePageLogo";
import HomePageTitle from "./HomePageTitle";
import HomePageForm from "./HomePageForm";

function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center homePageScreenHeight bg-specialDarkBlue-400">
        <HomePageLogo />
        <HomePageTitle />
        <HomePageForm />
      </div>
    </>
  );
}

export default HomePage;
