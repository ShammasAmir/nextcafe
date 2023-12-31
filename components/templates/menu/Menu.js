import React from "react";
import Foods from "./Foods";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";

function Menu() {
  return (
    <section className="food_section layout_padding">
      <div className="container">
        <div className="row">
          <>
            <Sidebar />
          </>
          <div className="col-sm-12 col-lg-9">
            <>
              <Foods />
              <Pagination />
            </>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
