import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";

function Sidebar() {
  return (
    <div className="col-sm-12 col-lg-3">
      <>
        <Search />
      </>
      <hr />
      <>
        <Filter />
      </>
      <hr />
      <>
        <Sort />
      </>
    </div>
  );
}

export default Sidebar;
