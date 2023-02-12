import React from "react";
import Link from "next/link";

function TopbarSingleItem({ name, source }) {
  return (
    <>
      <li className="mr-4">
        <Link href={source}>{name}</Link>
      </li>
    </>
  );
}

export default TopbarSingleItem;
