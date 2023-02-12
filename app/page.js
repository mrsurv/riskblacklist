"use client";

import BottomBar from "@/components/BottomBar/BottomBar";
import HomePage from "@/components/HomePage/HomePage";
import Topbar from "@/components/Topbar/Topbar";
import React from "react";

function page() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <Topbar />
        <HomePage />
        <BottomBar />
      </div>
    </>
  );
}

export default page;
