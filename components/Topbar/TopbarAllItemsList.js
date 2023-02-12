import React from "react";
import TopbarSingleItem from "./TopbarSingleItem";
import TopbarSelectLanguage from "./TopbarSelectLanguage";

function TopbarAllItemsList() {
  return (
    <>
      <ul className="flex flex-row justify-between">
        <TopbarSingleItem name="Home" source={"/"} />
        <TopbarSingleItem name="Services" source={"/"} />
        <TopbarSingleItem name="Login / Sign up" source={"/"} />
        <TopbarSingleItem name="About us" source={"/"} />
        <TopbarSelectLanguage />
      </ul>
    </>
  );
}

export default TopbarAllItemsList;
