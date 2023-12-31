import React from "react";
import Link from "next/link";

function Search() {
  return (
    <div>
      <label className="form-label">جستجو</label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="نام محصول ..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Link href="#" className="input-group-text" id="basic-addon2">
          <i className="bi bi-search"></i>
        </Link>
      </div>
    </div>
  );
}

export default Search;
