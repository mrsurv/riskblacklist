import React from "react";

function TopbarSelectLanguage() {
  return (
    <>
      <li>
        <form>
          <select
            className="text-black bg-white rounded-md"
            name="selectLanguage"
            id="selectLanguage"
          >
            <option value="englishLanguage">EN</option>
            <option value="frenchLanguage">FR</option>
            <option value="arabicLanguage">AR</option>
          </select>
        </form>
      </li>
    </>
  );
}

export default TopbarSelectLanguage;
