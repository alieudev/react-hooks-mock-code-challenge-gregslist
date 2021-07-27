import React from "react";
import Search from "./Search";

function Header({onSearchData}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchData={onSearchData}/>
    </header>
  );
}

export default Header;
