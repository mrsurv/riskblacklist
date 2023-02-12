"use client";

import BottomBar from "@/components/BottomBar/BottomBar";
import SignupPage from "@/components/SignupPage/SignupPage";
import Topbar from "@/components/Topbar/Topbar";

import React from "react";

function page() {
  return (
    <>
      <Topbar />
      <SignupPage />
      <BottomBar />
    </>
  );
}

export default page;
